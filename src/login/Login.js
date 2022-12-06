
import React, {useState, useEffect} from 'react';
import "./Login.css"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Axios from 'axios';
let a="/";
const Login = () => {
  
  const history = useNavigate();
  
  const fun = () => {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');
    const password=urlParams.get('password');
   
    if (username==='tanduong194@gmail.com' && password==='123456'){
      a="/MangaTracker";
      
    }
  }
  useEffect(()=>{
    
    history(a)
    
  },[a])
  return (
    <div classnmae="body123">
    <div className='main-holder'>
    <h1 id="login-header">Login</h1>
    <div id="login-error-msg-holder">
    <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div>
    <form class="login" action="">
  <div><input type="text" placeholder="UserName" id="manga" name="username"/></div>
  <div><input type="text" placeholder="Password" id="manga" name="password"/></div>
  <button onClick={fun()}  >Submit</button>
  </form>
  </div>
  </div>
  )
}

export default Login