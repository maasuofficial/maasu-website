import React from 'react';
// import modules from './Upcoming.module.scss';
import LS from './LS';
import SC from './SC';

class Upcoming extends React.Component {
  componentDidMount() {
    document.title = 'Upcoming Conferences - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        <LS />
        <SC />
      </React.Fragment>
    );
  }
}

export default Upcoming;