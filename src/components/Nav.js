import React, { useState } from "react";
import Login from "./Login";
import { GoogleLogout } from 'react-google-login';
import { withRouter, useHistory } from "react-router-dom";
import axios from 'axios';

const Nav = ({errorMessage, emailHandler, passwordHandler, loginClickHandler,openModal, isModalOpen, closeModal, handleResponseSuccess}) => { 

 
  // 구글로그아웃
  const googleLogout = () => {
    console.log('로그아웃성공:::')
  }
  //마이페이지로 이동
  let history = useHistory();
  const moveMypage = () => {
    handleResponseSuccess()
    history.push("/mypage");
  }

  return (
    <>
      <button onClick={() => moveMypage()} className='loginModalBtn' >mypage</button>
      <button onClick={() => openModal()} className='loginModalBtn' >로그인</button>
      <Login isOpen={isModalOpen} 
      close={closeModal} 
      emailHandler={emailHandler} 
      passwordHandler={passwordHandler} 
      loginClickHandler={loginClickHandler}
      errorMessage={errorMessage} />

      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={googleLogout}
      />
    </>
  )
}
 
export default withRouter(Nav);