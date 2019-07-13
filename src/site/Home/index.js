import React from 'react';
import { Upcoming } from '../';
import { Page } from '../../components';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        <Page>
          TODO title page
        </Page>
        <Upcoming />
        <Page>
          TODO facebook feed
        </Page>
        <Page>
          TODO instagram feed
        </Page>
        <Page>
          TODO hear what they have to say
        </Page>
      </React.Fragment>
    );
  }
}

export default Home;