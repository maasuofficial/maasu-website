import { Member, MemberState } from './Members/types'
import { Conference, ConferenceState } from './Conferences/types'
import { BoardState } from './Board/types'

// -----------------------------------------------------
// Event
// -----------------------------------------------------

export type Event = {
  // year abbreviation, word
  id: string
  title: string
  desc: string
  date: Date
  city: string
  state: string
}

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
}
