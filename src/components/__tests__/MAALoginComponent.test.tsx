import React from 'react'
import ReactDOM from 'react-dom'
import { MAALoginComponent } from '../MAALoginComponent'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MAALoginComponent handleLogin={() => {}} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
