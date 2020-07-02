import React from 'react'
import ReactDOM from 'react-dom'
import { AlumniContainer } from '../AlumniContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AlumniContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
