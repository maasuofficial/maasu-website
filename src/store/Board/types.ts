import { BOARD_FETCH, BOARD_SUCCESS, BOARD_ERROR } from 'constants/actions'

export type BoardMember = {
  id: string
  fname: string
  lname: string
  alias?: string
  school?: string
  city?: string
  state?: string
  positionType: string
  positionPriority: number
  positionTitle?: string
  positionEmail?: string
  positionDesc?: string
  emailFallback?: string
  bio?: string
  mname?: string
  imageUrl?: string
}

export type BoardAPIResponse = {
  data: BoardMember[]
  error: object
}

export type BoardActionTypes =
  | { type: typeof BOARD_FETCH }
  | { type: typeof BOARD_SUCCESS; payload: BoardMember[] }
  | { type: typeof BOARD_ERROR; payload: string }

export type BoardState = {
  isFetching: boolean
  board: BoardMember[]
  error: string
}
