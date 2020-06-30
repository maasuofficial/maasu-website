import {
  RESOURCES_FETCH,
  RESOURCES_SUCCESS,
  RESOURCES_ERROR,
} from 'constants/actions'

export type Resource = {
  id: string
  title: string
  titleAbv?: string
  url: string
}

export type ResourcesAPIResponse = {
  data: Resource[]
  error: object
}

export type ResourceActionTypes =
  | { type: typeof RESOURCES_FETCH }
  | { type: typeof RESOURCES_SUCCESS; payload: Resource[] }
  | { type: typeof RESOURCES_ERROR; payload: string }

export type ResourceState = {
  isFetching: boolean
  resources: Resource[]
  error: string
}
