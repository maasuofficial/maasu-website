import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Container } from 'components/Container'

type Props = RouteComponentProps & {
  children: React.ReactNode
}

export const ProgramContainer: FC<Props> = ({ children }) => (
  <Container>{children}</Container>
)
