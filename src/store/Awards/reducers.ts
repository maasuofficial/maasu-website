import { AwardActionTypes, AwardState } from './types'
import { AWARDS_FETCH, AWARDS_SUCCESS, AWARDS_ERROR } from 'constants/actions'

const initialState = {
  isFetching: false,
  awards: [],
  error: '',
}

export const awardsReducer = (
  state: AwardState = initialState,
  action: AwardActionTypes
) => {
  switch (action.type) {
    case AWARDS_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case AWARDS_SUCCESS:
      return {
        isFetching: false,
        awards: action.payload,
        error: '',
      }
    case AWARDS_ERROR:
      return {
        isFetching: false,
        awards: [],
        error: action.payload,
      }
    default:
      return state
  }
}
