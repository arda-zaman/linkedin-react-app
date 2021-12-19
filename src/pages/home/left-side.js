import React from 'react';
import { Button, Card, Divider } from '../../fields';
import { ProfileImage } from '../../assets/files';
import { Link } from 'react-router-dom';
import { Icon } from '../../components';

const communityPanelItems = {
    recent: [
        { name: 'Frontend Developers - HTML', type: 'group' },
        { name: 'Zero to Global', type: 'event' },
        { name: 'coding', type: 'hashtag' },
        { name: 'github', type: 'hashtag' },
        { name: 'stackoverflow', type: 'hashtag' },
    ],
    Groups: [
        { name: 'Frontend Developers - HTML', type: 'group' },
        { name: 'React Developers', type: 'group' },
        { name: 'JavaScript', type: 'group' },
    ],
    'Followed Hashtags': [
        { name: 'coding', type: 'hashtag' },
        { name: 'github', type: 'hashtag' },
        { name: 'stackoverflow', type: 'hashtag' },
    ]
}

const LeftSide = () => {
    return (
        <div className="left-side">
            <Card id="profile-card" block>
                <img src={ProfileImage} className="radius-50" width={75} height={75} />
                <strong>Arda Zaman</strong>
                <span>Javascript Developer</span>

                <Divider />

                <div className="d-flex justify-between align-center">
                    <span>Who viewed your profile</span>
                    <mark>94</mark>
                </div>

                <div className="d-flex justify-between align-center">
                    <div>
                        <span>Connections</span>
                        <Link to="#" className="d-block strong">Manage your network</Link>
                    </div>
                    <mark>637</mark>
                </div>

                <Divider />

                <div className="try-premium">
                    <span>Access exclusive tools & insights</span>
                    <Link to="#"><strong>Try Premium for free</strong></Link>
                </div>

            </Card>

            <Card id="community-panel" className="mt-3" block>
                <div className="community-panel-content">
                    <small>Recent</small>

                    {Object.entries(communityPanelItems).map(([title, items], index) => (
                        <div className="group" key={index}>
                            {index !== 0 && <mark>{title}</mark>}

                            <ul>
                                {items.map(({ name, type }, idx) => (
                                    <li key={idx}>
                                        <Link to="#">
                                            <small className="icon">
                                                {type === 'group' && <Icon icon="faUsers" />}
                                                {type === 'event' && <Icon icon="faCalendarAlt" />}
                                                {type === 'hashtag' && <Icon icon="faHashtag" />}
                                            </small>

                                            <small>{name}</small>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <Divider />

                    <Button type="link" id="discover-more-button" block><Link to="#">Discover More</Link></Button>
                </div>
            </Card>
        </div>
    )
};

export default LeftSide;