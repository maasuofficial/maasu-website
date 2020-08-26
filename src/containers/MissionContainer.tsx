import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import { A } from 'components/Link'
import {
  MISSION_PRELUDE,
  MISSION_STMT_1,
  MISSION_STMT_2,
  MISSION_STMT_3,
  MISSION_STMT_4,
  MISSION_STMT_5,
  PURPOSE_STMT_1,
  PURPOSE_STMT_2,
  PURPOSE_IMG_ALT,
  PURPOSE_IMG_CAPTION,
  SERVE_STMT_1,
  SERVE_STMT_2,
  STRATEGIC_PLAN,
  MISSION_FIRST_MEETING,
  STRAT_PLAN_URL,
} from 'constants/strings'

interface Props {}

export const MissionContainer: FC<RouteComponentProps & Props> = () => {
  useDocumentTitle('Our Mission')

  return (
    <Container>
      <TextBlock title="Our Purpose">
        <p>{PURPOSE_STMT_1}</p>
        <p>{PURPOSE_STMT_2}</p>
        <img
          className="w-100 mxa"
          src={MISSION_FIRST_MEETING}
          alt={PURPOSE_IMG_ALT}
        />
        <div className="fsi w-100 w-90-ns mxa tc">{PURPOSE_IMG_CAPTION}</div>
      </TextBlock>
      <TextBlock title="Our Mission">
        <p>{MISSION_PRELUDE}</p>
        <ul>
          <li>{MISSION_STMT_1}</li>
          <li>{MISSION_STMT_2}</li>
          <li>{MISSION_STMT_3}</li>
          <li>{MISSION_STMT_4}</li>
          <li>{MISSION_STMT_5}</li>
        </ul>
      </TextBlock>
      <TextBlock title="Who We Serve">
        <p>{SERVE_STMT_1}</p>
        <p>{SERVE_STMT_2}</p>
      </TextBlock>
      <TextBlock title="Strategic Plan">
        <p>
          <span>{STRATEGIC_PLAN}</span>
          <A href={STRAT_PLAN_URL}>here</A>.
        </p>
      </TextBlock>
    </Container>
  )
}
