import React from 'react';
import PropTypes from 'prop-types';
// import modules from './Timeline.module.scss';

class TimelineSubtitle extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

TimelineSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TimelineSubtitle;