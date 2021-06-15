import React, { useState } from "react";
import Login from "./Login";
import { GoogleLogout } from 'react-google-login';
import { withRouter, useHistory , Link} from "react-router-dom";
import axios from 'axios';
import Mypage from '../pages/Mypage';

const Nav = ({errorMessage, emailHandler, passwordHandler, loginClickHandler,
  openModal, isModalOpen, closeModal, handleResponseSuccess
  , accessToken, setIsLogin, setUserinfo, setIsGoogleLogin, isLogin, isGoogleLogin}) => { 
  
  const logOut = () => {
    axios.post('http://13.209.10.136/user/logout', 
      { accessToken } ,
      { 'Content-Type':'application/json', withCredentials: true }
    ).then((res) => {
      console.log('로그아웃성공:::')
      setIsLogin(false);
      moveMainpage();
      setUserinfo(null);
    })    
  }

  let history = useHistory();
  const moveMainpage = () => {
    history.push("/")
  }
  // 구글로그아웃
  const googleLogout = () => {
    setIsGoogleLogin(false);
    console.log('로그아웃성공:::')
  }
  //마이페이지로 이동
  let his = useHistory();
  const moveMypage = () => {
    handleResponseSuccess()
    his.push('/mypage')
    
  }

  return (
    <>
    
    {isLogin ? 
      <>
        <button onClick={() => moveMypage()} className='loginModalBtn' >mypage</button>
        <button onClick={() => logOut()} className='logoutBtn' >로그아웃</button>
        </>
      :
        <button onClick={() => openModal()} className='loginModalBtn' >로그인</button>
      }
        
      {/* <button onClick={() => logOut()} className='logoutBtn' >로그아웃</button> 
      isGoogleLogin ?
          
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={googleLogout}
        /> :<button onClick={() => openModal()} className='loginModalBtn' >로그인</button> */}
      
      
        <Login isOpen={isModalOpen} 
        close={closeModal} 
        setIsGoogleLogin={setIsGoogleLogin}
        isGoogleLogin={isGoogleLogin}
        emailHandler={emailHandler} 
        passwordHandler={passwordHandler} 
        loginClickHandler={loginClickHandler}
        errorMessage={errorMessage} />

    </>
  )
}
 
export default withRouter(Nav);