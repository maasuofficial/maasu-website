import React from 'react';
import ReactDOM from 'react-dom';
import { TimelineTitle } from '../';

describe('render', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimelineTitle />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})