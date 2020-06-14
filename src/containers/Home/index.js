import React from 'react'
import SC from '../Upcoming/SC'

class Home extends React.Component {
  componentDidMount() {
    document.title = 'The Midwest Asian American Students Union'
  }

  render() {
    return <SC />
  }
}

export default Home
