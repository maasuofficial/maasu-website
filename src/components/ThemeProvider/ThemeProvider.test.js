import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ThemeProvider from './';

afterEach(cleanup);

describe('theme provider component', () => {
  let renderThemeProvider;

  beforeEach(() => {
    renderThemeProvider = (props) => render(<ThemeProvider {...props}><div></div></ThemeProvider>);
  })

  it('is defined', () => {
    let container = renderThemeProvider();
    expect(container).toBeDefined();
  })

})