import { ReportActionTypes, ReportState } from './types'
import {
  REPORTS_FETCH,
  REPORTS_SUCCESS,
  REPORTS_ERROR,
} from 'constants/actions'

const initialState = {
  isFetching: false,
  reports: [],
  error: '',
}

export const reportsReducer = (
  state: ReportState = initialState,
  action: ReportActionTypes
) => {
  switch (action.type) {
    case REPORTS_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case REPORTS_SUCCESS:
      return {
        isFetching: false,
        reports: action.payload,
        error: '',
      }
    case REPORTS_ERROR:
      return {
        isFetching: false,
        reports: [],
        error: action.payload,
      }
    default:
      return state
  }
}
