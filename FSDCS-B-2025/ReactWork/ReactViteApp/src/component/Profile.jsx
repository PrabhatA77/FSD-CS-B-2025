import React from 'react';
import './Profile.css';


const Profile = ({data}) => {
  return (
    <div className='profileBox'>
        <img src={data.profilePic} alt="profilePic" />
        <div className="details">
            <h2>Profile Page</h2>
            <h3>Name : {data.myName}</h3>
            <h3>Branch : {data.branch}</h3>
            <h3>Section : {data.section}</h3>
            <h3>College : {data.college}</h3>
        </div>
    </div>
  )
}

export default Profile