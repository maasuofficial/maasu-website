import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../';
import modules from './Timeline.module.scss';

class Timeline extends React.Component {
  render() {
    return (
      <Grid y className={`${modules.container}`}>
        {this.props.children}
      </Grid>
    );
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Timeline;