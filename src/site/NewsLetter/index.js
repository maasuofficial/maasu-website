import React from 'react';
import { Page } from '../../components';

class NewsLetter extends React.Component {
  componentDidMount() {
    document.title = 'Newsletter - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        newsletter
      </Page>
    );
  }
}

export default NewsLetter;