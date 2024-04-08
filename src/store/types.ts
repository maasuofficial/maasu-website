import { AlumniState } from './Alumni/types'
import { ConferenceState } from './Conferences/types'
import { ModalState } from './Modals/types'
import { NewsletterState } from './Newsletters/types'
import { ReportState } from './Reports/types'
import { ResourceState } from './Resources/types'

export type AppState = {
  alumni: AlumniState
  conferences: ConferenceState
  modals: ModalState
  newsletters: NewsletterState
  reports: ReportState
  resources: ResourceState
}
