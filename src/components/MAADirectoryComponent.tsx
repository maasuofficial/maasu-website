import React, { FC } from 'react'
import { useDocumentTitle } from 'hooks/meta'
import { MAAComponentProps } from 'containers/MAAContainer'

type Props = MAAComponentProps & {}

export const MAADirectoryComponent: FC<Props> = ({ auth }) => {
  useDocumentTitle('MAASU Alumni Association')

  return (
    <div>
      <h2>{auth}</h2>
      <span>insert directory here</span>
    </div>
  )
}
