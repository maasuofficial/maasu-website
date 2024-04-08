import { AlumniState } from './Alumni/types'
import { ModalState } from './Modals/types'
import { NewsletterState } from './Newsletters/types'
import { ReportState } from './Reports/types'

export type AppState = {
  alumni: AlumniState
  modals: ModalState
  newsletters: NewsletterState
  reports: ReportState
}
