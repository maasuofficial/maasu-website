// -----------------------------------------------------
// Constants
// -----------------------------------------------------

export const MEMBERS_ID =
  '2PACX-1vTi1LU778yHT3zp77SNk7wi8s2NmIxj-eM8RC1oB2hRuseiXFacb28Hb1wrvStakENnnS40HR9ulkBi'

// -----------------------------------------------------
// Functions
// -----------------------------------------------------

export const CSV_TO_JSON = (csv: string): object[] => {
  const rows: string[][] = csv.split(/\r\n/).map((r) => r.split(','))
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
