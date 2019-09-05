import React from 'react';
// import { Upcoming } from '../';
import LS from '../Upcoming/LS';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        {/* <Page>
          title page
        </Page>
        <Upcoming />
        <Page>
          facebook feed
        </Page>
        <Page>
          instagram feed
        </Page>
        <Page>
          hear what they have to say
        </Page> */}

        <LS />

      </React.Fragment>
    );
  }
}

export default Home;