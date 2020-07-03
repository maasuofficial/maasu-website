import React from 'react'
import ReactDOM from 'react-dom'
import { MainContainer } from '../MainContainer'
import 'constants/iconLibrary'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MainContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
