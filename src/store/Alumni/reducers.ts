import { AlumniActionTypes, AlumniState } from './types'
import {
  ALUMNI_FETCH,
  ALUMNI_SUCCESS,
  ALUMNI_ERROR,
  ALUMNI_CLEAR,
} from 'constants/actions'

const initialState = {
  isFetching: false,
  alumni: [],
  error: '',
}

export const alumniReducer = (
  state: AlumniState = initialState,
  action: AlumniActionTypes
) => {
  switch (action.type) {
    case ALUMNI_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case ALUMNI_SUCCESS:
      return {
        isFetching: false,
        alumni: action.payload,
        error: '',
      }
    case ALUMNI_ERROR:
      return {
        isFetching: false,
        alumni: [],
        error: action.payload,
      }
    case ALUMNI_CLEAR:
      return {
        isFetching: false,
        alumni: [],
        error: '',
      }
    default:
      return state
  }
}
