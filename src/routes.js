import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWorld from './pages/hello-world';

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HelloWorld />} />
        </Routes>
    </BrowserRouter>
);