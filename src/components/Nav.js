import React, { useState } from "react";
import Login from "./Login";
import { GoogleLogout } from 'react-google-login';

import { withRouter, useHistory } from "react-router-dom";

const Nav = ({errorMessage, emailHandler, passwordHandler, loginClickHandler}) => { 
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen , setisModalOpen] = useState(false);
  // 모달 열기
  const openModal = () => {
    setisModalOpen(true);
  };
  // 모달 닫기
  const closeModal = () => {
    setisModalOpen(false);
  };
  const logOut = () => {
    setIsLogin(false)
    moveMainpage();
    console.log('로그아웃성공:::')
  }
  const moveMainpage = () => {
    history.push("/")
  }
  // 구글로그아웃
  const googleLogout = () => {
    console.log('로그아웃성공:::')
  }
  //마이페이지로 이동
  let history = useHistory();
  const moveMypage = () => {
    history.push("/mypage");
  }

  return (
    <><button onClick={() => moveMypage()} className='loginModalBtn' >mypage</button>
    {isLogin ? 
        <button onClick={() => logOut()} className='logoutBtn' >로그아웃</button>:
        <button onClick={() => openModal()} className='loginModalBtn' >로그인</button>
      }
      
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