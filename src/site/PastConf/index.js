import React from 'react';
import { Page } from '../../components';

class PastConf extends React.Component {
  componentDidMount() {
    document.title = 'Past Conferences - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        past conferences
      </Page>
    );
  }
}

export default PastConf;