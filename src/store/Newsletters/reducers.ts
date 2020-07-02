import { NewsletterActionTypes, NewsletterState } from './types'
import {
  NEWSLETTERS_FETCH,
  NEWSLETTERS_SUCCESS,
  NEWSLETTERS_ERROR,
} from 'constants/actions'

const initialState = {
  isFetching: false,
  newsletters: [],
  error: '',
}

export const newslettersReducer = (
  state: NewsletterState = initialState,
  action: NewsletterActionTypes
) => {
  switch (action.type) {
    case NEWSLETTERS_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case NEWSLETTERS_SUCCESS:
      return {
        isFetching: false,
        newsletters: action.payload,
        error: '',
      }
    case NEWSLETTERS_ERROR:
      return {
        isFetching: false,
        newsletters: [],
        error: action.payload,
      }
    default:
      return state
  }
}
