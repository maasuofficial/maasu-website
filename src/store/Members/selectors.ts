import { AppState } from 'store/types'
import { Member } from './types'

export const getIsFetchingMembers = (state: AppState) => state.members.loading
export const getMembers = (state: AppState): Member[] => state.members.members
export const getMembersError = (state: AppState) => state.members.error
