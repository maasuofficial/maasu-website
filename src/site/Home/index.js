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

        {/* <Upcoming /> */}
        <LS />
        
      </React.Fragment>
    );
  }
}

export default Home;