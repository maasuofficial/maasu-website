import {
  fetchCSVObject,
  descDateSort,
  EVENTS_ID,
  getHeaders,
  ResBody,
  ResData,
} from './utils'

type EventType = { id: string; date: string; title: string }

export const handler = async (event: any, context: any) => {
  let data: ResData = null

  const { data: res, error }: ResBody = await fetchCSVObject<object>(EVENTS_ID)

  if (res) {
    data = (res as [])
      .filter(
        (c: EventType) => c.id != null && c.date != null && c.title != null
      )
      .sort((a: EventType, b: EventType): number =>
        descDateSort(a.date, b.date)
      )
  }

  const body: ResBody = { data, error }
  return {
    context,
    event,
    ...getHeaders(),
    statusCode: 200,
    body: JSON.stringify(body),
  }
}
