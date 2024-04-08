import { Dispatch } from 'redux'

import { fetchNewsletters } from './Newsletters/actions'
import { fetchReports } from './Reports/actions'
import { fetchResources } from './Resources/actions'

export const fetchAllSheets = () => {
  return async (dispatch: Dispatch) => {
    fetchNewsletters()(dispatch)
    fetchReports()(dispatch)
    fetchResources()(dispatch)
  }
}
