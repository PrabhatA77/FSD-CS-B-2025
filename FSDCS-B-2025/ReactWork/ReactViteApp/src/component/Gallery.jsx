import React from 'react'
import Profile from './Profile';
import './Gallery.css';
import pic from './images/Professional-Vasu.png';

const Gallery = () => {

  const student = 
  [
    {
    profilePic:pic,
    myName:"Prabhat Singh Rathore",
    branch:'CS',
    section:'B',
    college:'ABES Engineering College'
  },
    {
    profilePic:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    myName:"Vinay Kumar",
    branch:'CS',
    section:'B',
    college:'ABES Engineering College'
  },
    {
    profilePic:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
    myName:"Manas Kumar",
    branch:'CS',
    section:'B',
    college:'ABES Engineering College'
  },

]

  return (
    <div className='galleryContainer'>
      {/* <Profile name="Prabhat Singh Rathore" branch="CS" section="B" college="ABES Engineering College"/>
      <Profile name="Vinay Kumar" branch="CS" section="B" college="ABES Engineering College"/>
      <Profile name="Manas Kumar" branch="CS" section="B" college="ABES Engineering College"/> */}

      {/* <Profile data={student}/> */}

      {
        student.map((ele,index)=>{
          return <Profile key={index} data={ele}/>
        })
      }
    </div>
  )
}

export default Gallery