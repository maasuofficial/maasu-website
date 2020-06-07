import React, { Component } from 'react';

class Page extends Component {
  render() {
    const { children, className, ...props } = this.props;
    
    let classes = (typeof className === 'string') ? className.split(' ') : [];
    classes.push('page');

    return <section {...props} className={classes.join(' ')}>{children}</section>;
  }
}

export default Page;
