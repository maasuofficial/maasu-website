import { AppState } from 'store/types'

export const getIsFetchingReports = (state: AppState) =>
  state.reports.isFetching
export const getReports = (state: AppState) => state.reports.reports
export const getReportsError = (state: AppState) => state.reports.error
