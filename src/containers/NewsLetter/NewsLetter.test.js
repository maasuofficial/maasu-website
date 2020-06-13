import React from 'react';
import ReactDOM from 'react-dom';
import NewsLetter from './';

describe('render', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsLetter />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
