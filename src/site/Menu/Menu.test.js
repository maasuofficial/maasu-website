import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';
import Menu from './';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('render', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Menu /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})