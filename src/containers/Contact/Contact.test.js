import React from 'react'
import ReactDOM from 'react-dom'
import Contact from './'
import 'constants/iconLibrary'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Contact />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
