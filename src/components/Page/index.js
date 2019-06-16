import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Page.scss';

class Page extends Component {

    render() {
        let { children, className, ...props } = this.props;
        
        if (!className) {
            className = '';
        }

        return (
            <section {...props} className={`page ${className}`}>{children}</section>
        )
    }
}

export default Page;