import { combineReducers } from 'redux'
import { membersReducer } from './Members/reducers'
import { conferencesReducer } from './Conferences/reducers'
import { boardReducer } from './Board/reducers'

export const rootReducer = combineReducers({
  members: membersReducer,
  conferences: conferencesReducer,
  board: boardReducer,
})
