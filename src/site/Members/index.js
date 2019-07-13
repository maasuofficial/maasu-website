import React from 'react';
import { Page } from '../../components';

class Members extends React.Component {
  componentDidMount() {
    document.title = 'Member Schools - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        <Page>
          TODO Member schools
        </Page>
        <Page>
          TODO mreps
        </Page>
        <Page>
          TODO join
        </Page>
      </React.Fragment>
    );
  }
}

export default Members;