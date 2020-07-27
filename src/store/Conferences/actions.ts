import { api, BASE_URL } from 'store/api'
import {
  LEADERSHIP_RETREAT,
  LEADERSHIP_SUMMIT,
  SPRING_CONFERENCE,
  FALL_CONFERENCE,
  MAASUX,
  CONFERENCES_FETCH,
  CONFERENCES_SUCCESS,
  CONFERENCES_ERROR,
} from 'constants/strings'
import { Dispatch } from 'redux'
import { Conference, ConferenceRaw, ConferenceAPIResponse } from './types'

export const conferencesRequest = () => ({
  type: CONFERENCES_FETCH,
})

export const conferencesSuccess = (conferences: Conference[]) => ({
  type: CONFERENCES_SUCCESS,
  payload: conferences,
})

export const conferencesError = (error: string) => ({
  type: CONFERENCES_ERROR,
  payload: error,
})

export const fetchConferences = () => {
  return async (dispatch: Dispatch) => {
    dispatch(conferencesRequest())
    try {
      const { data: res, error } = await api<ConferenceAPIResponse>(
        `${BASE_URL}/conferences`
      )
      if (error) throw error

      // transformations

      const data: Conference[] = res.map((c: ConferenceRaw) => {
        c.isApproxDate = c.isApproxDate && (c.isApproxDate as string).length > 0

        switch (c.type) {
          case LEADERSHIP_RETREAT.key:
            return { ...c, type: LEADERSHIP_RETREAT.value } as Conference
          case LEADERSHIP_SUMMIT.key:
            return { ...c, type: LEADERSHIP_SUMMIT.value } as Conference
          case FALL_CONFERENCE.key:
            return { ...c, type: FALL_CONFERENCE.value } as Conference
          case SPRING_CONFERENCE.key:
            return { ...c, type: SPRING_CONFERENCE.value } as Conference
          case MAASUX.key:
            return { ...c, type: MAASUX.value } as Conference
          default:
            return c as Conference
        }
      })

      dispatch(conferencesSuccess(data))
    } catch (e) {
      dispatch(conferencesError(e.message))
    }
  }
}
