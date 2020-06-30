import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

type Props = RouteComponentProps & {
  children: React.ReactNode
}

export const ProgramContainer: FC<Props> = ({ children }) => {
  return <div className="container py6">{children}</div>
}
