import React , { useState} from "react";
import { withRouter } from "react-router-dom";
import logo from '../img/simsimae_logo.png';
import MenuTab from "./MenuTab";

const Mypage = ({userinfo}) => {
  
  return(
    <>
      <center>
        <img className='logo' src={logo}/>
      </center>
     
      <MenuTab userinfo={userinfo}/>
      
    </>
  )
}


export default withRouter(Mypage);