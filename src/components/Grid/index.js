import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

import Cell from './Cell';

class Grid extends Component {

    render() {
        const { children, className, x, y, ...props } = this.props;

        let classes = (typeof className === 'string') ? className.split(' ') : [];
        classes.push('grid');

        if (y) {
            classes.push('grid-y');
        } else {
            classes.push('grid-x');
        }

        return (
            <div {...props} className={classes.join(' ')}>{children}</div>
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