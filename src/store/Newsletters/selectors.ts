import { AppState } from 'store/types'

export const getIsFetchingNewsletters = (state: AppState) =>
  state.newsletters.isFetching
export const getNewsletters = (state: AppState) => state.newsletters.newsletters
export const getNewslettersError = (state: AppState) => state.newsletters.error
