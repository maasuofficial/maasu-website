import { Dispatch } from 'redux'
import { fetchNewsletters } from './Newsletters/actions'

export const fetchAllSheets = () => {
  return async (dispatch: Dispatch) => {
    fetchNewsletters()(dispatch)
  }
}
