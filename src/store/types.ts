import { Member, MemberState } from './Members/types'
import { Conference, ConferenceState } from './Conferences/types'
import { BoardState } from './Board/types'
import { HEventState } from './Events/types'
import { ResourceState } from './Resources/types'

// -----------------------------------------------------
// Alumni
// -----------------------------------------------------

// TODO career classifications
export enum EOccupationCategory {}
// Agro = 'Agriculture, Food and Natural Resources',
// Edu = 'Education and Training',
// Gov = 'Government and Public Administration',
// Hosp = 'Hospitality and Tourism',
// It = 'Information Technology',
// Manu = 'Manufacturing',

export type Alumni = {
  // first initial, last name dash email
  id: string
  fname: string
  lname: string
  nickname?: string
  email: string
  city: string
  state: string
  occupation: string
  occupationCategory: EOccupationCategory
  undergradInstitution: Member
  gradYear: number
  conferences: Conference[]
}

export type AppState = {
  members: MemberState
  conferences: ConferenceState
  board: BoardState
  events: HEventState
  resources: ResourceState
}
