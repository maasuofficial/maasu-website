import fetch from 'isomorphic-fetch'

// -----------------------------------------------------
// Constants
// -----------------------------------------------------

export const DB_MASTER =
  '2PACX-1vRyNMns3pIM4ODIZZT0BZRQbjBLgM4RK6LHW-lpj7vHe43h-v_VoibacQyE12xqIh5BP1ecCzRAJyei'

// formally known as gid
export const MEMBERS_ID = '0'
export const CONFERENCES_ID = '1511181098'
export const BOARD_ID = '1262721235'
export const EVENTS_ID = '1201194910'

// -----------------------------------------------------
// Functions
// -----------------------------------------------------

export const getHeaders = () => ({
  headers: {
    'content-type': 'application/json',
    // enable CORS
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT',
  },
})

// converts "regular csv" to an array.
// prevents funky cases like strings with commas in them,
// e.g. "Minnesota, Duluth"
// credit to https://stackoverflow.com/questions/8493195/how-can-i-parse-a-csv-string-with-javascript-which-contains-comma-in-data
export const CSVtoStrArr = (text: string): string[] | null => {
  const reValid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/
  const reValue = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g
  // Return NULL if input string is not well formed CSV string.
  if (!reValid.test(text)) return null
  const a = [] // Initialize array to receive values.
  text.replace(
    reValue, // "Walk" the string using replace with callback.
    (_, m1, m2, m3) => {
      // Remove backslash from \' in single quoted values.
      if (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"))
      // Remove backslash from \" in double quoted values.
      else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'))
      else if (m3 !== undefined) a.push(m3)
      return '' // Return empty string.
    }
  )
  // Handle special case of empty last value.
  if (/,\s*$/.test(text)) a.push('')
  return a
}

export const CSVtoObject = <T>(csv: string): T[] => {
  const rows: string[][] = csv.split(/\r\n/).map((r) => {
    let strArr: string[] | null = CSVtoStrArr(r)
    if (!strArr) strArr = []
    return strArr
  })
  const props = rows.splice(0, 1)[0]

  const data: T[] = []
  for (const r of rows) {
    const item: any = {}
    for (let i = 0; i < props.length; i++) {
      item[props[i]] = r[i]
    }

    data.push(item)
  }

  return data
}

export const fetchCSVObject = async <T>(
  id: string
): Promise<{
  data: T[]
  error: ResError
}> => {
  let res = null
  let error: ResError = null

  try {
    res = await fetch(
      `https://docs.google.com/spreadsheets/d/e/${DB_MASTER}/pub?gid=${id}&output=csv`
    )
    res = await res.text()
  } catch (e) {
    error = {
      code: 404,
      message: 'unable to fetch data',
    }
  }

  const data: T[] = CSVtoObject<T>(res as string)

  return { data, error }
}

export const dictionarySort = (a: string, b: string): number => {
  const articles = ['a', 'an', 'the']

  let nameAArr = a.toLocaleLowerCase().split(' ')
  let nameBArr = b.toLocaleLowerCase().split(' ')

  if (articles.indexOf(nameAArr[0]) >= 0) {
    nameAArr = nameAArr.slice(1)
  }

  if (articles.indexOf(nameBArr[0]) >= 0) {
    nameBArr = nameBArr.slice(1)
  }

  return nameAArr[0].localeCompare(nameBArr[0])
}

export const descDateSort = (a: string, b: string): number => {
  const dateA = new Date(a)
  const dateB = new Date(b)

  let comp = 0
  if (dateB < dateA) {
    comp = -1
  } else if (dateA < dateB) {
    comp = 1
  }

  return comp
}

// -----------------------------------------------------
// Types
// -----------------------------------------------------

export type ResError = {
  code: number
  message: string
} | null

export type ResData = object | object[] | null

export type ResBody = {
  data: ResData
  error: ResError
}

export type Res = {
  statusCode: number
  body: string
}
