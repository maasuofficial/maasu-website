import { OPEN_MODAL, CLOSE_MODAL } from '../../constants'
import { ModalState, ModalActionTypes } from './types'

const initialState = {
  isOpen: false,
  meta: {
    children: null,
  },
}

export const modalsReducer = (
  state: ModalState = initialState,
  action: ModalActionTypes
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        meta: action.payload,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state
  }
}
