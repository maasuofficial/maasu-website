import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { Container } from '../Container'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Container>hello</Container>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('renders a matching snapshot', () => {
  const test = renderer.create(<Container>hello</Container>)
  expect(test.toJSON()).toMatchSnapshot()
})
