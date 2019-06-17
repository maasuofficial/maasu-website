import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

class Cell extends Component {

    render() {
        let { auto, children, className, lg, md, shrink, sm, ...props } = this.props;

        const addBreakpoint = (k, v) => {
            if (v > 0) {
                className += `${k} ${k}-${v} `;
            }
        }

        if (!className) {
            className = '';
        }

        if (auto) {
            className += 'auto ';
        }

        if (shrink) {
            className += 'shrink ';
        }

        addBreakpoint('sm', sm);
        addBreakpoint('md', md);
        addBreakpoint('lg', lg);

        return (
            <div {...props} className={`cell ${className}`}>{children}</div>
        );
    }
}

Cell.propTypes = {
    auto: PropTypes.bool,
    lg: PropTypes.number,
    md: PropTypes.number,
    shrink: PropTypes.bool,
    sm: PropTypes.number,
}

Cell.defaultProps = {
    auto: false,
    lg: 0,
    md: 0,
    shrink: false,
    sm: 0,
}

export default Cell;