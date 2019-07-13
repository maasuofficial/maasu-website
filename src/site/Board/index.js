import React from 'react';
import { Page } from '../../components';

class Board extends React.Component {
  componentDidMount() {
    document.title = 'Executive Board - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        <Page>
          TODO board heirarchy
        </Page>
        <Page>
          TODO How to apply
        </Page>
      </React.Fragment>
    );
  }
}

export default Board;