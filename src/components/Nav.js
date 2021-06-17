import React ,{} from "react";
import Login from "./Login";
import { GoogleLogout } from 'react-google-login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter, useHistory , Link, useLocation} from "react-router-dom";
import axios from 'axios';
import logo from '../img/simsimae_logo.png';

const Nav = ({setUserinfo, openMypage, errorMessage, emailHandler, passwordHandler, loginClickHandler,
  openModal, isModalOpen, closeModal, accessToken, setIsLogin, setIsGoogleLogin, isLogin, isGoogleLogin, handleResponseSuccess}) => { 

  let history = useHistory();
  
  const logOut = () => {
    axios.post('http://www.simsimae-server.site/user/logout', 
      { accessToken } ,
      { 'Content-Type':'application/json', withCredentials: true }
    ).then((res) => {
      console.log('로그아웃성공:::')
      setIsLogin(false);
      setUserinfo(null);
      history.push("/")
    })    
  }
  const clickLogo = () => {
    window.location.replace("/");
  }
  const userClickLogo = () => {

  }

  // 구글로그아웃
  const googleLogout = () => {
    setIsGoogleLogin(false);
    console.log('로그아웃성공:::')
  }


  return (
    <>
      {
      !isLogin && !openMypage ?  
      <>
        <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" onClick={() => clickLogo()} />
        <button onClick={() => openModal()} className='loginModalBtn' >로그인</button>
      </>
      : isLogin && !openMypage ? 
      <>
        <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" onClick={() => clickLogo()}  />
        <button onClick={() => handleResponseSuccess()} className='mypageBtn' >mypage</button>
        <button onClick={() => logOut()} className='loginModalBtn' >로그아웃</button>
      </>
      : 
      <>
        <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" />
      </>
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