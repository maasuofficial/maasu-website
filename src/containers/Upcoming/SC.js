import React from 'react'
import {
  APP_NAME,
  APP_NAME_LONG,
  CONFERENCE_NAME,
  CONFERENCE_YEAR,
  CONFERENCE_TYPE,
  CONFERENCE_DATE_RANGE,
  SOCIAL_FACEBOOK,
} from '../../constants/strings'

class SC extends React.Component {
  render() {
    return (
      <div className="posa h-100 reach-router-style">
        <div className={'logo-sc'}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/branding/dark/text.svg`}
            alt={APP_NAME_LONG}
          />
        </div>

        <div className={'promoOverlay-sc'}>
          <div className={'promoContent-sc'}>
            <h2 className="h2-sc">
              <p className={''}>
                {CONFERENCE_YEAR} {APP_NAME} {CONFERENCE_TYPE}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={SOCIAL_FACEBOOK}
              >
                <em className={'fsn fs5 fs3-s golden-sc'}>{CONFERENCE_NAME}</em>
              </a>
              <p className={'date-sc'}>{CONFERENCE_DATE_RANGE}</p>
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default SC
