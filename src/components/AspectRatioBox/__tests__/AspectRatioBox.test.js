import React from 'react';
import { cleanup, render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import ARBox from '../';

afterEach(cleanup);

describe('aspect ratio box component', () => {
  let renderARBox;

  const randIntInRange = (min, max) => Math.round( (Math.random() * (max - min)) + min );

  beforeEach(() => {
    renderARBox = (props, children) => render(<ARBox {...props}>{children}</ARBox>);
  })

  it('renders children', () => {
    let id = 'child-test-id';
    const { getByTestId } = renderARBox({}, <div data-testid={id}></div>);

    expect(getByTestId(id)).toBeDefined();
  })

  it('matches the specified width', () => {
    let id = 'test-container-width';
    let width = `${randIntInRange(0, 100)}%`;
    const { getByTestId } = renderARBox({ 'data-testid': id, width });

    expect(getByTestId(id)).toHaveStyle(`width: ${width}`);
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