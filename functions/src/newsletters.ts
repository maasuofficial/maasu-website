import {
  fetchCSVObject,
  descDateSort,
  NEWSLETTERS_ID,
  getHeaders,
  ResBody,
  ResData,
} from './utils'

type NewsletterType = {
  id: string
  vol: string
  issue: string
  date: string
  url: string
}

export const handler = async (event: any, context: any) => {
  let data: ResData = null

  const { data: res, error } = await fetchCSVObject<NewsletterType>(
    NEWSLETTERS_ID
  )

  if (res) {
    let newsletters = res.filter(
      (n: NewsletterType) =>
        n.id != null &&
        n.vol != null &&
        n.issue != null &&
        n.date != null &&
        n.url != null
    )
    newsletters = newsletters.sort(
      (a: NewsletterType, b: NewsletterType): number =>
        descDateSort(a.date, b.date)
    )

    data = newsletters
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
