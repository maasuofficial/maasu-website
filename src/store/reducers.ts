import { combineReducers } from 'redux'
import { membersReducer } from './Members/reducers'
import { conferencesReducer } from './Conferences/reducers'

export const rootReducer = combineReducers({
  members: membersReducer,
  conferences: conferencesReducer,
})
