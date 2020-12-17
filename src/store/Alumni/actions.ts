import { Alumni } from './types'
import { Dispatch } from 'redux'
import {
  ALUMNI_FETCH,
  ALUMNI_SUCCESS,
  ALUMNI_ERROR,
  ALUMNI_CLEAR,
} from 'constants/actions'

import firebase from 'store/firebase'
const db = firebase.firestore()

export const alumniRequest = () => ({
  type: ALUMNI_FETCH,
})

export const alumniClear = () => ({
  type: ALUMNI_CLEAR,
})

export const alumniSuccess = (alumni: Alumni[]) => ({
  type: ALUMNI_SUCCESS,
  payload: alumni,
})

export const alumniError = (error: string) => ({
  type: ALUMNI_ERROR,
  payload: error,
})

export const clearAlumni = () => {
  return (dispatch: Dispatch) => dispatch(alumniClear())
}

export const fetchAlumni = () => {
  return async (dispatch: Dispatch) => {
    dispatch(alumniRequest())
    try {
      const snapshot = await db.collection('alumni').get()
      const data: Alumni[] = []
      snapshot.forEach((doc) => {
        data.push(doc.data() as Alumni)
      })
      dispatch(alumniSuccess(data))
    } catch (e) {
      dispatch(alumniError(e.message))
    }
  }
}
