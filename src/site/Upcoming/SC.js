import React from 'react';
import { Type, Page } from '../../components';
import modules from './SC.module.scss';

const SC = (props) => {
  return (
    <React.Fragment>

      <Page className={`${modules.content}`}>
        <img src={`${process.env.PUBLIC_URL}/assets/branding/Logo-wSymbol.svg`} alt='The Midwest Asian American Students Union' />

        <div className={`${modules.conferenceContent}`}>
          <header>
            <Type cap variant='sub2'>Spring Conference 2020 coming soon!</Type>
          </header>
        </div>

      </Page>
    </React.Fragment>
  )
}

export default SC;