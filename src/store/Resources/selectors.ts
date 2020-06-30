import { AppState } from 'store/types'

export const getIsFetchingResources = (state: AppState) =>
  state.resources.isFetching
export const getResources = (state: AppState) => state.resources.resources
export const getResourcesError = (state: AppState) => state.resources.error
