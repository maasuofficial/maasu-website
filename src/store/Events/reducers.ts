import { EVENTS_FETCH, EVENTS_SUCCESS, EVENTS_ERROR } from 'constants/actions'
import { HEventState, HEventActionTypes } from './types'

const initialState = {
  isFetching: false,
  events: [],
  eventsError: '',
}

export const eventsReducer = (
  state: HEventState = initialState,
  action: HEventActionTypes
) => {
  switch (action.type) {
    case EVENTS_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case EVENTS_SUCCESS:
      return {
        isFetching: false,
        events: action.payload,
        error: '',
      }
    case EVENTS_ERROR:
      return {
        isFetching: false,
        events: [],
        error: action.payload,
      }
    default:
      return state
  }
}
