import { api, BASE_URL } from 'store/api'
import { Newsletter, NewsletterAPIResponse } from './types'
import { Dispatch } from 'redux'
import {
  NEWSLETTERS_FETCH,
  NEWSLETTERS_SUCCESS,
  NEWSLETTERS_ERROR,
} from 'constants/actions'

export const newslettersRequest = () => ({
  type: NEWSLETTERS_FETCH,
})

export const newslettersSuccess = (newsletters: Newsletter[]) => ({
  type: NEWSLETTERS_SUCCESS,
  payload: newsletters,
})

export const newslettersError = (error: string) => ({
  type: NEWSLETTERS_ERROR,
  payload: error,
})

export const fetchNewsletters = () => {
  return async (dispatch: Dispatch) => {
    dispatch(newslettersRequest())
    try {
      const { data, error } = await api<NewsletterAPIResponse>(
        `${BASE_URL}/newsletters`
      )
      if (error) throw error
      dispatch(newslettersSuccess(data))
    } catch (e) {
      dispatch(newslettersError(e.message))
    }
  }
}
