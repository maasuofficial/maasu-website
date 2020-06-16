import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup, render } from '@testing-library/react'
import Menu from '../'

let renderMenu = ''

beforeEach(() => {
  renderMenu = (props, children = <Menu.Link>test</Menu.Link>) =>
    render(<Menu {...props}>{children}</Menu>)
})

afterEach(cleanup)

// routine
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Menu>
      <Menu.Link>test</Menu.Link>
    </Menu>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

/*
// routine
it('creates a <nav> parent element and adds the correct aria label', () => {
  renderMenu()
  const test = document.querySelector('nav[aria-label=menu]')
  expect(test).not.toBeNull()
})

// routine
it('passes props', () => {
  const ref = 'test-serialized-name'

  renderMenu({ className: ref })
  const test = document.querySelector(`nav.${ref}`)

  const { getByTestId } = renderMenu()

  expect(test).not.toBeNull()
  expect(getByTestId(ref)).toBeDefined()
})

describe('default props', () => {
  // routine
  it('contains an undefined-returning linkWrapper function', () => {
    const test = Menu.defaultProps.linkWrapper()
    expect(test).not.toBeDefined()
  })
})
*/
