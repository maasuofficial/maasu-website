import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup, render } from '@testing-library/react'
import { Provider } from '../'

afterEach(cleanup)

describe('props', () => {
  // routine
  it('sets the initial store', () => {
    const initialStore = { testProp: true }
    const test = (
      <Provider initialStore={initialStore}>
        <span></span>
      </Provider>
    )

    expect(test.props.initialStore).toBe(initialStore)
  })

  // routine
  it('uses children', () => {
    const children = <span></span>
    const test = <Provider>{children}</Provider>

    expect(test.props.children).toBe(children)
  })
})

describe('constructor', () => {
  let test, initialStore

  beforeEach(() => {
    initialStore = {}
    test = {
      constructor: Provider,
      dispatch: jest.fn(),
      state: {},
      props: { initialStore },
    }
  })

  afterEach(() => test.dispatch.mockRestore())

  // routine
  it('sets an initial state', () => {
    const initialStore = { prop1: true, prop2: 'hello' }
    const component = new test.constructor({ initialStore })

    expect(component.state).toEqual({ ...initialStore })
  })
})

describe('dispatch', () => {
  let test, state

  beforeEach(() => {
    state = {}
    test = {
      dispatch: Provider.prototype.dispatch,
      setState: jest.fn(),
      state,
    }
  })

  afterEach(() => test.setState.mockRestore())

  // routine
  it('sets the state', () => {
    test.dispatch((currState) => {
      return { ...currState }
    })

    expect(test.setState).toHaveBeenCalled()
  })

  // routine
  it('applies the current state to an action', () => {
    const action = jest.fn()
    test.state = { prop: true }

    test.dispatch(action)

    expect(action).toHaveBeenCalledWith(test.state)
  })

  // routine
  it('adds to the current state', () => {
    test.dispatch((currState) => {
      return { ...currState, prop: true }
    })

    expect(test.setState).toHaveBeenCalledWith({ ...test.state, prop: true })
  })

  // boundary
  it('adds to the current state even if not explicit in an action', () => {
    test.state = { prop: true, prop2: false }

    test.dispatch((currState) => ({ ...currState }))

    expect(test.setState).toHaveBeenCalledWith({ ...test.state })
  })

  // routine
  it('keeps dispatch pure', () => {
    const ref = test.dispatch
    test.dispatch((currState) => {
      return {
        ...currState,
        prop: true,
      }
    })

    expect(test.dispatch).toEqual(ref)
  })
})

describe('render', () => {
  const renderPrototype = Provider.prototype.render

  // routine
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider>
        <span></span>
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  // routine
  it('adds no additional DOM elements', () => {
    const children = <span></span>
    const test = <Provider>{children}</Provider>

    expect(render(test).baseElement).toEqual(render(children).baseElement)
  })

  // routine
  it('renders children', () => {
    const test = {
      props: { children: <span></span> },
      state: {},
      dispatch: {},
      render: renderPrototype,
    }

    const result = test.render()

    expect(result.props.children).toBe(test.props.children)
  })

  // routine
  it('sets the context value', () => {
    const test = {
      props: {},
      state: {
        stateProp1: true,
        stateProp2: 'hello',
      },
      dispatch: {
        dispatchProp1: () => {},
      },
      render: renderPrototype,
    }

    const result = test.render()

    expect(result.props.value).toEqual({
      store: {
        ...test.state,
        dispatch: test.dispatch,
      },
    })
  })

  // boundary
  it('overwrites dispatch state if necessary', () => {
    const test = {
      props: {},
      state: {
        dispatch: {},
      },
      dispatch: {
        dispatchProp1: () => {},
      },
      render: renderPrototype,
    }

    const result = test.render()

    expect(result.props.value).toEqual({
      store: {
        ...test.state,
        dispatch: test.dispatch,
      },
    })
  })
})
