import { EVENTS_FETCH, EVENTS_SUCCESS, EVENTS_ERROR } from 'constants/actions'

// forced to use HEvent since
// Event is already taken by the DOM
export type HEvent = {
  id: string
  date: string
  title: string
  desc?: string
  university?: string
  city?: string
  state?: string
  cta?: string
  isApproxDate?: boolean
}

export type HEventRaw = {
  isApproxDate?: string
}

export type HEventAPIResponse = {
  data: HEventRaw[]
  error: object
}

export type HEventActionTypes =
  | { type: typeof EVENTS_FETCH }
  | { type: typeof EVENTS_SUCCESS; payload: HEvent[] }
  | { type: typeof EVENTS_ERROR; payload: string }

export type HEventState = {
  isFetching: boolean
  events: HEvent[]
  eventsError: string
}
