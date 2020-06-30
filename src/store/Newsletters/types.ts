import {
  NEWSLETTERS_FETCH,
  NEWSLETTERS_SUCCESS,
  NEWSLETTERS_ERROR,
} from 'constants/actions'

export type Newsletter = {
  id: string
  vol: string
  issue: string
  date: string
  url: string
  isApproxDate?: boolean
  title?: string
}

export type NewsletterRaw = {
  isApproxDate?: string
}

export type NewsletterAPIResponse = {
  data: Newsletter[]
  error: object
}

export type NewsletterActionTypes =
  | { type: typeof NEWSLETTERS_FETCH }
  | { type: typeof NEWSLETTERS_SUCCESS; payload: Newsletter[] }
  | { type: typeof NEWSLETTERS_ERROR; payload: string }

export type NewsletterState = {
  isFetching: boolean
  newsletters: Newsletter[]
  error: string
}
