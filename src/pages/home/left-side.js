import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useStore } from '../../hooks';
import { Button, Card, Divider } from '../../fields';
import { Link } from 'react-router-dom';
import { Icon } from '../../components';

const LeftSide = ({
    isFixed
}) => {
    const [store] = useStore();
    const [communityData, setCommunityData] = useState([]);

    const { user = {} } = store;

    useEffect(() => {
        const req1 = axios.get('http://localhost:3000/recentActivities');
        const req2 = axios.get('http://localhost:3000/groups');
        const req3 = axios.get('http://localhost:3000/followedHashtags');

        Promise.all([req1, req2, req3])
            .then(([recentActivities, group, followedHashtags]) => {
                setCommunityData([
                    recentActivities.data,
                    group.data,
                    followedHashtags.data,
                ]);
            })
            .catch((err) => console.log('Error occurred', err))
    }, []);

    return (
        <div className="left-side">
            <Card id="profile-card" block>
                <img src={user.photo} className="radius-50" width={75} height={75} />
                <strong>{user.fullname}</strong>
                <span>{user.role}</span>

                <Divider />

                <div className="d-flex justify-between align-center">
                    <span>Who viewed your profile</span>
                    <mark>{user.viewedProfileCount}</mark>
                </div>

                <div className="d-flex justify-between align-center">
                    <div>
                        <span>Connections</span>
                        <Link to="#" className="d-block strong">Manage your network</Link>
                    </div>
                    <mark>{user.connectionCount}</mark>
                </div>

                <Divider />

                <div className="try-premium">
                    <span>Access exclusive tools & insights</span>
                    <Link to="#"><strong>Try Premium for free</strong></Link>
                </div>

            </Card>

            <Card id="community-panel" className={`mt-3 ${isFixed ? '--fixed' : ''}`} block>
                <div className="community-panel-content">
                    <small>Recent</small>

                    {communityData.map(({ title, items }, index) => (
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

LeftSide.propTypes = {
    isFixed: PropTypes.bool
};

LeftSide.defaultProps = {
    isFixed: false
}

export default LeftSide;