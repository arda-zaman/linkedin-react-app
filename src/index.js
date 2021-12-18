import React from 'react';
import ReactDOM from 'react-dom';
import StoreProvider from './context/store';
import Routes from './routes';
import('./assets/css/main.scss');

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <Routes />
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);