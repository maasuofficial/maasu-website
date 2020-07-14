import {
  fetchCSVObject,
  dictionarySort,
  MEMBERS_ID,
  getHeaders,
  ResBody,
  ResData,
} from './utils'

type MemberType = { id: string; name: string }

export const handler = async (event: any, context: any) => {
  let data: ResData = null

  const { data: res, error } = await fetchCSVObject<MemberType>(MEMBERS_ID)

  if (res) {
    let members = res.filter((m: MemberType) => m.id != null && m.name != null)
    members = members.sort((a: MemberType, b: MemberType): number =>
      dictionarySort(a.name, b.name)
    )

    data = members
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
