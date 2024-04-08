import { combineReducers } from 'redux'
import { modalsReducer } from './Modals/reducers'

export const rootReducer = combineReducers({
  modals: modalsReducer,
})
