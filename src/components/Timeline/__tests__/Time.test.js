import React from 'react';
import ReactDOM from 'react-dom';
import { Time } from '../';

describe('render', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Time />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})