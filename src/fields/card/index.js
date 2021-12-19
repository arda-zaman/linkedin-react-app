import React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({
    title,
    icon,
    children,
    block,
    id,
    className
}) => {
    return (
        <div className={`card-field ${className} ${block ? 'block' : ''}`} id={id}>
            {title && (
                <div className="card-header d-flex justify-between align-center">
                    <strong>{title}</strong>
                    {icon}
                </div>
            )}

            <div className="card-body">
                {children}
            </div>
        </div>
    )
};

CardComponent.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node,
    block: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string
};

CardComponent.defaultProps = {
    title: '',
    icon: null,
    block: false,
    id: '',
    className: ''
};

export default CardComponent;