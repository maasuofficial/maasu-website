// -----------------------------------------------------
// Constants
// -----------------------------------------------------

export const MEMBERS_ID =
  '2PACX-1vTi1LU778yHT3zp77SNk7wi8s2NmIxj-eM8RC1oB2hRuseiXFacb28Hb1wrvStakENnnS40HR9ulkBi'

// -----------------------------------------------------
// Functions
// -----------------------------------------------------

// converts "regular csv" to an array.
// prevents funky cases like strings with commas in them,
// e.g. "Minnesota, Duluth"
// credit to https://stackoverflow.com/questions/8493195/how-can-i-parse-a-csv-string-with-javascript-which-contains-comma-in-data
export const CSVtoStrArr = (text: string): string[] | null => {
  const reValid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/
  const reValue = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g
  // Return NULL if input string is not well formed CSV string.
  if (!reValid.test(text)) return null
  var a = [] // Initialize array to receive values.
  text.replace(
    reValue, // "Walk" the string using replace with callback.
    (m0, m1, m2, m3) => {
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

export const CSVtoObject = (csv: string): object[] => {
  const rows: string[][] = csv.split(/\r\n/).map((r) => {
    let strArr: string[] | null = CSVtoStrArr(r)
    if (!strArr) strArr = []
    return strArr
  })
  const props = rows.splice(0, 1)[0]

  const data: object[] = []
  for (const r of rows) {
    const item: any = {}
    for (let i = 0; i < props.length; i++) {
      item[props[i]] = r[i]
    }

    data.push(item)
  }

  return data
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
