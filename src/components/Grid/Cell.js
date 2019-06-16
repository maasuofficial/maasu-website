import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

class Cell extends Component {

    render() {
        let { children, className, shrink, ...props } = this.props;

        if (!className) {
            className = '';
        }

        if (shrink) {
            className += ' shrink';
        }

        return (
            <div {...props} className={`cell ${className}`}>{children}</div>
        );
    }
}

Cell.propTypes = {
    shrink: PropTypes.bool,
}

Cell.defaultProps = {
    shrink: false,
}

export default Cell;