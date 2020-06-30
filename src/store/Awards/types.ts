import { AWARDS_FETCH, AWARDS_SUCCESS, AWARDS_ERROR } from 'constants/actions'

export type Award = {
  id: string
  type: string
  date: string
  recipient: string
  school?: string
  isApproxDate?: string
}

export type AwardAPIResponse = {
  data: Award[]
  error: object
}

export type AwardActionTypes =
  | { type: typeof AWARDS_FETCH }
  | { type: typeof AWARDS_SUCCESS; payload: Award[] }
  | { type: typeof AWARDS_ERROR; payload: string }

export type AwardState = {
  isFetching: boolean
  awards: Award[]
  error: string
}
