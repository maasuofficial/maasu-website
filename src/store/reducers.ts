import { combineReducers } from 'redux'

import { awardsReducer } from './Awards/reducers'
import { boardReducer } from './Board/reducers'
import { conferencesReducer } from './Conferences/reducers'
import { eventsReducer } from './Events/reducers'
import { membersReducer } from './Members/reducers'
import { resourcesReducer } from './Resources/reducers'

export const rootReducer = combineReducers({
  awards: awardsReducer,
  board: boardReducer,
  conferences: conferencesReducer,
  events: eventsReducer,
  members: membersReducer,
  resources: resourcesReducer,
})
