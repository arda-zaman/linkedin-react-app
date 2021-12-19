import React from 'react';
import PropTypes from 'prop-types';

if (process && process?.env?.STORYBOOK) {
    require('../../assets/css/colors.scss');
    require('../../assets/css/fields/card.scss');
}

const Button = ({
    children,
    type,
    htmlType,
    shape,
    // loading,
    icon,
    ghost,
    block
}) => {
    return (
        <div className="button-field">
            <button
                type={htmlType}
                className={`
                    type-${type}
                    shape-${shape}
                    ${ghost ? 'ghost' : ''}
                    ${block ? 'block' : ''}
                `}
            >
                {icon}
                {children}
            </button>
        </div>
    )
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool,
    type: PropTypes.oneOf([
        'primary',
        'seconday',
        'warning',
        'success',
        'danger',
        'link'
    ]),
    htmlType: PropTypes.oneOf([
        'submit',
        'button',
        'reset'
    ]),
    shape: PropTypes.oneOf([
        'default',
        'circle',
        'round'
    ]),
    ghost: PropTypes.bool,
    block: PropTypes.bool,
    icon: PropTypes.node
};

Button.defaultProps = {
    children: <span>Click Me</span>,
    loading: false,
    type: 'primary',
    htmlType: 'button',
    shape: 'default',
    ghost: true,
    block: false,
    icon: null
}

export default Button;