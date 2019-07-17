import React from 'react';
import PropTypes from 'prop-types';

class TimelineSubtitle extends React.Component {
  render() {
    return (
      <span>{this.props.children}</span>
    );
  }
}

TimelineSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TimelineSubtitle;