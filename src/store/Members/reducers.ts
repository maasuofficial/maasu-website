import {
  MEMBERS_FETCH,
  MEMBERS_SUCCESS,
  MEMBERS_ERROR,
} from 'constants/actions'
import { MemberActionTypes, MemberState } from './types'

const initialState = {
  loading: false,
  members: [],
  error: '',
}

export const membersReducer = (
  state: MemberState = initialState,
  action: MemberActionTypes
): MemberState => {
  switch (action.type) {
    case MEMBERS_FETCH:
      return {
        ...state,
        loading: true,
      }
    case MEMBERS_SUCCESS:
      return {
        loading: false,
        members: action.payload,
        error: '',
      }
    case MEMBERS_ERROR:
      return {
        loading: false,
        members: [],
        error: action.payload,
      }
    default:
      return state
  }
}
