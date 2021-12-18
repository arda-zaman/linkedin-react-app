import React, { useState, createContext, useCallback } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = createContext();

const Store = ({
    children
}) => {

    const [state, setState] = useState({
        ui: {},
        user: {}
    });

    const updateStore = useCallback((storeKey, key, value) => {
        setState((prevState) => (
            prevState[storeKey][key] = value
        ));
    }, [state]);

    return (
        <StoreContext.Provider value={[state, updateStore]}>
            {children}
        </StoreContext.Provider>
    );
};

Store.propTypes = {
    children: PropTypes.node.isRequired
};

export default Store;