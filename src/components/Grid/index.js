import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

import Cell from './Cell';

class Grid extends Component {

    render() {
        let { children, className, x, y, style, ...props } = this.props;

        if (!className) {
            className = '';
        }

        if (y) {
            className += 'grid-y ';
        } else {
            className += 'grid-x ';
        }

        return (
            <div {...props} className={`grid ${className}`}>{children}</div>
        );
    }
}

Grid.propTypes = {
    x: PropTypes.bool,
    y: PropTypes.bool,
}

Grid.defaultProps = {
    x: true,
    y: false,
}

export { Grid, Cell }
export default Grid;