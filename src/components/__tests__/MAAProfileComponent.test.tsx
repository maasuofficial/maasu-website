import React from 'react'
import ReactDOM from 'react-dom'
import { MAAProfileComponent } from '../MAAProfileComponent'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MAAProfileComponent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
