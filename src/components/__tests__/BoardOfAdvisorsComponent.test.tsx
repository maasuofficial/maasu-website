import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BoardOfAdvisorsComponent } from '../BoardOfAdvisorsComponent'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BoardOfAdvisorsComponent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('renders a matching snapshot', () => {
  const test = renderer.create(<BoardOfAdvisorsComponent />)
  expect(test.toJSON()).toMatchSnapshot()
})
