export const APP_NAME = 'MAASU'
export const APP_NAME_LONG =
  'Midwest Asian Pacific Islander Desi American Students Union'
export const YEAR = '2020'

export const SOCIAL = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/maasuofficial',
    icon: 'facebook-f',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/maasuofficial',
    icon: 'instagram',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/maasu_official',
    icon: 'twitter',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/maasu/',
    icon: 'linkedin-in',
  },
]

export const IS_DEV_ENV =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
