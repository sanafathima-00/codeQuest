import React, { useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import LeftBar from '../../Components/Leftsidebar/LeftBar';
import { useParams } from 'react-router-dom';
import AboutPage from '../../Components/About/AboutPage';
import ProfileForm from '../UserProfile/ProfileForm';
import ProfileBio from '../UserProfile/ProfileBio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ slidein }) => {
    const { id } = useParams();
    const [Switch, setswitch] = useState(false);

    const users = useSelector((state)=>state.usersreducer)

    const currentprofile = users.find((user) => user._id === id);
    const currentuser = useSelector((state)=>state.currentuserreducer)

    return (
        <div className="home-container-1">
        <LeftBar slidein={slidein} />
        <div className="home-container-2">
          <section>
            <div className="user-details-container">
              <div className="user-details">
                <AboutPage backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">{currentprofile.name.charAt(0).toUpperCase()}</AboutPage>
                <div className="user-name">
                  <h1>{currentprofile?.name}</h1>
                  <p>
                    <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "} {moment(currentprofile?.joinedon).fromNow()}
                  </p>
                  <p>
                  <button className="edit-profile-btn" type='button' onClick={() => setswitch(true)}><FontAwesomeIcon icon={faPen} /> Edit Profile</button>
                  </p>
                </div>
              </div>
              {currentuser?.result?._id === id && ( 
                <button className="edit-profile-btn" type='button' onClick={() => setswitch(true)}><FontAwesomeIcon icon={faPen} /> Edit Profile</button>
              )}
            </div>
            <>
              {Switch ? (
                <ProfileForm currentuser={currentuser} setswitch={setswitch} />
              ) : (
                <ProfileBio currentprofile={currentprofile} />
              )}
            </>
          </section>
        </div></div>
    );
};

export default Profile;
