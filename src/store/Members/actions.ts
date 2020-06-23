import fetch from 'isomorphic-fetch'
import { BASE_URL } from 'api/urls'
import {
  MEMBERS_FETCH,
  MEMBERS_SUCCESS,
  MEMBERS_ERROR,
} from 'constants/actions'
import { Dispatch } from 'redux'
import { Member } from './types'

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

// TODO move to api/
async function api<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json() as Promise<T>
  })
}

export const fetchMembers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(membersRequest())
    try {
      const { data, error } = await api<{ data: Member[]; error: {} }>(
        `${BASE_URL}/members`
      )
      if (error) throw error

      dispatch(membersSuccess(data))
    } catch (e) {
      dispatch(membersError(e.message))
    }
  }
}
