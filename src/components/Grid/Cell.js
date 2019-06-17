import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

class Cell extends Component {

    render() {
        let { children, className, shrink, sm, ...props } = this.props;

        if (!className) {
            className = '';
        }

        if (shrink) {
            className += 'shrink ';
        }

        if (sm > 0) {
            className += `sm sm-${sm} `;
        }

        return (
            <div {...props} className={`cell ${className}`}>{children}</div>
        );
    }
}

Cell.propTypes = {
    shrink: PropTypes.bool,
    sm: PropTypes.number,
}

Cell.defaultProps = {
    shrink: false,
    sm: 0,
}

export default Cell;