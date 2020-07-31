import { OPEN_MODAL, CLOSE_MODAL } from 'constants/actions'
import { ModalMeta } from './types'

export const openModal = ({ classNames = '', children }: ModalMeta) => {
  return {
    type: OPEN_MODAL,
    payload: {
      classNames,
      children,
    },
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}
