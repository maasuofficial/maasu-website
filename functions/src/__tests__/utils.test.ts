import { CSVtoStrArr } from '../utils'

describe('CSVtoStrArr', () => {
  // routine
  it('splits a standard csv row into an array of strings', () => {
    const test = 'this, is, a, csv, string'
    const result = ['this', 'is', 'a', 'csv', 'string']
    expect(CSVtoStrArr(test)).toStrictEqual(result)
  })

  // boundary
  it('converts a single value csv to a single item object', () => {
    const test = 'hello'
    const result = ['hello']
    expect(CSVtoStrArr(test)).toStrictEqual(result)
  })

  // boundary
  it('splits csv rows containing string commas', () => {
    const test = 'hello, "this comma, is", unexpected'
    const result = ['hello', 'this comma, is', 'unexpected']
    expect(CSVtoStrArr(test)).toStrictEqual(result)
  })

  // boundary
  it('splits csv rows containing string hypens or dashes', () => {
    const test = 'hello, "this dash - is", unexpected'
    const result = ['hello', 'this dash - is', 'unexpected']
    expect(CSVtoStrArr(test)).toStrictEqual(result)
  })
})
