import React from 'react'
import ReactDOM from 'react-dom'
import { Timeline } from '../'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Timeline>test</Timeline>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
