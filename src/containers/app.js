import React, { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { useStore } from '../hooks';

const App = () => {
    const [store, updateStore] = useStore();
    const { ui } = store;

    const windowClickListener = (event) => {
        if (ui.profile_dropdown === true && !event.target.closest('#profile-dropdown-menu-item')) {
            updateStore('ui', 'profile_dropdown', false);
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('click', windowClickListener);
        return () => window.removeEventListener('click');
    }, []);

    return (

            <div className="app-container">
                <Header />
                <Outlet />
            </div>

    )
};

export default App;