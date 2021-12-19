import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = createContext();

const Store = ({
    children
}) => {

    const [state, setState] = useState({
        ui: {},
        user: {}
    });

    const updateStore = (storeKey, key, value) => {
        setState((prevState) => {
            const storeClone = Object.create(prevState);
            if (key) {
                storeClone[storeKey][key] = value;
            } else {
                storeClone[storeKey] = value;
            }
            return storeClone;
        });
    };

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