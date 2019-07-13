import React from 'react';
import ReactDOM from 'react-dom';
import Resources from './';

describe('resources component', () => {

  describe('render', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Resources />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  
  })
    
})
