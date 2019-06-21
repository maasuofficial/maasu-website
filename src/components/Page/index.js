import React, { Component } from 'react';
import modules from './Page.module.scss';

class Page extends Component {

    render() {
        const { children, className, ...props } = this.props;
        
        let classes = (typeof className === 'string') ? className.split(' ') : [];
        classes.push(`${modules.page}`);

        return (
            <section {...props} className={classes.join(' ')}>{children}</section>
        );
    }
}

export default Page;