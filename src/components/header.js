import React, { useCallback } from 'react';
import { LogoSmall, ProfileImage } from '../assets/files';
import { NavLink, Link } from 'react-router-dom';
import { Divider, Badge } from '../fields';
import { useStore } from '../hooks';
import ProfileDropdown from './profile-dropdown';
import Icon from './icon';

const menuItems = [
    { text: 'Home', icon: 'faHome', count: 0, URL: '/' },
    { text: 'My Network', icon: 'faUserFriends', count: 0, URL: '/mynetwork' },
    { text: 'Jobs', icon: 'faBriefcase', count: 0, URL: '/jobs' },
    { text: 'Messaging', icon: 'faCommentDots', count: 2, URL: '/messaging' },
    { text: 'Notifications', icon: 'faBell', count: 4, URL: '/notifications' },
];

const Header = () => {
    const [store, updateStore] = useStore();
    const { ui } = store;

    const toggleProfileDropdown = useCallback(() => {
        updateStore('ui', 'profile_dropdown', !ui.profile_dropdown);
    }, [ui.profile_dropdown]);

    return (
        <header>
            <div className="container h-inherit">
                <div className="header-wrapper d-flex justify-between">
                    <div className="left-side">
                        <LogoSmall className="logo-icon" />
                        <div className="main-search-area">
                            <Icon icon="faSearch" />
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>

                    <nav className="right-side">
                        {menuItems.map((item, index) => (
                            <Badge count={item.count} key={index}>
                                <NavLink to={item.URL} className="menu-item">
                                    <div className="inner-menu-item">
                                        <Icon icon={item.icon} />
                                        <span>{item.text}</span>
                                    </div>
                                </NavLink>
                            </Badge>
                        ))}

                        <div className="menu-item" id="profile-dropdown-menu-item">
                            <div className="inner-menu-item" onClick={toggleProfileDropdown}>
                                <img src={ProfileImage} />
                                <span>Me <Icon icon="faCaretDown" /></span>
                            </div>

                            {ui.profile_dropdown && <ProfileDropdown />}
                        </div>

                        <Divider orientation="vertical" />

                        <div className="menu-item">
                            <div className="inner-menu-item">
                                <Icon icon="faTh" />
                                <span>Work <Icon icon="faCaretDown" /></span>
                            </div>
                        </div>

                        <div className="menu-item">
                            <div className="inner-menu-item">
                                <Link className="link-text" to="#">Try Premium for Free</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default Header;