import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import LeftSide from './left-side';
import RightSide from './right-side';
import PageContent from './page-content';

const HomePage = () => {
    const [isLeftSideFixed, setIsLeftSideFixed] = useState(false);
    const [isRightSideFixed, setIsRightSideFixed] = useState(false);
    const initialOffsets = useRef();

    // Used ref due to closure.
    useEffect(() => {
        setTimeout(() => {
            const communityPanelOffset = document.querySelector('#community-panel').offsetTop;
            const rightSideNavOffset = document.querySelector('.right-nav').offsetTop;

            initialOffsets.current = { communityPanelOffset, rightSideNavOffset };
        }, 0);
    }, []);

    useLayoutEffect(() => {
        const onScroll = () => {
            if (!initialOffsets.current) {
                return;
            }

            // Left Side
            if (window.scrollY < (initialOffsets.current.communityPanelOffset - 100)) {
                setIsLeftSideFixed(false);
            } else {
                setIsLeftSideFixed(true);
            }

            // Right Side
            if (window.scrollY < initialOffsets.current.rightSideNavOffset - 100) {
                setIsRightSideFixed(false);
            } else {
                setIsRightSideFixed(true);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isLeftSideFixed, isRightSideFixed]);

    return (
        <div className="home-page-container">
            <LeftSide isFixed={isLeftSideFixed} />
            <PageContent />
            <RightSide isFixed={isRightSideFixed} />
        </div>
    )
};

export default HomePage;