import { BoardMember } from './types'
import { Dispatch } from 'redux'
import { BOARD_FETCH, BOARD_SUCCESS, BOARD_ERROR } from 'constants/strings'
import data from 'constants/cache/board.json'

export const boardRequest = () => ({
  type: BOARD_FETCH,
})

export const boardSuccess = (board: BoardMember[]) => ({
  type: BOARD_SUCCESS,
  payload: board,
})

export const boardError = (error: string) => ({
  type: BOARD_ERROR,
  payload: error,
})

export const fetchBoard = () => {
  return async (dispatch: Dispatch) => {
    dispatch(boardRequest())
    // TODO fetch
    dispatch(boardSuccess(data))
  }
}
