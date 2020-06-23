import fetch from 'isomorphic-fetch'
import { CSVtoObject, MEMBERS_ID, ResBody, ResData, ResError } from './utils'

type MemberType = { id: string; name: string }

const dictionarySort = (
  { name: nameA }: MemberType,
  { name: nameB }: MemberType
): number => {
  const articles = ['a', 'an', 'the']

  let nameAArr = nameA.toLocaleLowerCase().split(' ')
  let nameBArr = nameB.toLocaleLowerCase().split(' ')

  if (articles.indexOf(nameAArr[0]) >= 0) {
    nameAArr = nameAArr.slice(1)
  }

  if (articles.indexOf(nameBArr[0]) >= 0) {
    nameBArr = nameBArr.slice(1)
  }

  return nameAArr[0].localeCompare(nameBArr[0])
}

export const handler = async (event: any, context: any) => {
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
    let members: MemberType[] = CSVtoObject<MemberType>(res as string)
    members = members.filter((m: MemberType) => m.id != null && m.name != null)
    members = members.sort(dictionarySort)

    data = members
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
