import React from 'react';
import ReactDOM from 'react-dom';
import Archives from './';


describe('render', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Archives />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
    
