import React from 'react'
import ReactDOM from 'react-dom'
import { DirectorsCouncilContainer } from '../DirectorsCouncilContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DirectorsCouncilContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
