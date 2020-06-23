import {
  MEMBERS_FETCH,
  MEMBERS_SUCCESS,
  MEMBERS_ERROR,
} from 'constants/actions'

export type Member = {
  id: string
  name: string
  nameAbv?: string
  orgName?: string
  orgNameAbv?: string
  orgUrl?: string
  city: string
  state: string
  expDate: string
  mrepName: string
  mrepEmail: string
}

export type MemberState = {
  loading: boolean
  members: Member[]
  error: string
}

export type MemberActionTypes =
  | { type: typeof MEMBERS_FETCH }
  | { type: typeof MEMBERS_SUCCESS; payload: Member[] }
  | { type: typeof MEMBERS_ERROR; payload: string }
