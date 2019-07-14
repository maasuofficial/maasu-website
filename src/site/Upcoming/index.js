import React from 'react';
import { Page } from '../../components';

class Upcoming extends React.Component {
  componentDidMount() {
    document.title = 'Upcoming Conferences - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        2019 Leadership Summit (LS)
        Hosted by Wichita State University in Wichita, Kansas

        2019 Spring Conference (SC)
        Hosted by University of Minnesota - Twin Cities in Minneapolis, Minnesota
      </Page>
    );
  }
}

export default Upcoming;