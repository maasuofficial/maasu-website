import React from 'react';
import { Page } from '../../components';

class Awards extends React.Component {
  componentDidMount() {
    document.title = 'Awards - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        awards
      </Page>
    );
  }
}

export default Awards;