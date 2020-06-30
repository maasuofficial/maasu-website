import { BoardActionTypes, BoardState } from './types'
import { BOARD_FETCH, BOARD_SUCCESS, BOARD_ERROR } from 'constants/actions'

const initialState = {
  isFetching: false,
  board: [],
  error: '',
}

export const boardReducer = (
  state: BoardState = initialState,
  action: BoardActionTypes
) => {
  switch (action.type) {
    case BOARD_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case BOARD_SUCCESS:
      return {
        isFetching: false,
        board: action.payload,
        error: '',
      }
    case BOARD_ERROR:
      return {
        isFetching: false,
        board: [],
        error: action.payload,
      }
    default:
      return state
  }
}
