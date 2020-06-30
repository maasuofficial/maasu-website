import React from 'react'
import { HeroBannerComponent } from 'components/HeroBannerComponent'

class Home extends React.Component {
  componentDidMount() {
    document.title = 'The Midwest Asian American Students Union'
  }

  render() {
    return <HeroBannerComponent />
  }
}

export default Home
