import {
  fetchCSVObject,
  dictionarySort,
  RESOURCES_ID,
  getHeaders,
  ResBody,
  ResData,
} from './utils'

type ResourcesType = {
  id: string
  title: string
  url: string
}

export const handler = async (event: any, context: any) => {
  let data: ResData = null

  const { data: res, error }: ResBody = await fetchCSVObject<object>(
    RESOURCES_ID
  )

  if (res) {
    data = (res as [])
      .filter(
        (b: ResourcesType) => b.id != null && b.title != null && b.url != null
      )
      .sort((a: ResourcesType, b: ResourcesType): number =>
        dictionarySort(a.title, b.title)
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
