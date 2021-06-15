import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MenuTab from '../components/MenuTab';
import logo from '../img/simsimae_logo.png';

import '../css/tap.css';
import LoginMain from "../components/LoginMain";

const Mypage = () => {

  return(
    <>
      <div className='header'>
        <img className='logo_image' src={logo} alt="center_Logo" sizes="10px"/>
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