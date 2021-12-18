import { useContext } from 'react';
import { StoreContext } from '../context/store';

const UseStore = () => {
    const [store, updateStore] = useContext(StoreContext);

    return [store, updateStore];
};

export default UseStore;