import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

const IconComponent = (props) => <FontAwesomeIcon {...props} icon={icons[props.icon]} />;

IconComponent.propTypes = {
    icon: PropTypes.string.isRequired
};

export default IconComponent;

