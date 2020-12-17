import {
  ALUMNI_FETCH,
  ALUMNI_SUCCESS,
  ALUMNI_ERROR,
  ALUMNI_CLEAR,
} from 'constants/actions'

export enum EOccupationCategory {}
// Agro = 'Agriculture, Food and Natural Resources',
// Edu = 'Education and Training',
// Gov = 'Government and Public Administration',
// Hosp = 'Hospitality and Tourism',
// It = 'Information Technology',
// Manu = 'Manufacturing',

export type Alumni = {
  // use email as id since it must be uniquely identifiable
  email: string
  fname: string
  lname: string
  // nickname?: string
  // city: string
  // state: string
  // occupation: string
  // occupationCategory: EOccupationCategory
  // undergradInstitution: Member
  // gradYear: number
  // conferences: Conference[]
}

// export type AlumniAPIResponse = {
//   data: Alumni[]
//   error: object
// }

export type AlumniActionTypes =
  | { type: typeof ALUMNI_FETCH }
  | { type: typeof ALUMNI_SUCCESS; payload: Alumni[] }
  | { type: typeof ALUMNI_ERROR; payload: string }
  | { type: typeof ALUMNI_CLEAR }

export type AlumniState = {
  isFetching: boolean
  alumni: Alumni[]
  error: string
}
