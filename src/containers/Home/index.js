import React from 'react'
import { HeroBanner } from 'containers/HeroBanner'

class Home extends React.Component {
  componentDidMount() {
    document.title = 'The Midwest Asian American Students Union'
  }

  render() {
    return <HeroBanner />
  }
}

export default Home
