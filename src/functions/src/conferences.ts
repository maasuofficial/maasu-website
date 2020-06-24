import { fetchCSVObject, CONFERENCES_ID, getHeaders, ResBody } from './utils'

export const handler = async (event: any, context: any) => {
  const body: ResBody = await fetchCSVObject<object>(CONFERENCES_ID)

  return {
    context,
    event,
    ...getHeaders(),
    statusCode: 200,
    body: JSON.stringify(body),
  }
}
