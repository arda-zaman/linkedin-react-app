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

    return (
        <hr
            style={{
                width: dWidth,
                height: dHeight,
                [borderSide]: thickness,
                borderColor: color
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
    color: '#EBEBEB',
}

export default Divider;