import React from 'react'
import ReactDOM from 'react-dom'
import { PostRequestComponent } from '../PostRequestComponent'

beforeEach(() => {
  window.location.assign = jest.fn()
})

afterEach(() => {
  window.location.assign.mockRestore()
})

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<PostRequestComponent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
