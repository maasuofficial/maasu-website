import React from 'react'
import ReactDOM from 'react-dom'
import { Time } from '../'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Time label={1999}>test</Time>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
