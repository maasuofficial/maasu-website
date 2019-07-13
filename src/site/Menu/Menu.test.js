import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';
import Menu from './';

afterEach(cleanup);

describe('render', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})