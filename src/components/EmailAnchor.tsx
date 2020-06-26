import React, { FC } from 'react'

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
    <a
      className={`c-inh tdu hov-tdn ${className}`}
      href={`mailto:${children}`}
      {...props}
    >
      {children}
    </a>
  )
}

// shorthand
export const EA = EmailAnchor
