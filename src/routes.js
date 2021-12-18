import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './containers/app';
import HelloWorld from './pages/hello-world';

const RoutesComp = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="hello-world" element={<HelloWorld />} />
            </Route>
            <Route path="*" element={<div>not found</div>} />
        </Routes>
    </BrowserRouter>
);

export default RoutesComp;