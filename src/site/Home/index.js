import React from 'react';
import { Upcoming } from '../';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        {/* <Page>
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
        </Page> */}

        <Upcoming />

      </React.Fragment>
    );
  }
}

export default Home;