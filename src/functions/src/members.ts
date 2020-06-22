import fetch from 'isomorphic-fetch'
import { CSVtoObject, MEMBERS_ID, ResBody, ResData, ResError } from './utils'

export async function handler(event: any, context: any) {
  let data: ResData = null
  let error: ResError = null

  let res = null
  try {
    res = await fetch(
      `https://docs.google.com/spreadsheets/d/e/${MEMBERS_ID}/pub?output=csv`
    )
    res = await res.text()
  } catch (e) {
    error = {
      code: 404,
      message: 'unable to fetch data',
    }
  }

  if (res) {
    data = CSVtoObject(res as string)
  }

  const body: ResBody = { data, error }
  return {
    context,
    event,
    headers: {
      'content-type': 'application/json',
      // enable CORS
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
    },
    statusCode: 200,
    body: JSON.stringify(body),
  }
}
