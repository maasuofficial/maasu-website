import { EVENTS_FETCH, EVENTS_SUCCESS, EVENTS_ERROR } from 'constants/actions'
import { api, BASE_URL } from 'store/api'
import { Dispatch } from 'redux'
import { HEvent, HEventRaw, HEventAPIResponse } from './types'

export const eventsRequest = () => ({
  type: EVENTS_FETCH,
})

export const eventsSuccess = (events: HEvent[]) => ({
  type: EVENTS_SUCCESS,
  payload: events,
})

export const eventsError = (error: string) => ({
  type: EVENTS_ERROR,
  payload: error,
})

export const fetchEvents = () => {
  return async (dispatch: Dispatch) => {
    dispatch(eventsRequest())
    try {
      const { data: res, error } = await api<HEventAPIResponse>(
        `${BASE_URL}/events`
      )
      if (error) throw error

      // transformations

      const data: HEvent[] = res.map(
        (c: HEventRaw) =>
          ({
            ...c,
            isApproxDate: c.isApproxDate && c.isApproxDate.length > 0,
          } as HEvent)
      )
      dispatch(eventsSuccess(data))
    } catch (e) {
      dispatch(eventsError(e.message))
    }
  }
}
