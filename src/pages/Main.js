import React, { useState } from "react";
import { withRouter,Link  } from "react-router-dom";
import Nav from '../components/Nav';
import logo from '../img/simsimae_logo.png';
import $ from "jquery";
import axios from 'axios';
import LoginMain from '../components/LoginMain';
import Mypage from "../components/Mypage";

const Main = () => {
  
  const [email , setEmail ] = useState('');
  const [password , setPassword ] = useState('');
  const [accessToken , setAccessToken] = useState('');
  const [isLogin , setIsLogin ] = useState(false);
  const [userinfo , setUserinfo] = useState(null);
  const [errorMessage , setErrorMessage ] = useState('');
  const [isModalOpen , setisModalOpen] = useState(false);
  const [openMypage, setOpenMypage] = useState(false);

  const [toggleOn, setToggleOn ] = useState();
  const [isGoogleLogin, setIsGoogleLogin ] = useState(false);
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
  // 일반 로그인 버튼 클릭 시 로그인
  const loginClickHandler = () => {
    if(email ===''|| password ===''){
      setErrorMessage('이메일과 비밀번호를 입력하세요')
    }else{
      axios.post('http://13.209.10.136/user/login',
      { email, password } ,
      {'Content-Type':'application/json', withCredentials: true }
      ).then((res) => {
        console.log('로그인성공!!!',res)
        if(res.status !== 200) {
          const message = '로그인 안됌! 물러나.';
          return setErrorMessage(message)
        }
        let acTokenPath = res.data.data.accessToken;
        console.log(res.data.data)
        setAccessToken(`Bearer ${acTokenPath}`);
        setIsLogin(true);
      })
    }
  }
  // login 후 회원정보 받아오기
  const handleResponseSuccess = () => {
    console.log(accessToken)
    axios.get('http://13.209.10.136/user/info',
    { headers : {authorization: accessToken , withCredentials: true}})
    .then(res => {
      console.log('user 정보 받아오기 성공!!!',res)
      if(res.status !== 200) {
        const message = 'access token 만료. refresh token 이용바람';
        return setErrorMessage(message)
      }
      const getData = res.data;
      setUserinfo(getData);
      // 마이페이지로 이동
      setOpenMypage(true)
    }).catch(err => console.log(err));
  }
  // qr요청 핸들러
  const qrRequestHandler = () => {
    return axios.get('http://13.209.10.136/url')
    .then((res) => {
      setQrImg(res.data)
    })
  }; 
  const userQrRequestHander = () => {
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
        <Nav
          setUserinfo={setUserinfo}
          openMypage={openMypage}
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          isGoogleLogin={isGoogleLogin}
          setIsGoogleLogin={setIsGoogleLogin}
          accessToken={accessToken}
          errorMessage={errorMessage}
          emailHandler={emailHandler} 
          passwordHandler={passwordHandler} 
          loginClickHandler={loginClickHandler}
          handleResponseSuccess={handleResponseSuccess}
          />
        </div>  
      { 
        !isLogin && !openMypage ?  // 로그인 안했고, 마이페이지 버튼도 안눌렀을때
        <div className="body">
          <div className='toggle-div'>
            <input className='toggle-input' type="checkbox" id="switch" />
            <label className='toggle-label'htmlFor="switch"></label>
          </div>
          <div className='logoRender'>
            <div><img className='center-logo' src={logo} alt=""></img></div>
            <div><button onClick={() => revealQr()} className = "qrBtn">Click!</button></div>
          </div>
          <div className="qrRender">
            <div className='center-qr'>
              <img src={qrImg} alt=''/>
              <a href='http://www.naver.com' target='_blank'></a>
            </div>
          </div>
          <div className='reBtnDiv'>
            <button onClick={() => qrRequestHandler()} className="refreshBtn">
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>
        : isLogin && !openMypage ? 
        <LoginMain closeModal={closeModal} /> 
        : 
         <Mypage userinfo={userinfo} /> 
      }

      <div className="footer">
        <p className='copyright'>Copyright 2021. SONGYUIJO inc. all rights reserved.</p>
      </div>
    </div>
  );
}

export default withRouter(Main); 