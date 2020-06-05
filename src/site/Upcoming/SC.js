import React from 'react'
import { Page } from '../../components'
import './SC.scss'
import modules from './SC.module.scss'
import { CORE, UPCOMING } from '../../constants/strings'

class SC extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Page className={`${modules.container}`}>
          <div className={`${modules.logo}`}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/branding/dark/text.svg`}
              alt={CORE.NAME_LONG}
            />
          </div>

          <div className={`${modules.promoOverlay}`}>
            <div className={`${modules.promoContent}`}>
              <h2>
                <p className={`${modules.title}`}>
                  {UPCOMING.CONFERENCE_YEAR} {CORE.NAME}{' '}
                  {UPCOMING.CONFERENCE_TYPE}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/maasuofficial"
                >
                  <em className={`${modules.golden}`}>
                    {UPCOMING.CONFERENCE_NAME}
                  </em>
                </a>
                <p className={`${modules.date}`}>
                  {UPCOMING.CONFERENCE_DATE_RANGE}
                </p>
              </h2>
            </div>
          </div>
        </Page>
      </React.Fragment>
    )
  }
}

export default SC
