import React from 'react';
import ReactDOM from 'react-dom';
import Alumni from '../';

describe('alumni component', () => {

  describe('render', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Alumni />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  
  })
    
})
