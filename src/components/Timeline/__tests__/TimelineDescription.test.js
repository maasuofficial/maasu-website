import React from 'react';
import ReactDOM from 'react-dom';
import { TimelineDescription } from '../';

describe('render', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimelineDescription />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})