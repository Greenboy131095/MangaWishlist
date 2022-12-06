import React from 'react'
import './Profile.css'
import Wishlist from '../Wishlist/Wishlist.js'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
const chat = ({name,Occupation, profilePic}) => {
 

  return (
    <div class="card">
     
        
         <img src={profilePic}/>
         <div className="information">
          Name: {name}
          <br></br>
          Occupation: {Occupation}
         </div>
         
  <p class="title">CEO & Founder</p>
  <p>Harvard University</p>
 

  
<Wishlist/>
</div>
  )
}

export default chat