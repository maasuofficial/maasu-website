import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AspectRatioBox.scss';

class AspectRatioBox extends Component {

    render() {
        const { children, className, ...props } = this.props;

        let classes = (typeof className === 'string') ? className.split(' ') : [];
        classes.push('aspect-ratio-box-relative');

        return (
            <div className='aspect-ratio-box'>
                <div className='aspect-ratio-box-absolute'>
                    <div {...props} className={classes.join(' ')}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

AspectRatioBox.propTypes = {

}

AspectRatioBox.defaultProps = {

}

export default AspectRatioBox;