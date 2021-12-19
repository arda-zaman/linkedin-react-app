import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileImage } from '../assets/files';
import { Divider, Button } from '../fields';

const menuItems = {
    account: [
        { text: 'Settings & Privacy', URL: '#' },
        { text: 'Help', URL: '#' },
        { text: 'Language', URL: '#' },
    ],
    manage: [
        { text: 'Posts & Activity', URL: '#' },
        { text: 'Job Posting Account', URL: '#' },
    ]
}

const ProfileDropdown = () => {
    return (
        <div className="profile-dropdown">
            <div className="info-summary d-flex align-center">
                <img src={ProfileImage} className="radius-50" width={75} height={75} />
                <div className="text-side">
                    <strong>Arda Zaman</strong>
                    <span>Javascript Developer</span>
                </div>
            </div>

            <Link to="#" className="mt-2 d-block">
                <Button block shape="circle">View Profile</Button>
            </Link>

            <Divider />

            {Object.entries(menuItems).map(([title, items], idx) => (
                <div className="menu-group" key={idx}>
                    <strong>{`${title.charAt(0).toUpperCase()}${title.slice(1)}`}</strong>

                    <div className="menu-items">
                        {items.map((item, index) => (
                            <Link to={item.URL} key={index} className="menu-item">
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

            <Divider />

            <div className="menu-item">
                <span>Sign Out</span>
            </div>
        </div>
    );
};

export default ProfileDropdown;