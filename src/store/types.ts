// -----------------------------------------------------
// Member
// -----------------------------------------------------

export enum EMemberStatus {
  Active = 1,
  Expired = 0,
  Inactive = -1,
}

export type Member = {
  // nameAbv or main name identifier
  id: string
  name: string
  nameAbv?: string
  status: EMemberStatus
  orgName?: string
  orgNameAbv?: string
  orgUrl?: string
  city: string
  state: string
}

// -----------------------------------------------------
// BoardMember
// -----------------------------------------------------

export type Position = {
  // title abbreviation
  id: string
  title: string
  desc: string
  email: string
}

export enum EBoardMemberType {
  BOA = 0,
  ECC = 1,
  DC = 2,
  ED = 3,
}

export type BoardMember = {
  // first initial, last name
  id: string
  type: EBoardMemberType
  fname: string
  lname: string
  nickname?: string
  imgUrl: string
  position: Position
  bio: string
  school: Member
}

// -----------------------------------------------------
// Conference
// -----------------------------------------------------

export enum ESeason {
  SP = 0,
  AU = 1,
}

export type Conference = {
  // season, year abbreviation
  id: string
  title: string
  desc: string
  season: ESeason
  startDate: Date
  endDate?: Date
  bid?: string
  logo?: string
  banner?: string
  city: string
  state: string
  host: Member
}

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
