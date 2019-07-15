import React from 'react';

class TimelineDescription extends React.Component {
  render() {
    return (
      <p>
        {this.props.children}
      </p>
    );
  }
}

export default TimelineDescription;