import { AppState } from 'store/types'

export const getIsFetchingMembers = (state: AppState) =>
  state.members.isFetching
export const getMembers = (state: AppState) => state.members.members
export const getMembersError = (state: AppState) => state.members.error
