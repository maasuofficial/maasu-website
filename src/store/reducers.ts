import { combineReducers } from 'redux'
import { modalsReducer } from './Modals/reducers'
import { newslettersReducer } from './Newsletters/reducers'

export const rootReducer = combineReducers({
  modals: modalsReducer,
  newsletters: newslettersReducer,
})
