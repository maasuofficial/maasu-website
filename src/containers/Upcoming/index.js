import React from 'react'
import SC from './SC'

class Upcoming extends React.Component {
  componentDidMount() {
    document.title =
      'Upcoming Conferences - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <React.Fragment>
        <SC />
      </React.Fragment>
    )
  }
}

export default Upcoming
