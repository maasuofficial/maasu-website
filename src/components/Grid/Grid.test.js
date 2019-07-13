import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Grid from '.';

afterEach(cleanup);

describe('grid component', () => {
  let renderGrid;

  beforeEach(() => {
    renderGrid = (props, children) => render(<Grid {...props} data-testid='test-grid'>{children}</Grid>);
  })

  it('defaults in a horizontal flex layout', () => {
    const { getByTestId } = renderGrid();
    let grid = getByTestId('test-grid');

    expect(grid.classList.contains('gridX')).toBe(true);
    expect(grid.classList.contains('gridY')).toBe(false);
  })

  it('can switch to a vertical flex layout', () => {
    const { getByTestId } = renderGrid({ y: true });
    let grid = getByTestId('test-grid');

    expect(grid.classList.contains('gridX')).toBe(false);
    expect(grid.classList.contains('gridY')).toBe(true);
  })

  it('renders children', () => {
    let id = 'test-child';
    const { getByTestId } = renderGrid({}, <div data-testid={id}></div>);

    expect(getByTestId(id)).toBeDefined();
  })

})