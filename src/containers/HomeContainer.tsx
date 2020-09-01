import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Container } from 'components/Container'
import { Block } from 'components/Block'
import { HeroBannerComponent } from 'components/HeroBannerComponent'
import { useDocumentTitle } from 'hooks/meta'

type Props = RouteComponentProps & {}

export const HomeContainer: FC<Props> = () => {
  useDocumentTitle()

  return (
    <Container>
      <Block>
        <HeroBannerComponent />
      </Block>
    </Container>
  )
}
