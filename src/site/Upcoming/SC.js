import React from 'react'
import { Page } from '../../components'
import { CORE, UPCOMING } from '../../constants/strings'

class SC extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Page className={'container-sc'}>
          <div className={'logo-sc'}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/branding/dark/text.svg`}
              alt={CORE.NAME_LONG}
            />
          </div>

          <div className={'promoOverlay-sc'}>
            <div className={'promoContent-sc'}>
              <h2 className='h2-sc'>
                <p className={'title-sc'}>
                  {UPCOMING.CONFERENCE_YEAR} {CORE.NAME}{' '}
                  {UPCOMING.CONFERENCE_TYPE}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/maasuofficial"
                >
                  <em className={'golden-sc em-sc'}>
                    {UPCOMING.CONFERENCE_NAME}
                  </em>
                </a>
                <p className={'date-sc'}>
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
