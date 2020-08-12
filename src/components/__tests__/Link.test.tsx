import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { A, Link } from '../Link'

describe('A', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<A href="https://maasu.org">test</A>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders a correct snapshot', () => {
    const test = renderer.create(<A href="https://maasu.org">test text</A>)
    expect(test.toJSON()).toMatchSnapshot()
  })
})

describe('Link', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Link to="/home">test</Link>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders a correct snapshot', () => {
    const test = renderer.create(<Link to="/contact">test text</Link>)
    expect(test.toJSON()).toMatchSnapshot()
  })
})
