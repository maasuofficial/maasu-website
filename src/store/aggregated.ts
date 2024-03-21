import { Dispatch } from 'redux'

import { fetchAwards } from './Awards/actions'
import { fetchConferences } from './Conferences/actions'
import { fetchEvents } from './Events/actions'
import { fetchNewsletters } from './Newsletters/actions'
import { fetchReports } from './Reports/actions'
import { fetchResources } from './Resources/actions'

export const fetchAllSheets = () => {
  return async (dispatch: Dispatch) => {
    fetchAwards()(dispatch)
    fetchConferences()(dispatch)
    fetchEvents()(dispatch)
    fetchNewsletters()(dispatch)
    fetchReports()(dispatch)
    fetchResources()(dispatch)
  }
}
