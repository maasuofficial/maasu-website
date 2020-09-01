import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const Container: FC<Props> = ({ children, className = '' }) => (
  <div className={`container py6 ${className}`}>{children}</div>
)
