
import Profile from './Profile/Profile.js'
import  { React,useState,useEffect}from 'react';


const Profiles = () => {
  const [user,setUser]=useState([]);
  
  return (
    <div className='chats'>
      <Profile 
      name="Mack" 
      Occupation="Writer"
      profilePic="https://upload.wikimedia.org/wikipedia/en/9/99/Solo_Leveling_Webtoon.png"/>
     
      </div>
  )
}

export default Profiles