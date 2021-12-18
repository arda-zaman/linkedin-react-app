import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import StoreProvider from '../context/store';

const App = () => {
    return (
        <StoreProvider>
            <div className="app-container">
                <Header />
                <Outlet />
            </div>
        </StoreProvider>
    )
};

export default App;