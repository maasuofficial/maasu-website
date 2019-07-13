import React from 'react';
import { Page } from '../../components';

class Alumni extends React.Component {
  componentDidMount() {
    document.title = 'Alumni - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        alumni
      </Page>
    );
  }
}

export default Alumni;