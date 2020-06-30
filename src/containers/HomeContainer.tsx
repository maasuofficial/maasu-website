import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { HeroBannerComponent } from 'components/HeroBannerComponent'
import { useDocumentTitle } from 'hooks/meta'

type Props = RouteComponentProps & {}

export const HomeContainer: FC<Props> = () => {
  useDocumentTitle()

  return (
    <div className="container">
      <HeroBannerComponent />
    </div>
  )
}
