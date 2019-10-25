import React from 'react';
import SC from '../Upcoming/SC';

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

        <SC />

      </React.Fragment>
    );
  }
}

export default Home;