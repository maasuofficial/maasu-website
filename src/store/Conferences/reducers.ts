import {
  CONFERENCES_FETCH,
  CONFERENCES_SUCCESS,
  CONFERENCES_ERROR,
} from 'constants/actions'
import { ConferenceActionTypes, ConferenceState } from './types'

const initialState = {
  isFetching: false,
  conferences: [],
  error: '',
}

export const conferencesReducer = (
  state: ConferenceState = initialState,
  action: ConferenceActionTypes
): ConferenceState => {
  switch (action.type) {
    case CONFERENCES_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case CONFERENCES_SUCCESS:
      return {
        isFetching: false,
        conferences: action.payload,
        error: '',
      }
    case CONFERENCES_ERROR:
      return {
        isFetching: false,
        conferences: [],
        error: action.payload,
      }
    default:
      return state
  }
}
