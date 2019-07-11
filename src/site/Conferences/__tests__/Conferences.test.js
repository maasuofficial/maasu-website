import React from 'react';
import ReactDOM from 'react-dom';
import Conferences from '../';

describe('conferences component', () => {

  describe('render', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Conferences />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  
  })
    
})
