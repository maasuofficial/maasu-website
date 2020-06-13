import React from 'react'
import ReactDOM from 'react-dom'
import Alumni from './'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Alumni />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
