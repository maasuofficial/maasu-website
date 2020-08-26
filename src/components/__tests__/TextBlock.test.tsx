import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { TextBlock } from '../TextBlock'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TextBlock title="header">hello</TextBlock>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('renders a matching snapshot', () => {
  const test = renderer.create(<TextBlock title="header">hello</TextBlock>)
  expect(test.toJSON()).toMatchSnapshot()
})
