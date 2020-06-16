import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '../'

class Timeline extends React.Component {
  render() {
    return (
      <Grid y className={'container px4-s'}>
        {this.props.children}
      </Grid>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Timeline
