import { combineReducers } from 'redux'

import { alumniReducer } from './Alumni/reducers'
import { awardsReducer } from './Awards/reducers'
import { boardReducer } from './Board/reducers'
import { conferencesReducer } from './Conferences/reducers'
import { eventsReducer } from './Events/reducers'
import { membersReducer } from './Members/reducers'
import { modalsReducer } from './Modals/reducers'
import { newslettersReducer } from './Newsletters/reducers'
import { reportsReducer } from './Reports/reducers'
import { resourcesReducer } from './Resources/reducers'

export const rootReducer = combineReducers({
  alumni: alumniReducer,
  awards: awardsReducer,
  board: boardReducer,
  conferences: conferencesReducer,
  events: eventsReducer,
  members: membersReducer,
  modals: modalsReducer,
  newsletters: newslettersReducer,
  reports: reportsReducer,
  resources: resourcesReducer,
})
