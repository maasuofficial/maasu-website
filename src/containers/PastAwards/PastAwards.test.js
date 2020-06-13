import React from 'react';
import ReactDOM from 'react-dom';
import PastAwards from './';

describe('render', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PastAwards />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
