import { AlumniState } from './Alumni/types'
import { AwardState } from './Awards/types'
import { BoardState } from './Board/types'
import { ConferenceState } from './Conferences/types'
import { HEventState } from './Events/types'
import { MemberState } from './Members/types'
import { ModalState } from './Modals/types'
import { NewsletterState } from './Newsletters/types'
import { ReportState } from './Reports/types'
import { ResourceState } from './Resources/types'

export type AppState = {
  alumni: AlumniState
  awards: AwardState
  board: BoardState
  conferences: ConferenceState
  events: HEventState
  members: MemberState
  modals: ModalState
  newsletters: NewsletterState
  reports: ReportState
  resources: ResourceState
}
