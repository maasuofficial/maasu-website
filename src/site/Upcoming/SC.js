import React from 'react';
import { Page } from '../../components';
import './SC.scss';
import modules from './SC.module.scss';

class SC extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Page className={`${modules.container}`}>
          <div className={`${modules.logo}`}>
            <img src={`${process.env.PUBLIC_URL}/assets/branding/Logo-AltDark.svg`} alt='The Midwest Asian American Students Union' />
          </div>

          <div className={`${modules.promoOverlay}`}>
            <div className={`${modules.promoContent}`}>
              <p>Dear Attendees and the MAASU Community,</p>
              <p>Due to the recent events surrounding the COVID-19 outbreak, we have decided as a team to <span>postpone the MAASU Spring Conference 2020 and move it to Fall 2020.</span></p>
              <p>We strongely urge everyone to begin requesting refunds for your lodging and transportation for MAASU. For more news and updates, check out our <a href="https://facebook.com/maasuofficial">Facebook page</a>.</p>
            </div>
          </div>

        </Page>
      </React.Fragment>
    );
  }
}

export default SC;
