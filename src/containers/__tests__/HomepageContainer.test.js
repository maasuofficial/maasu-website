import React from 'react'
import ReactDOM from 'react-dom'
import { HomepageContainer } from '../HomepageContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HomepageContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
