import React from 'react'
import ReactDOM from 'react-dom'
import { MAAContainer } from '../MAAContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MAAContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
