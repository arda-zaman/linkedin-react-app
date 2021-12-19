import React from 'react';
import LeftSide from './left-side';
import RightSide from './right-side';
import PageContent from './page-content';

const HomePage = () => {

    return (
        <div className="home-page-container">
            <LeftSide />
            <PageContent />
            <RightSide />
        </div>
    )
};

export default HomePage;