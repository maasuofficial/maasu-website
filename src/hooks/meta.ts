import { useEffect } from 'react'
import { APP_NAME_LONG } from 'constants/strings'

export const useDocumentTitle = (subtitle?: string) => {
  subtitle = subtitle && subtitle.length ? (subtitle += ' - ') : ''
  useEffect(() => {
    document.title = `${subtitle}${APP_NAME_LONG}`
  }, [subtitle])
}
