import { ReactNode } from 'react'
import { OPEN_MODAL, CLOSE_MODAL } from 'constants/actions'

export type ModalMeta = {
  classNames?: string
  children: ReactNode
}

export type ModalState = {
  isOpen: boolean
  meta: ModalMeta
}

export type ModalActionTypes =
  | { type: typeof OPEN_MODAL; payload: ModalMeta }
  | { type: typeof CLOSE_MODAL }
