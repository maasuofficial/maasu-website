import React from 'react'
import { CORE, UPCOMING } from '../../constants/strings'

class SC extends React.Component {
  render() {
    return (
      <div className="reach-router-style">
        <div className={'logo-sc'}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/branding/dark/text.svg`}
            alt={CORE.NAME_LONG}
          />
        </div>

        <div className={'promoOverlay-sc'}>
          <div className={'promoContent-sc'}>
            <h2 className="h2-sc">
              <p className={''}>
                {/* <p className={'title-sc'}> */}
                {UPCOMING.CONFERENCE_YEAR} {CORE.NAME}{' '}
                {UPCOMING.CONFERENCE_TYPE}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/maasuofficial"
              >
                <em className={'fsn fs5 fs3-s golden-sc'}>
                  {/* <em className={'golden-sc em-sc'}> */}
                  {UPCOMING.CONFERENCE_NAME}
                </em>
              </a>
              <p className={'date-sc'}>{UPCOMING.CONFERENCE_DATE_RANGE}</p>
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default SC
