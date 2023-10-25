import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { A } from 'components/Link'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import {
  MAA_PURPOSE_PRELUDE,
  MAA_PURPOSE_STMT_1,
  MAA_PURPOSE_STMT_2,
  MAA_PURPOSE_STMT_3,
  MAA_PURPOSE_STMT_4,
  MAA_PURPOSE_STMT_5,
  MAA_MEMBERSHIP_PRELUDE,
  MAA_ALUMNI_DIR_FORM,
  MAA_MEMBERSHIP_STMT_1,
  MAA_MEMBERSHIP_FEE_URL,
  MAA_MEMBERSHIP_STMT_2,
  MAA_MEMBERSHIP_POST,
  DONATE_MAA_URL,
} from 'constants/strings'

type Props = RouteComponentProps & {}

export const AlumniContainer: FC<Props> = () => {
  useDocumentTitle('Alumni')

  return (
    <Container>
      <TextBlock title="The MAASU Alumni Association">
        <p>{MAA_PURPOSE_PRELUDE}</p>
        <ul>
          <li>{MAA_PURPOSE_STMT_1}</li>
          <li>{MAA_PURPOSE_STMT_2}</li>
          <li>{MAA_PURPOSE_STMT_3}</li>
          <li>{MAA_PURPOSE_STMT_4}</li>
          <li>{MAA_PURPOSE_STMT_5}</li>
        </ul>
      </TextBlock>
      <TextBlock title="MAA Membership">
        <p>{MAA_MEMBERSHIP_PRELUDE}</p>
        <ol>
          <li>
            <A href={MAA_ALUMNI_DIR_FORM}>{MAA_MEMBERSHIP_STMT_1}</A>
          </li>
          <li>
            <A href={MAA_MEMBERSHIP_FEE_URL}>{MAA_MEMBERSHIP_STMT_2}</A>
          </li>
        </ol>
        <p>{MAA_MEMBERSHIP_POST}</p>
      </TextBlock>
      <TextBlock title="Donation" className="tc">
        <p>
          If you would like to support the MAASU Alumni Association, consider
          donating <A href={DONATE_MAA_URL}>here</A>.
        </p>
      </TextBlock>
    </Container>
  )
}
