import React from 'react'
import { Page } from '../../components'

class Report extends React.Component {
  componentDidMount() {
    document.title = 'Annual Report - The Midwest Asian American Students Union'
  }

  render() {
    return <Page>report</Page>
  }
}

export default Report
