import { AppState } from 'store/types'

export const getIsFetchingConferences = (state: AppState) =>
  state.conferences.isFetching
export const getConferences = (state: AppState) => state.conferences.conferences
export const getConferencesError = (state: AppState) => state.conferences.error
