import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup, render } from '@testing-library/react'
import 'jest-dom/extend-expect'
import ARBox from './'

afterEach(cleanup)

describe('render', () => {
  const renderARBox = (props, children) =>
    render(<ARBox {...props}>{children}</ARBox>)
  const randIntInRange = (min, max) =>
    Math.round(Math.random() * (max - min) + min)

  // routine
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ARBox />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders children', () => {
    renderARBox({}, <span>child</span>)
    const result = document.querySelector('span')
    expect(result).not.toBeNull()
  })

  // routine
  it('adds ARBox classes to appropriate children', () => {
    renderARBox()
    const result = document.querySelector('.aspectRatioBox')
    expect(result).not.toBeNull()
  })

  // routine
  it('passes classNames to appropriate children', () => {
    const ref1 = 'helloTest'
    const ref2 = 'testClass32'
    renderARBox({ className: `${ref1} ${ref2}` })
    const result = document.querySelector(`.aspectRatioBox.${ref1}.${ref2}`)
    expect(result).not.toBeNull()
  })

  it('matches the specified width', () => {
    const id = 'test-container-width'
    const width = `${randIntInRange(0, 100)}%`
    const { getByTestId } = renderARBox({ 'data-testid': id, width })

    expect(getByTestId(id)).toHaveStyle(`width: ${width}`)
  })

  it('uses a default width of 100%', () => {
    const id = 'test-container-width'
    const { getByTestId } = renderARBox({ 'data-testid': id, width: null })
    expect(getByTestId(id)).toHaveStyle('width: 100%')
  })

  it('does not allow resizing by default', () => {
    const id = 'test-container-width'
    const { getByTestId } = renderARBox({ 'data-testid': id })

    expect(getByTestId(id).firstChild).toHaveClass('aspectRatioBoxAbsolute')
    expect(getByTestId(id).firstChild.firstChild).toHaveClass(
      'aspectRatioBoxRelative'
    )
  })

  it('allows resizing when resizeable', () => {
    const id = 'test-container-width'
    const { getByTestId } = renderARBox(
      { 'data-testid': id, resizeable: true },
      <span>test!</span>
    )

    expect(getByTestId(id).firstChild).not.toHaveClass('aspectRatioBoxAbsolute')
  })

  it('uses a default aspect ratio of 1', () => {
    const id = 'test-container-width'
    const { getByTestId } = renderARBox({ 'data-testid': id })

    expect(getByTestId(id)).toHaveStyle('--aspect-ratio: 1')
  })

  it('changes aspect ratio based on the provided ratio', () => {
    const id = 'test-container-width'
    const ratio = randIntInRange(1, 16 / 9)
    const { getByTestId } = renderARBox({
      'data-testid': id,
      aspectRatio: ratio + '',
    })

    expect(getByTestId(id)).toHaveStyle(`--aspect-ratio: ${ratio}`)
  })
})
/*
describe('aspect ratio box component', () => {

  it('renders children', () => {
    let id = 'child-test-id';
    const { getByTestId } = renderARBox({}, <div data-testid={id}></div>);

    expect(getByTestId(id)).toBeDefined();
  })

})
*/
