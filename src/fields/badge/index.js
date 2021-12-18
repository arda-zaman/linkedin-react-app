import React from 'react';
import PropTypes from 'prop-types';

if (process && process?.env?.STORYBOOK) {
    require('../../assets/css/colors.scss');
    require('../../assets/css/fields/badge.scss');
}

const Badge = ({
    children = null,
    count,
    showCountOnZero,
    overflow,
    position
}) => (
    <div className={`badge-field ${position}`}>
        {children}
        <small
            style={{ display: (!showCountOnZero && count === 0) ? 'none' : 'flex' }}
        >
            {count > overflow ? `${overflow}+` : count}
        </small>
    </div>
);

Badge.propTypes = {
    showCountOnZero: PropTypes.bool,
    position: PropTypes.oneOf([
        'topLeft',
        'topRight',
    ]),
    overflow: PropTypes.number,
    count: PropTypes.number,
    children: PropTypes.node.isRequired,
};

Badge.defaultProps = {
    showCountOnZero: false,
    position: 'topRight',
    overflow: 9,
    count: 0,
};

export default Badge;