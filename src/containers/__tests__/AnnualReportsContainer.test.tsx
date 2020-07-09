import React from 'react'
import ReactDOM from 'react-dom'
import { AnnualReports } from '../AnnualReportsContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <AnnualReports
        fetchReports={() => new Promise(() => {})}
        isFetchingReports={false}
        reports={[]}
        reportsError=""
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
