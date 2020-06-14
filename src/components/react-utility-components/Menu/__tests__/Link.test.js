import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup, render } from '@testing-library/react'
import Menu from '../'

let renderLink

beforeEach(() => {
  renderLink = (props, children = 'test') =>
    render(<Menu.Link {...props}>{children}</Menu.Link>)
})

afterEach(cleanup)

// routine
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Menu.Link>test</Menu.Link>, div)
  ReactDOM.unmountComponentAtNode(div)
})

/*
// routine
it('returns an element', () => {
  const container = renderLink()

  expect(container).toBeDefined()
  expect(document.querySelector('.link')).not.toBeNull()
})

// routine
it('appends classNames', () => {
  const ref1 = 'test'
  const ref2 = 'testClass2'
  renderLink({ className: `${ref1} ${ref2}` })

  expect(document.querySelector(`.link.${ref1}.${ref2}`)).not.toBeNull()
})

// routine
it('adds horizontal class', () => {
  renderLink({ horizontal: true })
  expect(document.querySelector('.link.horizontal')).not.toBeNull()
})

// routine
it('wraps with a list item if it is not a submenu trigger', () => {
  renderLink({ isSubMenuTrigger: false })
  expect(document.querySelector('li.link')).not.toBeNull()
})

// routine
it('produces a button if no href exists but is a dropdown', () => {
  renderLink({ dropdown: true })
  expect(document.querySelector('button.link')).not.toBeNull()
})

// routine
it('produces a span if no href exists', () => {
  renderLink()
  expect(document.querySelector('span.link')).not.toBeNull()
})

// routine
it('produces a wrapped item if linkWrapper is valid', () => {
  renderLink({
    href: 'test',
    linkWrapper: (href, children) => <b href={href}>{children}</b>,
  })
  expect(document.querySelector('b')).not.toBeNull()
})

// routine
it('produces a default link', () => {
  renderLink({ href: 'test' })
  expect(document.querySelector('a.link')).not.toBeNull()
})
*/
