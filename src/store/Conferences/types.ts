import {
  LEADERSHIP_SUMMIT,
  SPRING_CONFERENCE,
  FALL_CONFERENCE,
  MAASUX,
  CONFERENCES_FETCH,
  CONFERENCES_SUCCESS,
  CONFERENCES_ERROR,
} from 'constants/strings'

export type ConferenceTypeRaw =
  | typeof LEADERSHIP_SUMMIT.key
  | typeof SPRING_CONFERENCE.key
  | typeof FALL_CONFERENCE.key
  | typeof MAASUX.key

export type ConferenceType =
  | typeof LEADERSHIP_SUMMIT.value
  | typeof SPRING_CONFERENCE.value
  | typeof FALL_CONFERENCE.value
  | typeof MAASUX.value

export interface ConferenceRaw {
  type: ConferenceTypeRaw
  isApproxDate: string | boolean
}

export interface Conference extends ConferenceRaw {
  id: string
  date: string
  type: ConferenceType
  title?: string
  host: string
  city: string
  state: string
  isApproxDate: boolean
  desc?: string
  bid?: string
  logo?: string
  banner?: string
}

export type ConferenceAPIResponse = {
  data: ConferenceRaw[]
  error: object
}

export type ConferenceActionTypes =
  | { type: typeof CONFERENCES_FETCH }
  | { type: typeof CONFERENCES_SUCCESS; payload: Conference[] }
  | { type: typeof CONFERENCES_ERROR; payload: string }

export type ConferenceState = {
  isFetching: boolean
  conferences: Conference[]
  error: string
}
