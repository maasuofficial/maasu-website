import React, { FC } from 'react'
import { A } from 'components/Link'

interface Props {
  children: string
  className?: string
  tabIndex?: number
}

export const EmailAnchor: FC<Props> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <A className={className} href={`mailto:${children}`} {...props}>
      {children}
    </A>
  )
}

// shorthand
export const EA = EmailAnchor
