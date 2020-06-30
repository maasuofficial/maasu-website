import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { EA } from 'components/EmailAnchor'
import { DC_PROJECT_LIST, DC_PROJECT_APP_FORM } from 'constants/strings'

type Props = RouteComponentProps & {}

export const DirectorsCouncilContainer: FC<Props> = () => {
  useDocumentTitle('Directors Council')

  return (
    <div className="container py6">
      <h4 className="title4">Directors Council</h4>
      <p>
        The Directors Council Committee is a group of volunteers (Graduate
        students / professionals) with specific knowledge, skills and expertise
        to help assist MAASU with special projects.
      </p>

      <p>
        Commitment is project based and a list of open and potential projects
        can be found <a href={DC_PROJECT_LIST}>here</a>.
      </p>

      <p>
        For more information please view our{' '}
        <a href={DC_PROJECT_APP_FORM}>application form</a>.
      </p>

      <p>
        Thank you for your interest in being a volunteer for the MAASU Directors
        Council Committee! If you have any questions, comments, or concerns,
        please contact the Directors Council at{' '}
        <EA>directorscouncil@maasu.org</EA>.
      </p>
    </div>
  )
}
