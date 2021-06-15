import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Nav from '../components/Nav';
import logo from '../img/simsimae_logo.png';


const LoginMain = ({isGoogleLogin}) => {
  
  if(isGoogleLogin === false){
    return(
      <>
        <div className='header'>
          <Link to='/'>
            <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" />
          </Link>
          <Nav />
        </div>
  
        <div className="body">
          <h1>일반 로그인했땅!</h1>
        </div>
  
        <div className="footer">
          <p className='copyright'>Copyright 2021. SONGYUIJO inc. all rights reserved.</p>
        </div>
      </>
    )
  }else{
    return(
      <>
        <div className='header'>
          <Link to='/'>
            <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" />
          </Link>
          <Nav />
        </div>
  
        <div className="body">
          <h1>구글 로그인했땅!</h1>
        </div>
  
        <div className="footer">
          <p className='copyright'>Copyright 2021. SONGYUIJO inc. all rights reserved.</p>
        </div>
      </>
    )
  }
  
}

export default withRouter(LoginMain);