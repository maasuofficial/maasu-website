import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { EmailAnchor } from '../EmailAnchor'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<EmailAnchor>test</EmailAnchor>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('applies the correct link subject', () => {
  const subject = 'test@test.test'
  const test = renderer.create(<EmailAnchor>{subject}</EmailAnchor>)

  expect(test.toJSON()).toMatchSnapshot()
})
