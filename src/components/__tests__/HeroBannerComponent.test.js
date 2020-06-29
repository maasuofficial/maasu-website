import React from 'react'
import ReactDOM from 'react-dom'
import { HeroBannerComponent } from '../HeroBannerComponent'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HeroBannerComponent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
