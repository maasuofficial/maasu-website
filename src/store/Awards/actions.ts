import { api, BASE_URL } from 'store/api'
import { Award, AwardAPIResponse } from './types'
import { Dispatch } from 'redux'
import { AWARDS_FETCH, AWARDS_SUCCESS, AWARDS_ERROR } from 'constants/actions'

export const awardsRequest = () => ({
  type: AWARDS_FETCH,
})

export const awardsSuccess = (awards: Award[]) => ({
  type: AWARDS_SUCCESS,
  payload: awards,
})

export const awardsError = (error: string) => ({
  type: AWARDS_ERROR,
  payload: error,
})

export const fetchAwards = () => {
  return async (dispatch: Dispatch) => {
    dispatch(awardsRequest())
    try {
      const { data, error } = await api<AwardAPIResponse>(`${BASE_URL}/awards`)
      if (error) throw error
      dispatch(awardsSuccess(data))
    } catch (e) {
      dispatch(awardsError(e.message))
    }
  }
}
