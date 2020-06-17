import React, { FC, Fragment, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { BImg, Page } from 'components'
import {
  APP_NAME_LONG,
  MISSION_PRELUDE,
  MISSION_STMT_1,
  MISSION_STMT_2,
  MISSION_STMT_3,
  MISSION_STMT_4,
  MISSION_STMT_5,
  PURPOSE_STMT_1,
  PURPOSE_STMT_2,
  SERVE_STMT_1,
  SERVE_STMT_2,
  STRATEGIC_PLAN,
} from 'constants/strings'

interface Props {}

export const MissionContainer: FC<RouteComponentProps & Props> = () => {
  useEffect(() => {
    document.title = 'Our Mission - The Midwest Asian American Students Union'
  }, [])

  return (
    <Fragment>
      <Page>
        <h3 className="mt0 tc fs2 ffhind fw700">Our Purpose</h3>
        <div className="w-70 w-30-ns mxa">
          <img
            src={`${process.env.PUBLIC_URL}/assets/branding/light/text.svg`}
            alt={APP_NAME_LONG}
          />
        </div>
        <p>{PURPOSE_STMT_1}</p>
        <BImg
          className="w-100-s w-70-ns mxa"
          src={`${process.env.PUBLIC_URL}/assets/img/old-ecc.png`}
          alt="The first Executive Coordinating Committee"
        />
        <p>{PURPOSE_STMT_2}</p>
      </Page>
      <Page>
        <h3 className="mt0 tc fs2 ffhind fw700">Our Mission</h3>
        <p>{MISSION_PRELUDE}</p>
        <ul>
          <li>{MISSION_STMT_1}</li>
          <li>{MISSION_STMT_2}</li>
          <li>{MISSION_STMT_3}</li>
          <li>{MISSION_STMT_4}</li>
          <li>{MISSION_STMT_5}</li>
        </ul>
      </Page>
      <Page>
        <h3 className="mt0 tc fs2 ffhind fw700">Who We Serve</h3>
        <p>{SERVE_STMT_1}</p>
        <p>{SERVE_STMT_2}</p>
      </Page>
      <Page>
        <h3 className="mt0 tc fs2 ffhind fw700">Strategic Plan</h3>
        <p>
          {STRATEGIC_PLAN}
          <a
            href={`${process.env.PUBLIC_URL}/assets/files/MAASU_Strategic_Plan_2020-2024.pdf`}
          >
            here
          </a>
          .
        </p>
      </Page>
    </Fragment>
  )
}
