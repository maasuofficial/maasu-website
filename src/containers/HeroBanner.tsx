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
    <div className="posr h-100 w-100">
      <div className="ttu ffhind fw700">
        <h2 className="mt9 tc">
          <span className="fs3-ns fs2-s">
            {CONFERENCE_YEAR} {APP_NAME} {CONFERENCE_TYPE}
          </span>
          <br />
          <a className="tdn" href={SOCIAL_FACEBOOK}>
            <em className="fsn fs4 fs2-s ls1 fflibre fggold">
              {CONFERENCE_NAME}
            </em>
          </a>
          <br />
          <span className="fs3-ns fs2-s">{CONFERENCE_DATE_RANGE}</span>
        </h2>
      </div>
      <div className="posr tc">
        <img
          className="w-20-ns w-30-s"
          src={`${process.env.PUBLIC_URL}/assets/branding/light/text.svg`}
          alt={APP_NAME_LONG}
        />
      </div>
    </div>
  )
}
