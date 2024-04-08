import { AlumniState } from './Alumni/types'
import { ConferenceState } from './Conferences/types'
import { HEventState } from './Events/types'
import { ModalState } from './Modals/types'
import { NewsletterState } from './Newsletters/types'
import { ReportState } from './Reports/types'
import { ResourceState } from './Resources/types'

export type AppState = {
  alumni: AlumniState
  conferences: ConferenceState
  events: HEventState
  modals: ModalState
  newsletters: NewsletterState
  reports: ReportState
  resources: ResourceState
}
