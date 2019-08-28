import React, { Component } from 'react';
import PropTypes from 'prop-types';
import modules from './Pressable.module.scss';

class Pressable extends Component {
  render() {
    const { children, className, href } = this.props;

    let classes = (typeof className === 'string') ? className.split(' ') : [];
    classes.push(modules.pressableContainer);

    return (
      <a href={href} role='button' className={`${modules.link}`}>
        <div className={classes.join(' ')}>{children}</div>
      </a>
    );
  }
}

Pressable.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
}

export default Pressable;