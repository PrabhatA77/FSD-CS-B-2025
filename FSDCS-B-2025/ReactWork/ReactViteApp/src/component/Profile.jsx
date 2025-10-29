import React from 'react';
import './Profile.css';
import profilePic from './images/Professional-Vasu.png';

const Profile = () => {
  return (
    <div className='profileBox'>
        <img src={profilePic} alt="profilePic" />
        <div className="details">
            <h2>Name : Prabhat Singh Rathore</h2>
            <h2>Branch : CS-B</h2>
            <h2>College : ABES Engineering College</h2>
        </div>
    </div>
  )
}

export default Profile