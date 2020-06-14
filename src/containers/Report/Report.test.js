import React from 'react'
import ReactDOM from 'react-dom'
import Report from './'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Report />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
