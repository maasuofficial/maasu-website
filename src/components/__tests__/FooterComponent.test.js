import React from 'react'
import ReactDOM from 'react-dom'
import { FooterComponent } from '../FooterComponent'
import 'constants/iconLibrary'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FooterComponent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
