import { combineReducers } from 'redux'
import { membersReducer } from './Members/reducers'
import { conferencesReducer } from './Conferences/reducers'
import { boardReducer } from './Board/reducers'
import { eventsReducer } from './Events/reducers'

export const rootReducer = combineReducers({
  members: membersReducer,
  conferences: conferencesReducer,
  board: boardReducer,
  events: eventsReducer,
})
