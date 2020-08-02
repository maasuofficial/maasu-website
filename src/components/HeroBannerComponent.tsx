import React, { FC } from 'react'
import {
  APP_NAME,
  CONFERENCE_NAME,
  CONFERENCE_YEAR,
  CONFERENCE_TYPE,
  CONFERENCE_DATE_RANGE,
  CONFERENCE_URL,
} from 'constants/strings'

export const HeroBannerComponent: FC = () => {
  return (
    <div className="ttu fw700 py7 mt8 bg-orange1">
      <h2 className="tc">
        <span className="fs3-ns fs2-s dpb">
          {CONFERENCE_YEAR} {APP_NAME} {CONFERENCE_TYPE}
        </span>
        <em className="fsn fs4 fs2-s ls2 ff-libre db">
          {CONFERENCE_URL ? (
            <a className="tdn c-gold" href={CONFERENCE_URL}>
              {CONFERENCE_NAME}
            </a>
          ) : (
            CONFERENCE_NAME
          )}
        </em>
        <span className="fs3-ns fs2-s db">{CONFERENCE_DATE_RANGE}</span>
      </h2>
    </div>
  )
}
