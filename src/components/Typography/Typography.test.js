import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Type from './';

afterEach(cleanup);

describe('typography component', () => {
  let renderType;
    
  beforeEach(() => renderType = (props, children) => render(<Type {...props}>{children}</Type>));

  // routine
  it('renders children elements properly', () => {
    let test = 'child';
    const { getByTestId } = renderType({}, <b data-testid={test}></b>);

    expect(getByTestId(test)).toBeDefined();
  })

  // routine
  it('renders children text properly', () => {
    let test = 'test text here';
    const { getByText } = renderType({}, <b>{test}</b>);

    expect(getByText(test)).toBeDefined();
  })

  // routine
  it('capitalizes text with \'cap\'', () => {
    let test = 'test text';
    const { getByText } = renderType({ cap: true }, <b>{test}</b>);
    
    expect(getByText(test)).toBeDefined();
  })

  // routine
  it('capitalizes text with \'capitalized\'', () => {
    let test = 'test text 2';
    const { getByText } = renderType({ capitalized: true }, <b>{test}</b>);
    
    expect(getByText(test)).toBeDefined();
  })

  // routine
  it('renders h1', () => {
    renderType({ variant: 'h1' });
    
    expect(document.querySelector('h1')).toBeDefined();
  })

  // routine
  it('renders heading1', () => {
    renderType({ variant: 'heading1' });
    
    expect(document.querySelector('h1')).toBeDefined();
  })

  // routine
  it('renders h2', () => {
    renderType({ variant: 'h2' });
    
    expect(document.querySelector('h2')).not.toBeNull();
  })

  // routine
  it('renders heading2', () => {
    renderType({ variant: 'heading2' });
    
    expect(document.querySelector('h2')).not.toBeNull();
  })

  // routine
  it('renders h3', () => {
    renderType({ variant: 'h3' });
    
    expect(document.querySelector('h3')).not.toBeNull();
  })

  // routine
  it('renders heading3', () => {
    renderType({ variant: 'heading3' });
    
    expect(document.querySelector('h3')).not.toBeNull();
  })

  // routine
  it('renders h4', () => {
    renderType({ variant: 'h4' });
    
    expect(document.querySelector('h4')).not.toBeNull();
  })

  // routine
  it('renders heading4', () => {
    renderType({ variant: 'heading4' });
    
    expect(document.querySelector('h4')).not.toBeNull();
  })

  // routine
  it('renders h5', () => {
    renderType({ variant: 'h5' });
    
    expect(document.querySelector('h5')).not.toBeNull();
  })

  // routine
  it('renders heading5', () => {
    renderType({ variant: 'heading5' });
    
    expect(document.querySelector('h5')).not.toBeNull();
  })

  // routine
  it('renders h6', () => {
    renderType({ variant: 'h6' });
    
    expect(document.querySelector('h6')).not.toBeNull();
  })

  // routine
  it('renders heading6', () => {
    renderType({ variant: 'heading6' });
    
    expect(document.querySelector('h6')).not.toBeNull();
  })

  // routine
  it('renders sub1', () => {
    renderType({ variant: 'sub1' });
    
    expect(document.querySelector('.subtitle.sub1')).not.toBeNull();
  })

  // routine
  it('renders subtitle1', () => {
    renderType({ variant: 'subtitle1' });
    
    expect(document.querySelector('.subtitle.sub1')).not.toBeNull();
  })

  // routine
  it('renders sub2', () => {
    renderType({ variant: 'sub2' });
    
    expect(document.querySelector('.subtitle.sub2')).not.toBeNull();
  })

  // routine
  it('renders subtitle2', () => {
    renderType({ variant: 'subtitle2' });
    
    expect(document.querySelector('.subtitle.sub2')).not.toBeNull();
  })

  // routine
  it('renders sub3', () => {
    renderType({ variant: 'sub3' });
    
    expect(document.querySelector('.subtitle.sub3')).not.toBeNull();
  })

  // routine
  it('renders subtitle3', () => {
    renderType({ variant: 'subtitle3' });
    
    expect(document.querySelector('.subtitle.sub3')).not.toBeNull();
  })

  // routine
  it('renders sub4', () => {
    renderType({ variant: 'sub4' });
    
    expect(document.querySelector('.subtitle.sub4')).not.toBeNull();
  })

  // routine
  it('renders subtitle4', () => {
    renderType({ variant: 'subtitle4' });
    
    expect(document.querySelector('.subtitle.sub4')).not.toBeNull();
  })

  // routine
  it('renders sub5', () => {
    renderType({ variant: 'sub5' });
    
    expect(document.querySelector('.subtitle.sub5')).not.toBeNull();
  })

  // routine
  it('renders subtitle5', () => {
    renderType({ variant: 'subtitle5' });
    
    expect(document.querySelector('.subtitle.sub5')).not.toBeNull();
  })

  // routine
  it('renders sub6', () => {
    renderType({ variant: 'sub6' });
    
    expect(document.querySelector('.subtitle.sub6')).not.toBeNull();
  })

  // routine
  it('renders subtitle6', () => {
    renderType({ variant: 'subtitle6' });
    
    expect(document.querySelector('.subtitle.sub6')).not.toBeNull();
  })

  // routine
  it('renders em', () => {
    renderType({ variant: 'em' });
    
    expect(document.querySelector('em')).not.toBeNull();
  })

  // routine
  it('renders emphasis', () => {
    renderType({ variant: 'emphasis' });
    
    expect(document.querySelector('em')).not.toBeNull();
  })

  // routine
  it('renders styled', () => {
    renderType({ variant: 'styled' });
    
    expect(document.querySelector('span')).not.toBeNull();
  })

  // routine
  it('renders h3 by default', () => {
    renderType({ variant: '' });
    
    expect(document.querySelector('h3')).not.toBeNull();
  })

})