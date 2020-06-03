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
              <h2>
                <p>2020 MAASU Fall Conference</p>
                <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/maasuofficial'>
                  <em className={`${modules.golden}`}>Unwritten</em>
                </a>
                <p>October 30 - November 1</p>
              </h2>
            </div>
          </div>

        </Page>
      </React.Fragment>
    );
  }
}

export default SC;
