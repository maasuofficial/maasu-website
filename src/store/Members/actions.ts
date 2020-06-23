import { api, BASE_URL } from 'store/api'
import {
  MEMBERS_FETCH,
  MEMBERS_SUCCESS,
  MEMBERS_ERROR,
} from 'constants/actions'
import { Dispatch } from 'redux'
import { Member, MemberAPIResponse } from './types'

export const membersRequest = () => ({
  type: MEMBERS_FETCH,
})

export const membersSuccess = (members: Member[]) => ({
  type: MEMBERS_SUCCESS,
  payload: members,
})

export const membersError = (error: string) => ({
  type: MEMBERS_ERROR,
  payload: error,
})

export const fetchMembers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(membersRequest())
    try {
      const { data, error } = await api<MemberAPIResponse>(
        `${BASE_URL}/members`
      )
      if (error) throw error

      dispatch(membersSuccess(data))
    } catch (e) {
      dispatch(membersError(e.message))
    }
  }
}
