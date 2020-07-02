import React from 'react'
import ReactDOM from 'react-dom'
import { ContactContainer } from '../ContactContainer'
import 'constants/iconLibrary'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ContactContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
