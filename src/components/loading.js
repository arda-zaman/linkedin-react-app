import React from 'react';
import { Logo } from '../assets/files';

const LoadingScreen = () => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Logo color="#0A66C2" />
        </div>
    )
};

export default LoadingScreen;