import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AspectRatioBox.scss';

class AspectRatioBox extends Component {

    render() {
        const { children, className, ...props } = this.props;

        let classes = (typeof className === 'string') ? className.split(' ') : [];
        classes.push('aspect-ratio-box');

        return (
            <div {...props} className={classes.join(' ')}>
                {classes.join(' ')}
            </div>
        );
    }
}

AspectRatioBox.propTypes = {

}

AspectRatioBox.defaultProps = {

}

export default AspectRatioBox;