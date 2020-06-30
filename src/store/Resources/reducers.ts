import { ResourceActionTypes, ResourceState } from './types'
import {
  RESOURCES_FETCH,
  RESOURCES_SUCCESS,
  RESOURCES_ERROR,
} from 'constants/actions'

const initialState = {
  isFetching: false,
  resources: [],
  error: '',
}

export const resourcesReducer = (
  state: ResourceState = initialState,
  action: ResourceActionTypes
) => {
  switch (action.type) {
    case RESOURCES_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case RESOURCES_SUCCESS:
      return {
        isFetching: false,
        resources: action.payload,
        error: '',
      }
    case RESOURCES_ERROR:
      return {
        isFetching: false,
        resources: [],
        error: action.payload,
      }
    default:
      return state
  }
}
