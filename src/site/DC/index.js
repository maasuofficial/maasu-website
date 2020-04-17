import React from 'react';
import { Page, Type } from '../../components';

class DC extends React.Component {
  componentDidMount() {
    document.title = 'Directors Council - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='h2'>Directors Council</Type>

        <div className='footerSpace'></div>
      </Page>
    );
  }
}

export default DC;
