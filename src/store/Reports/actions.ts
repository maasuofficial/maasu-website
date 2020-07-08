import { api, BASE_URL } from 'store/api'
import { Report, ReportAPIResponse } from './types'
import { Dispatch } from 'redux'
import {
  REPORTS_FETCH,
  REPORTS_SUCCESS,
  REPORTS_ERROR,
} from 'constants/actions'

export const reportsRequest = () => ({
  type: REPORTS_FETCH,
})

export const reportsSuccess = (reports: Report[]) => ({
  type: REPORTS_SUCCESS,
  payload: reports,
})

export const reportsError = (error: string) => ({
  type: REPORTS_ERROR,
  payload: error,
})

export const fetchReports = () => {
  return async (dispatch: Dispatch) => {
    dispatch(reportsRequest())
    try {
      const { data, error } = await api<ReportAPIResponse>(
        `${BASE_URL}/reports`
      )
      if (error) throw error
      dispatch(reportsSuccess(data))
    } catch (e) {
      dispatch(reportsError(e.message))
    }
  }
}
