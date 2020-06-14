import React from 'react'
import ReactDOM from 'react-dom'
import PastConf from './'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<PastConf />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
