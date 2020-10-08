import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { MAAComponentProps } from 'containers/MAAContainer'

type Props = RouteComponentProps & MAAComponentProps & {}

export const MAAProfileComponent: FC<Props> = () => {
  // TODO name
  useDocumentTitle('MAASU Alumni Association')

  return <div>profile</div>
}
