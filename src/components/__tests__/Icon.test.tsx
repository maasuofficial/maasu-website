import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from '../Icon'
import 'constants/iconLibrary'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Icon icon="home" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
