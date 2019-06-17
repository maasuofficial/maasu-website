import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Cell from '../Cell';

afterEach(cleanup);

describe('cell component', () => {
    let renderCell;
    const numGridCells = 12;

    const randNumInRange = (min, max) => Math.round( (Math.random() * (max - min)) + min );

    beforeEach(() => {
        renderCell = (props, children) => render(<Cell {...props} data-testid='test-cell'>{children}</Cell>);
    })

    it('renders children', () => {
        let id = 'test-child';
        const { getByTestId } = renderCell({}, <div data-testid={id}></div>);

        expect(getByTestId(id)).toBeDefined();
    })

    it('supports auto size layout', () => {
        const { getByTestId } = renderCell({ auto: true });
        let cell = getByTestId('test-cell');

        expect(cell.classList.contains('auto')).toBe(true);
    })    

    it('supports a shrinked layout', () => {
        const { getByTestId } = renderCell({ shrink: true });
        let cell = getByTestId('test-cell');

        expect(cell.classList.contains('shrink')).toBe(true);
    })

    it('supports small breakpoints', () => {
        let index = randNumInRange(1, numGridCells);
        const { getByTestId } = renderCell({ sm: index });
        let cell = getByTestId('test-cell');

        expect(cell.classList.contains('sm')).toBe(true);
        expect(cell.classList.contains('sm-'+index)).toBe(true);
    })

    it('supports medium breakpoints', () => {
        let index = randNumInRange(1, numGridCells);
        const { getByTestId } = renderCell({ md: index });
        let cell = getByTestId('test-cell');

        expect(cell.classList.contains('md')).toBe(true);
        expect(cell.classList.contains('md-'+index)).toBe(true);
    })

    it('supports large breakpoints', () => {
        let index = randNumInRange(1, numGridCells);
        const { getByTestId } = renderCell({ lg: index });
        let cell = getByTestId('test-cell');

        expect(cell.classList.contains('lg')).toBe(true);
        expect(cell.classList.contains('lg-'+index)).toBe(true);
    })

})