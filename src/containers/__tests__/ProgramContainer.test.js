import React from 'react'
import ReactDOM from 'react-dom'
import { ProgramContainer } from '../ProgramContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProgramContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
