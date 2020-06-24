import { combineReducers } from 'redux'
import { membersReducer } from './Members/reducers'

export const rootReducer = combineReducers({
  members: membersReducer,
})
