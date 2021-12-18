/* eslint no-ternary: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({
    color,
    thickness,
    orientation,
    dividerSize,
}) => {
    const dWidth = orientation === 'horizontal' ? dividerSize : 0;
    const dHeight = orientation === 'horizontal' ? 0 : dividerSize;
    const borderSide = orientation === 'horizontal' ? 'borderTopWidth' : 'borderLeftWidth';
    const margin = orientation === 'horizontal' ? '10px 0' : '0 10px';

    return (
        <hr
            className="d-block"
            style={{
                width: dWidth,
                height: dHeight,
                [borderSide]: thickness,
                borderColor: color,
                margin
            }}
        />
    );
};

Divider.propTypes = {
    thickness: PropTypes.number,
    orientation: PropTypes.oneOf([
        'horizontal',
        'vertical'
    ]),
    dividerSize: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    color: PropTypes.string,
};

Divider.defaultProps = {
    thickness: 1,
    orientation: 'horizontal',
    dividerSize: 'auto',
    color: 'rgba(0,0,0, 0.08)',
}

export default Divider;