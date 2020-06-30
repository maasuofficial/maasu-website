import {
  fetchCSVObject,
  descDateSort,
  AWARDS_ID,
  getHeaders,
  ResBody,
  ResData,
} from './utils'

type AwardType = { id: string; type: string; date: string; recipient: string }

export const handler = async (event: any, context: any) => {
  let data: ResData = null

  const { data: res, error }: ResBody = await fetchCSVObject<object>(AWARDS_ID)

  if (res) {
    data = (res as [])
      .filter(
        (c: AwardType) =>
          c.id != null &&
          c.type != null &&
          c.date != null &&
          c.recipient != null
      )
      .sort((a: AwardType, b: AwardType): number =>
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
