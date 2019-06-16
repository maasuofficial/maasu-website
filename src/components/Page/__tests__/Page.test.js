import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Page from '../';

afterEach(cleanup);

describe('page component', () => {
    let renderPage;

    beforeEach(() => {
        renderPage = (props, children) => render(<Page {...props}>{children}</Page>)
    })

    it('displays nested children', () => {
        let id = 'test-child-id';
        const { getByTestId } = renderPage({}, <div data-testid={id}></div>);
        
        expect(getByTestId(id)).toBeDefined();
    })

})