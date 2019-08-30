import React from 'react';
import { Page } from '../../components';
import modules from './Upcoming.module.scss';
import LS from './LS';
import SC from './SC';

class Upcoming extends React.Component {
  componentDidMount() {
    document.title = 'Upcoming Conferences - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        <Page className={`${modules.conference}`}>
          <LS />
        </Page>
        <Page className={`${modules.conference}`}>
          <SC />
        </Page>
      </React.Fragment>
    );
  }
}

export default Upcoming;