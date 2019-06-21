import React, { Component } from 'react';
import PropTypes from 'prop-types';
import modules from './Grid.module.scss';

import Cell from './Cell';

class Grid extends Component {

    render() {
        const { children, className, x, y, ...props } = this.props;

        let classes = (typeof className === 'string') ? className.split(' ') : [];
        classes.push(`${modules.grid}`);

        if (y) {
            classes.push(`${modules.gridY}`);
        } else {
            classes.push(`${modules.gridX}`);
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