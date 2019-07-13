import React from 'react';
import { Page } from '../../components';

class PastAwards extends React.Component {
  componentDidMount() {
    document.title = 'Past Awards Recipients - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        past awards
      </Page>
    );
  }
}

export default PastAwards;