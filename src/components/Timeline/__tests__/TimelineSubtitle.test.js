import React from 'react'
import ReactDOM from 'react-dom'
import { TimelineSubtitle } from '../'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TimelineSubtitle />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
