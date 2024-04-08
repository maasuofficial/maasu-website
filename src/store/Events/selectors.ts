import { AppState } from 'store/types'

export const getIsFetchingEvents = (state: AppState) => state.events.isFetching
export const getEvents = (state: AppState) => state.events.events
export const getEventsError = (state: AppState) => state.events.eventsError
