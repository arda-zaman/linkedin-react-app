import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import MyNetworks from './pages/mynetworks';
import Jobs from './pages/jobs';
import Messaging from './pages/messaging';
import Notifications from './pages/notifications';
import LoadingPage from './components/loading';

const AppContainer = lazy(() => import('./containers/app'));

const RoutesComp = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={(
                <Suspense fallback={<LoadingPage />}>
                    <AppContainer />
                </Suspense>
            )}>
                <Route path="/mynetwork" element={<MyNetworks />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/messaging" element={<Messaging />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="*" element={<div>not found</div>} />
        </Routes>
    </BrowserRouter>
);

export default RoutesComp;