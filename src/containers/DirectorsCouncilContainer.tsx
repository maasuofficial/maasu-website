import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { A } from 'components/Link'
import { Container } from 'components/Container'
import { EA } from 'components/EmailAnchor'
import { TextBlock } from 'components/TextBlock'
import {
  DC_APP_LINK,
  DC_APP_ISOPEN,
  DC_APP_STATUS,
  DC_PROJECT_LIST,
  DC_PROJECT_APP_FORM,
} from 'constants/strings'

type Props = RouteComponentProps & {}

export const DirectorsCouncilContainer: FC<Props> = () => {
  useDocumentTitle('Directors Council')

  return (
    <Container>
      <TextBlock title="Directors Council">
        <p>
          The Directors Council is a group of volunteers who are within two
          years of completing a bachelor’s degree with knowledge of and interest
          in the APIDA community. Volunteers have experience working with or
          within a student organization, and oversee projects for MAASU. The
          three council positions include the Director of Alumni Relations,
          Director of Finance & Partnerships, and the Director of Programs &
          Assessment. Council members serve two-year terms.
        </p>
        {DC_APP_ISOPEN && (
          <p>
            {DC_APP_STATUS} <A href={DC_APP_LINK}>Apply here.</A>
          </p>
        )}
      </TextBlock>
      <TextBlock title="Directors Council Committee">
        <p>
          Separately, there is the Directors Council Committee, which is a group
          of volunteers (Graduate students / professionals) with specific
          knowledge, skills and expertise to help assist MAASU with special
          projects.
        </p>
        <p>
          Commitment is project based and a list of open and potential projects
          can be found <A href={DC_PROJECT_LIST}>here</A>.
        </p>
        <p>
          For more information please view our{' '}
          <A href={DC_PROJECT_APP_FORM}>application form</A>.
        </p>
        <p>
          Thank you for your interest in being a volunteer for the MAASU
          Directors Council Committee! If you have any questions, comments, or
          concerns, please contact the Directors Council at{' '}
          <EA>directorscouncil@maasu.org</EA>.
        </p>
      </TextBlock>
    </Container>
  )
}
