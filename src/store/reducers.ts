import { combineReducers } from 'redux'

import { alumniReducer } from './Alumni/reducers'
import { modalsReducer } from './Modals/reducers'
import { newslettersReducer } from './Newsletters/reducers'
import { reportsReducer } from './Reports/reducers'
import { resourcesReducer } from './Resources/reducers'

export const rootReducer = combineReducers({
  alumni: alumniReducer,
  modals: modalsReducer,
  newsletters: newslettersReducer,
  reports: reportsReducer,
  resources: resourcesReducer,
})
