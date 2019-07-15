import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../';
import modules from './Timeline.module.scss';

class Time extends React.Component {
  render() {
    return (
      <Cell className={`${modules.timeContainer}`}>
        <div className={`${modules.labelContainer}`}>
          {this.props.label}
        </div>
        <div>{this.props.children}</div>
      </Cell>
    );
  }
}

Time.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Time;