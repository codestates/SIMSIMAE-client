import React, { useState } from "react";
import { withRouter, Link,  } from "react-router-dom";
import Nav from '../components/Nav';
import logo from '../img/simsimae_logo.png';
import $ from "jquery";
import axios from 'axios';

import NoneUserQr from "../components/NoneUserQr";
import LoginMain from '../components/LoginMain';


const Main = () => {
  
  const [email , setEmail ] = useState('');
  const [password , setPassword ] = useState('');
  const [token , setToken ] = useState('Bearer ');
  const [errorMessage , setErrorMessage ] = useState('');
  const [isLogin , setIsLogin ] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin ] = useState(false);
  const [userinfo , setUserinfo] = useState(null);
  const [isModalOpen , setisModalOpen] = useState(false);
  const [qrImg , setQrImg ] = useState(null);
  const [userQrImg, setUserQrImg ] = useState(null);
  // 이메일 상태값 변경
  function emailHandler(e) {
    setEmail(e.target.value);
  }; 
  // 비밀번호 상태값 변경
  function passwordHandler(e) {
    setPassword(e.target.value);
  };   
  // login 후 회원정보 받아오기
  function handleResponseSuccess() {
    console.log('handleResponseSuccess실행')
    console.log('token:::',token)
    axios.get('http://13.209.10.136/user/info',
    { headers : {authorization: token , withCredentials: true}})
    .then(res => {
      console.log('user 정보 받아오기 성공!!!',res)
      setUserinfo(res.data);
    }).catch(err => console.log(err));
  }
  
  // 일반 로그인 버튼 클릭 시 로그인
  function loginClickHandler() {
    if(email ===''|| password ===''){
      setErrorMessage('이메일과 비밀번호를 입력하세요')
    }else{
      axios.post('http://13.209.10.136/user/login',
      { email, password } ,
      {'Content-Type':'application/json', withCredentials: true }
      ).then((res) => {
        console.log('로그인성공!!!',res)
        let acTokenPath = res.data.data;
        setToken(token + acTokenPath.accessToken);
        setIsLogin(true);
      })
    }
  }
  // qr요청 핸들러
  const qrRequestHandler = () => {
    return axios.get('http://13.209.10.136/url')
    .then((res) => {
      setQrImg(res.data)
    })
  }; 
  const userQrRequestHandler = () => {
    return axios.get('http://13.209.10.136/url/userurl')
    .then((res) => {
      setUserQrImg(res.data)
    })
  }
  // 토글 스테이트 핸들러
  
  // qr다시 받기 핸들러
  const revealQr = () => {
    $(".logoRender").css('display', 'none');
    $(".center-qr").css('display', 'block');
    $(".refreshBtn").css('display', 'block');
    $(".qrRender").css('display','block');
    qrRequestHandler()
  }
  // 모달 열기
  const openModal = () => {
    setisModalOpen(true);
  };
  // 모달 닫기
  const closeModal = () => {
    setisModalOpen(false);
  };

   
  return (
    <div>
      <div className='header'>
        <Link to='/'>
          <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" />
        </Link> 
    
        <Nav 
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          isGoogleLogin={isGoogleLogin}
          setIsGoogleLogin={setIsGoogleLogin}
          setUserinfo={setUserinfo}
          accessToken={token}
          errorMessage={errorMessage}
          emailHandler={emailHandler} 
          passwordHandler={passwordHandler} 
          loginClickHandler={loginClickHandler}
          handleResponseSuccess={handleResponseSuccess}
        />

      </div>

      { isLogin ? 
      <>
      <Link to='/'></Link>
        <LoginMain 
          closeModal={closeModal} 
          handleResponseSuccess={handleResponseSuccess}
          qrImg={qrImg} 
          qrRequestHandler={qrRequestHandler}
          setQrImg={setQrImg}
          userQrRequestHandler={userQrRequestHandler}
          userQrImg={userQrImg}
          setUserQrImg={setUserQrImg}
        /> 
      
      </>
        :
        <div className="body">
            <div className='logoRender'>
              <div><img className='center-logo' src={logo} alt=""></img></div>
              <div><button onClick={() => revealQr()} className = "qrBtn">Click!</button></div>
            </div>
            <div className="qrRender">
              <div className='center-qr'>
              <img src={qrImg} alt=''/>
              <a href='http://www.naver.com' target='_blank'>
              </a>
              </div>
              <div className='reBtnDiv'>
              <button onClick={() => qrRequestHandler()} className="refreshBtn">
                <i className="fas fa-sync-alt"></i>
              </button>
            </div>
          </div>
        </div>
      }

      <div className="footer">
        <p className='copyright'>Copyright 2021. SONGYUIJO inc. all rights reserved.</p>
      </div>
      </div>
  );
}

export default withRouter(Main); 