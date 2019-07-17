import React from 'react';
import { Type } from '../';

class TimelineTitle extends React.Component {
  render() {
    return (
      <Type variant='h4'>{this.props.children}</Type>
    );
  }
}

export default TimelineTitle;