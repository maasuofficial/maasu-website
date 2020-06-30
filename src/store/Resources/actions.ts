import { api, BASE_URL } from 'store/api'
import { Resource, ResourcesAPIResponse } from './types'
import { Dispatch } from 'redux'
import {
  RESOURCES_FETCH,
  RESOURCES_SUCCESS,
  RESOURCES_ERROR,
} from 'constants/actions'

export const resourcesRequest = () => ({
  type: RESOURCES_FETCH,
})

export const resourcesSuccess = (resources: Resource[]) => ({
  type: RESOURCES_SUCCESS,
  payload: resources,
})

export const resourcesError = (error: string) => ({
  type: RESOURCES_ERROR,
  payload: error,
})

export const fetchResources = () => {
  return async (dispatch: Dispatch) => {
    dispatch(resourcesRequest())
    try {
      const { data, error } = await api<ResourcesAPIResponse>(
        `${BASE_URL}/resources`
      )
      if (error) throw error
      dispatch(resourcesSuccess(data))
    } catch (e) {
      dispatch(resourcesError(e.message))
    }
  }
}
