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
        return () => window.removeEventListener('click', windowClickListener);
    }, []);

    return (

            <div className="app-container">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="inner-content-wrapper">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>

    )
};

export default App;