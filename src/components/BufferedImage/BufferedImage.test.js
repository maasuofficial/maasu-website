import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';
import BImg from './';

let ref;

beforeEach(() => {
  ref = {
    handleLoad: BImg.prototype.handleLoad,
    handleError: BImg.prototype.handleError, 
    render: BImg.prototype.render,
    setState: jest.fn(),
    state: { buffering: true },
    props: { src: '', alt: '' },
  }
})

afterEach(() => {
  ref.setState.mockRestore();
  cleanup();
})

describe('handleLoad', () => {

  // routine
  it('sets the buffering state to false', () => {
    ref.handleLoad();
    expect(ref.setState).toHaveBeenCalledWith({ buffering: false });
  })

})

describe('handleError', () => {

  // routine
  it('sets the buffering state to false', () => {
    ref.handleError();
    expect(ref.setState).toHaveBeenCalledWith({ buffering: false });
  })

})

describe('render', () => {
  const renderBImg = (props) => render(<BImg src='' alt='' {...props} />);

  // routine
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BImg src='' alt='' />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  // routine
  it('produces an <img> element', () => {
    renderBImg();
    let test = document.querySelector('img');
    expect(test).not.toBeNull();    
  })

  // routine
  it('adds buffered image classes', () => {
    renderBImg();
    let test = document.querySelector('.bufferedImage.buffering');
    expect(test).not.toBeNull();
  })

  // routine
  it('passes className to children', () => {
    let ref1 = 'helloTest', ref2 = 'testClass3';
    renderBImg({ className: `${ref1} ${ref2}`});
    let test = document.querySelector(`.bufferedImage.buffering.${ref1}.${ref2}`);
    expect(test).not.toBeNull();
  })

  // routine
  it('removes buffered class if not buffering', () => {
    ref.state.buffering = false;
    ref.render();

    let test = document.querySelector('.bufferedImage.buffering');
    expect(test).toBeNull();
  })

})