import {
  REPORTS_FETCH,
  REPORTS_SUCCESS,
  REPORTS_ERROR,
} from 'constants/actions'

export type Report = {
  id: string
  startDate: string
  endDate: string
  url: string
  title?: string
}

export type ReportAPIResponse = {
  data: Report[]
  error: object
}

export type ReportActionTypes =
  | { type: typeof REPORTS_FETCH }
  | { type: typeof REPORTS_SUCCESS; payload: Report[] }
  | { type: typeof REPORTS_ERROR; payload: string }

export type ReportState = {
  isFetching: boolean
  reports: Report[]
  error: string
}
