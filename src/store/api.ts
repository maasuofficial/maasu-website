import fetch from 'isomorphic-fetch'
import { IS_DEV_ENV } from 'constants/strings'

// constant REST url(s)

export const BASE_URL = window
  ? IS_DEV_ENV
    ? 'https://staging.maasu.org/.netlify/functions'
    : `${window.location.protocol}//${window.location.host}/.netlify/functions`
  : ''

// utility functions

export const api = async <T>(url: string): Promise<T> => {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res.json() as Promise<T>
  })
}
