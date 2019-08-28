import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';
import Pressable from './';

afterEach(cleanup);

// routine
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pressable>test</Pressable>, div);
  ReactDOM.unmountComponentAtNode(div);
})

// routine
it('adds classes', () => {
  let ref = 'testClassName';
  render(<Pressable className={ref}>test</Pressable>);

  let test = document.querySelector(`.${ref}`);
  expect(test).not.toBeNull();
})
