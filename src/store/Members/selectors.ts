import { AppState } from 'store/types'

export const getIsFetchingMembers = (state: AppState) => state.members.loading
export const getMembers = (state: AppState) => state.members.members
