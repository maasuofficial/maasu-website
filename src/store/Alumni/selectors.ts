import { AppState } from 'store/types'

export const getIsFetchingAlumni = (state: AppState) => state.alumni.isFetching
export const getAlumni = (state: AppState) => state.alumni.alumni
export const getAlumniError = (state: AppState) => state.alumni.error
