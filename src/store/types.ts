import { ModalState } from './Modals/types'
import { NewsletterState } from './Newsletters/types'

export type AppState = {
  modals: ModalState
  newsletters: NewsletterState
}
