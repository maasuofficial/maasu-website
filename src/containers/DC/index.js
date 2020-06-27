import React from 'react'
import { EA } from 'components/EmailAnchor'
import { Page, Type } from '../../components'

class DC extends React.Component {
  componentDidMount() {
    document.title =
      'Directors Council - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <Page>
        <Type variant="h2">Directors Council</Type>

        <p>
          The Directors Council Committee is a group of volunteers (Graduate
          students / professionals) with specific knowledge, skills and
          expertise to help assist MAASU with special projects.
        </p>

        <p>
          Commitment is project based and a list of open and potential projects
          can be found <a href="https://bit.ly/3aZ9u87">here</a>.
        </p>

        <p>
          For more information please view our{' '}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUsKp2kqs64fW6reA13IuN1ppAbmssytsKeDhyhqMB1MmIgw/viewform">
            application form
          </a>
          .
        </p>

        <p>
          Thank you for your interest in being a volunteer for the MAASU
          Directors Council Committee! If you have any questions, comments, or
          concerns, please contact the Directors Council at{' '}
          <EA>directorscouncil@maasu.org</EA>.
        </p>
      </Page>
    )
  }
}

export default DC
