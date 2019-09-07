import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import ARBox from './';

afterEach(cleanup);

describe('render', () => {
  let renderARBox = (props, children) => render(<ARBox {...props}>{children}</ARBox>);
  const randIntInRange = (min, max) => Math.round( (Math.random() * (max - min)) + min );

  // routine
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ARBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders children', () => {
    renderARBox({}, <span>child</span>);
    let result = document.querySelector('span');
    expect(result).not.toBeNull();
  })

  // routine
  it('adds ARBox classes to appropriate children', () => {
    renderARBox();
    let result = document.querySelector('.aspectRatioBox');
    expect(result).not.toBeNull();
  })

  // routine
  it('passes classNames to appropriate children', () => {
    let ref1 = 'helloTest', ref2 = 'testClass32';
    renderARBox({ className: `${ref1} ${ref2}`});
    let result = document.querySelector(`.aspectRatioBox.${ref1}.${ref2}`);
    expect(result).not.toBeNull();  
  })

  it('matches the specified width', () => {
    let id = 'test-container-width';
    let width = `${randIntInRange(0, 100)}%`;
    const { getByTestId } = renderARBox({ 'data-testid': id, width });

    expect(getByTestId(id)).toHaveStyle(`width: ${width}`);
  })

  it('uses a default width of 100%', () => {
    let id = 'test-container-width';
    const { getByTestId } = renderARBox({ 'data-testid': id, width: null });
    expect(getByTestId(id)).toHaveStyle('width: 100%');
  })

  it('does not allow resizing by default', () => {
    let id = 'test-container-width';
    const { getByTestId } = renderARBox({ 'data-testid': id });

    expect(getByTestId(id).firstChild).toHaveClass('aspectRatioBoxAbsolute');
    expect(getByTestId(id).firstChild.firstChild).toHaveClass('aspectRatioBoxRelative');
  })

  it('allows resizing when resizeable', () => {
    let id = 'test-container-width';
    const { getByTestId } = renderARBox({ 'data-testid': id, resizeable: true }, <span>test!</span>);

    expect(getByTestId(id).firstChild).not.toHaveClass('aspectRatioBoxAbsolute');
  })

  it('uses a default aspect ratio of 1', () => {
    let id = 'test-container-width';
    const { getByTestId } = renderARBox({ 'data-testid': id });

    expect(getByTestId(id)).toHaveStyle('--aspect-ratio: 1');
  })

  it('changes aspect ratio based on the provided ratio', () => {
    let id = 'test-container-width';
    let ratio = randIntInRange(1, 16/9);
    const { getByTestId } = renderARBox({ 'data-testid': id, aspectRatio: ratio+'' });

    expect(getByTestId(id)).toHaveStyle(`--aspect-ratio: ${ratio}`);
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