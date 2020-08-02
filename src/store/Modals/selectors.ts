import { AppState } from 'store/types'

export const getIsModalOpen = (state: AppState) => state.modals.isOpen

export const getModalMeta = (state: AppState) => state.modals.meta
