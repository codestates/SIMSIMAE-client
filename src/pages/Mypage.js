import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import MenuTab from '../components/MenuTab';
import Nav from '../components/Nav';
import logo from '../img/simsimae_logo.png';

import '../css/tap.css';

const Mypage = () => {
  
  return(
    <>
      <div className='header'>
        <Link to='/'>
          <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" />
        </Link>
        <Nav />
      </div>
      <center>
        <img className='logo' src={logo}/>
      </center>
      <MenuTab />
      <div className="footer">
        <p className='copyright'>Copyright 2021. SONGYUIJO inc. all rights reserved.</p>
      </div>
    </>
  )
}


export default withRouter(Mypage);