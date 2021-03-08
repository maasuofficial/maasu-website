import React, { FC } from 'react'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import { EA } from 'components/EmailAnchor'
import { A } from 'components/Link'
import { useDocumentTitle } from 'hooks/meta'
import { RouteComponentProps } from '@reach/router'
import { BOA_APP_LINK } from 'constants/strings'

type Props = RouteComponentProps & {}

export const BoardOfAdvisorsComponent: FC<Props> = () => {
  useDocumentTitle('Board of Advisors')

  return (
    <Container>
      <TextBlock title="Board of Advisors">
        <p>
          The Board of Advisors is a group of volunteers (working professionals
          with 5+ years or more of experience) with knowledge of and interest in
          the APIDA Community. Advisors have prior experience working with or
          advising a student organization, and have a strong understanding of
          the Midwest APIDA experience. The board serves as a resource to advise
          the Directors Council (DC) and Executive Director (ED).
        </p>
        <p>
          For more information, please view our{' '}
          <A href={BOA_APP_LINK}>application form.</A>
        </p>
        <p>
          Thank you for your interest in being a volunteer for the MAASU Board
          of Advisors! If you have any questions, comments, or concerns, please
          contact the Executive Director at <EA>execdirector@maasu.org</EA>.
        </p>
      </TextBlock>
    </Container>
  )
}
