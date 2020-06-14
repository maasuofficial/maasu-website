import React, { FC } from 'react'
import {
  APP_NAME,
  APP_NAME_LONG,
  CONFERENCE_NAME,
  CONFERENCE_YEAR,
  CONFERENCE_TYPE,
  CONFERENCE_DATE_RANGE,
  SOCIAL_FACEBOOK,
} from 'constants/strings'

export const HeroBanner: FC = () => {
  return (
    <div className="posa h-100 t-0 r-0 b-0 l-0 bgblue">
      <div className="fggold">
        <h2 className="mt9 tc">
          <span className="fs3-ns">
            {CONFERENCE_YEAR} {APP_NAME} {CONFERENCE_TYPE}
          </span>
          <br />
          <a className="tdn" href={SOCIAL_FACEBOOK}>
            <em className="fsn fs5 fs3-s scgolden fggold golden-sc">
              {CONFERENCE_NAME}
            </em>
          </a>
          <br />
          <span className="fs3-ns">{CONFERENCE_DATE_RANGE}</span>
        </h2>
      </div>
      <div className="posa r-0 b-0 l-0 tc">
        <img
          className="w-20-ns w-30-s"
          src={`${process.env.PUBLIC_URL}/assets/branding/dark/text.svg`}
          alt={APP_NAME_LONG}
        />
      </div>
    </div>
  )
}
