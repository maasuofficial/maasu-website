import React from 'react'
import { Consumer } from '../'

let Children, render

beforeEach(() => {
  Children = (props) => <span {...props}>test component</span>

  render = (props, context) => {
    const result = Consumer(Children)(props)
    return result.props.children(context)
  }
})

// routine
it('returns a HOC function', () => {
  const result = Consumer()
  expect(typeof result).toBe('function')
})

// routine
it('returns children', () => {
  const result = render()
  expect(result).toEqual(<Children store={{}} />)
})

// routine
it('passes props', () => {
  const result = render({ test: true, val: 'hello' })
  expect(result).toEqual(<Children test={true} val="hello" store={{}} />)
})

// routine
it('passes store if provided', () => {
  const store = { storeProp: true, storeStr: 'test', storeFunc: () => {} }
  const result = render(null, { store })
  expect(result).toEqual(<Children store={{ ...store }} />)
})
