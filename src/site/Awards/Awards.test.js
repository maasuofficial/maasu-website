import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';
import Awards from './';

afterEach(cleanup);

describe('render', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Awards />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})