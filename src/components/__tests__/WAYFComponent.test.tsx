import React from 'react'
import ReactDOM from 'react-dom'
import { WAYFComponent } from '../WAYFComponent'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<WAYFComponent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
