import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const Block: FC<Props> = ({ children, className = '' }) => {
  return <div className={`my4 ${className}`}>{children}</div>
}
