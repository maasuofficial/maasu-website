import { AppState } from 'store/types'

export const getIsFetchingAwards = (state: AppState) => state.awards.isFetching
export const getAwards = (state: AppState) => state.awards.awards
export const getAwardsError = (state: AppState) => state.awards.error
