import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { EA } from 'components/EmailAnchor'
import { useDocumentTitle } from 'hooks/meta'
import { findAsset } from 'utils/files'
import {
  DONATE_STMT_1,
  DONATE_STMT_2,
  DONATE_MAASU_URL,
} from 'constants/strings'

type DonateProps = RouteComponentProps & {}

export const DonateContainer: FC<DonateProps> = () => {
  useDocumentTitle('Donate')

  return (
    <div className="container pt6">
      <h3 className="title3 tc">Donate</h3>
      <p>{DONATE_STMT_1}</p>
      <p>{DONATE_STMT_2}</p>

      <img
        className="w-100"
        src={findAsset('img/donate.jpg')}
        alt="donate to our cause"
      />

      <p>
        If you have any questions, please reach out to the{' '}
        <EA>directorscouncil@maasu.org</EA>.
      </p>

      <p className="fs1 fw700">
        donate <a href={DONATE_MAASU_URL}>here</a>.
      </p>
    </div>
  )
}

type DonateCompleteProps = RouteComponentProps & {}

export const DonateCompleteContainer: FC<DonateCompleteProps> = () => {
  useDocumentTitle('Thank You')

  return (
    <div className="container pt6">
      <div className="mxa tc">
        <img
          className="w-30 w-30-ns"
          src={findAsset('branding/light/logo.svg')}
          alt="thank you for donating"
        />
        <h3 className="title3 mt6">Thank you for donating.</h3>
        <h4 className="title4">Your donation means the world to us.</h4>
      </div>
    </div>
  )
}
