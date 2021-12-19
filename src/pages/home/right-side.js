import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from '../../fields';
import { Icon } from '../../components';
import { Logo } from '../../assets/files';

const navItems = ['About', 'Accessibility', 'Help Center', 'Privacy & Terms', 'Ad Choices', 'Advertising', 'Business Services'];

const RightSide = ({
    isFixed
}) => {
    const [suggestedPersons, setSuggestedPersons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/friendSuggestions')
            .then((resp) => resp.data)
            .then((resp) => setSuggestedPersons(resp))
            .catch((err) => console.error('Error Occurred', err))
    }, []);

    return (
        <div className="right-side">
            <Card
                id="add-to-your-feed-card"
                title="Add to your feed"
                icon={<Icon icon="faInfoCircle" />}
                block
            >
                <div className="people-list">
                    {suggestedPersons.map((person, idx) => (
                        <div className="person d-flex" key={idx}>
                            <img src={person.photo} className="radius-50" width={40} height={40} />

                            <div className="person-info">
                                <strong>{person.fullname}</strong>
                                <small className="low">{person.role}</small>
                                <Button type="secondary" shape="circle">
                                    <Icon icon="faPlus" />
                                    <span>Follow</span>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <Button className="view-all-button" type="link">View all recommendatations <Icon icon="faArrowRight" /></Button>
            </Card>

            <section className={`right-nav ${isFixed ? '--fixed' : ''}`}>
                <ul className="d-flex justify-around flex-wrap">
                    {navItems.map((navItem, idx) => (
                        <li key={idx}>
                            <Link to="#" className="low link">{navItem}</Link>
                        </li>
                    ))}
                </ul>

                <div className="copyright">
                    <Logo color="#0A66C2" className="logo" />
                    <small>LinkedIn Corporation © 2021</small>
                </div>
            </section>
        </div>
    )
};


RightSide.propTypes = {
    isFixed: PropTypes.bool
};

RightSide.defaultProps = {
    isFixed: false
}

export default RightSide;