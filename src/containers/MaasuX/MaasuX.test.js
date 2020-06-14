import React from 'react'
import ReactDOM from 'react-dom'
import MaasuX from './'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MaasuX />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
