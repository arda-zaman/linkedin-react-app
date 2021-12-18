import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Outlet />
        </div>
    )
};

export default App;