import React from 'react'
import ReactDOM from 'react-dom'
import { AnnualReportContainer } from '../AnnualReportContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AnnualReportContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
