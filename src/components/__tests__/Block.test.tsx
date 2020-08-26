import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { Block } from '../Block'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Block>hello</Block>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('renders a matching snapshot', () => {
  const test = renderer.create(<Block>hello</Block>)
  expect(test.toJSON()).toMatchSnapshot()
})
