import React from 'react';
import { Page } from '../../components';

class MaasuX extends React.Component {
  componentDidMount() {
    document.title = 'MAASUx - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        maasux
      </Page>
    );
  }
}

export default MaasuX;