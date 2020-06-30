import { AppState } from 'store/types'

export const getIsFetchingBoard = (state: AppState) => state.board.isFetching
export const getBoard = (state: AppState) => state.board.board
export const getBoardError = (state: AppState) => state.board.error
