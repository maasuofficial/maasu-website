import React from 'react'
import { EA } from 'components/EmailAnchor'
import { Page, Type } from '../../components'
import { DONATE_MAASU_URL } from 'constants/strings'

class Donate extends React.Component {
  componentDidMount() {
    document.title = 'Donate - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <Page>
        <Type variant="h2">Donate</Type>

        <p>
          MAASU is a 501c3 nonprofit student run organization. We rely on
          community support to continue to aide, educate and connect students
          across midwest campuses in leadership development and Asian American
          advocacy. It is with your financial support that we are able to
          provide students with resources and events that connect our shared
          identity.
        </p>

        <p>
          MAASU believes in empowering students and cultivating strong leaders
          within our local communities. Your donation would ensure the
          continuation of these programs, such as the Leadership Summit and
          Spring Conference. Please join us in supporting young Asian American
          Student Leaders by making a tax deductible deduction today. Engagement
          of young people is more important than ever, and we hope you join us
          in cultivating the next generation of leaders.
        </p>

        <p>
          If you have any questions, please reach out to the{' '}
          <EA>directorscouncil@maasu.org</EA>.
        </p>

        <p className={'donateButtonWrapper-donate'}>
          <a className={'donateButton-donate'} href={DONATE_MAASU_URL}>
            donate here
          </a>
        </p>
      </Page>
    )
  }
}

const DonateComp = (props) => {
  const { test } = props
  return (
    test && (
      <Page className={'complete-donate'}>
        <img
          className={'logo-donate'}
          src={`${process.env.PUBLIC_URL}/assets/branding/light/logo.svg`}
          alt="thank you for donating!"
        />

        <Type variant="h2">Thank you for donating.</Type>
        <Type variant="h4">Your donation means the world to us.</Type>
      </Page>
    )
  )
}

export { Donate, DonateComp }
