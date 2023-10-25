import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { EA } from 'components/EmailAnchor'
import { useDocumentTitle } from 'hooks/meta'
import { A } from 'components/Link'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import {
  DONATE_STMT_1,
  DONATE_STMT_2,
  DONATE_MAASU_URL,
} from 'constants/strings'

type DonateProps = RouteComponentProps & {}

export const DonateContainer: FC<DonateProps> = () => {
  useDocumentTitle('Donate')

  return (
    <Container>
      <TextBlock title="Donate">
        <p>{DONATE_STMT_1}</p>
        <p>{DONATE_STMT_2}</p>

        <p>
          If you have any questions, please reach out to the{' '}
          <EA>directorscouncil@maasu.org</EA>.
        </p>

        <p className="fs1 fw700">
          donate <A href={DONATE_MAASU_URL}>here</A>.
        </p>
      </TextBlock>
    </Container>
  )
}

type DonateCompleteProps = RouteComponentProps & {}

export const DonateCompleteContainer: FC<DonateCompleteProps> = () => {
  useDocumentTitle('Thank You')

  return (
    <Container>
      <div className="mxa my9 tc">
        <h3 className="title3 mt6">Thank you for donating.</h3>
        <h4 className="title4">Your donation means the world to us.</h4>
      </div>
    </Container>
  )
}
