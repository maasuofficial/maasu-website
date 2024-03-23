import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export function Block({ children, className = '' }: Props) {
  return <div className={`my4 ${className}`}>{children}</div>
}
