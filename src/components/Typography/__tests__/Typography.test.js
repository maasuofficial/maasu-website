import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Typography from '../';

afterEach(cleanup);

describe('typography component', () => {
    let renderTypography;
    
    beforeEach(() => {
        renderTypography = (props, children) => render(<Typography {...props}>{children}</Typography>);
    })

    it('renders children elements properly', () => {
        const { getByTestId } = renderTypography({}, <div data-testid='child-elem'></div>);

        expect(getByTestId('child-elem')).toBeDefined();
    })

    it('renders children text properly', () => {
        let testStr = 'test text here';
        const { getByText } = renderTypography({}, <div data-testid='child-elem'>{testStr}</div>);

        expect(getByText(testStr)).toBeDefined();
    })

})