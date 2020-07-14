import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
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
  NEW_TAB_PROPS,
} from 'constants/strings'

interface Props {}

export const MissionContainer: FC<RouteComponentProps & Props> = () => {
  useDocumentTitle('Our Mission')

  return (
    <div className="container py6">
      <section>
        <h3 className="mt0 tc fs2 fw700">Our Purpose</h3>
        <p>{PURPOSE_STMT_1}</p>
        <p>{PURPOSE_STMT_2}</p>
        <img
          className="w-100 mxa"
          src={MISSION_FIRST_MEETING}
          alt={PURPOSE_IMG_ALT}
        />
        <div className="fsi w-100 w-80-ns mxa tc">{PURPOSE_IMG_CAPTION}</div>
      </section>
      <section>
        <h3 className="mt4 tc fs2 fw700">Our Mission</h3>
        <p>{MISSION_PRELUDE}</p>
        <ul>
          <li>{MISSION_STMT_1}</li>
          <li>{MISSION_STMT_2}</li>
          <li>{MISSION_STMT_3}</li>
          <li>{MISSION_STMT_4}</li>
          <li>{MISSION_STMT_5}</li>
        </ul>
      </section>
      <section>
        <h3 className="mt4 tc fs2 fw700">Who We Serve</h3>
        <p>{SERVE_STMT_1}</p>
        <p>{SERVE_STMT_2}</p>
      </section>
      <section>
        <h3 className="mt4 tc fs2 fw700">Strategic Plan</h3>
        <p>
          {STRATEGIC_PLAN}
          <a {...NEW_TAB_PROPS} href={STRAT_PLAN_URL} download="hello.pdf">
            here
          </a>
          .
        </p>
      </section>
    </div>
  )
}
