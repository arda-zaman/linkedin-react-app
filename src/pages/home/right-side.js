import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from '../../fields';
import { Icon } from '../../components';
import { ProfileImage, Logo } from '../../assets/files';

const navItems = ['About', 'Accessibility', 'Help Center', 'Privacy & Terms', 'Ad Choices', 'Advertising', 'Business Services'];

const RightSide = ({
    isFixed
}) => {

    return (
        <div className="right-side">
            <Card
                id="add-to-your-feed-card"
                title="Add to your feed"
                icon={<Icon icon="faInfoCircle" />}
                block
            >
                <div className="people-list">
                    {Array.from(Array(3)).map((person, idx) => (
                        <div className="person d-flex" key={idx}>
                            <img src={ProfileImage} className="radius-50" width={40} height={40} />

                            <div className="person-info">
                                <strong>Aylin Zaman</strong>
                                <small className="low">UI & UX Designer</small>
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