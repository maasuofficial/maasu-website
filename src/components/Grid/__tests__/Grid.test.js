import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Grid from '../';

afterEach(cleanup);

describe('grid component', () => {
    let renderGrid;

    beforeEach(() => {
        renderGrid = (props) => render(<Grid {...props}></Grid>);
    })

    test.todo('these');

})