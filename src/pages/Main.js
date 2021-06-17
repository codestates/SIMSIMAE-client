import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Nav from '../components/Nav';
import logo from '../img/simsimae_logo.png';
import $ from "jquery";
import axios from 'axios';
import Mypage from "../components/Mypage";
import LoginMain from '../components/LoginMain';

const Main = () => {
  const history = useHistory();
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
  
  // 이메일 상태값 변경
  function emailHandler(e) {
    setEmail(e.target.value);
  }; 
  // 비밀번호 상태값 변경
  function passwordHandler(e) {
    setPassword(e.target.value);
  };
  // qr요청 핸들러
  const qrRequestHandler = () => {
    return axios.get('http://www.simsimae-server.site/url')
    .then((res) => {
      setQrImg(res.data)
      console.log('뭐야왱')
    })
  }; 
  // 일반 로그인 버튼 클릭 시 로그인
  const loginClickHandler = () => {
    if(email ===''|| password ===''){
      setErrorMessage('이메일과 비밀번호를 입력하세요')
    }else{
      axios.post('http://www.simsimae-server.site/user/login',
      { email, password } ,
      {'Content-Type':'application/json', withCredentials: true }
      ).then((res) => {
        console.log('로그인성공!!!',res)
        let acTokenPath = res.data.data.accessToken;
        console.log(res.data.data)

        setAccessToken(`Bearer ${acTokenPath}`);
        setIsLogin(true);
        qrRequestHandler();
        closeModal()      
      })
      .catch(err => {
          const message = '로그인 안됌! 물러나.';
          return setErrorMessage(message)
      })
    }
  }
  // login 후 회원정보 받아오기
  const handleResponseSuccess = () => {
    console.log(accessToken)
    axios.get('http://www.simsimae-server.site/user/info',
    { headers : {authorization: accessToken , withCredentials: true}})
    .then(res => {
      console.log('user 정보 받아오기 성공!!!', res)
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
  // const getLoginStatus = () => {
  //   if(window.sessionStorage.getItem('id')){
  //     setIsLogin(true)
  //   }else{
  //     setIsLogin(false);
  //   }
  // }
  
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
          <div className='logoRender'>
           <div><img className='center-logo' src={logo} alt="" /></div>
            <button onClick={() => revealQr()} className = "qrBtn">Click!</button>
          </div>
          <div className="qrRender">
            <div className='center-qr'>
              <img src={qrImg} alt=''/>
              <a target='_blank'></a>
            </div>
          </div>
          <div className='reBtnDiv'>
            <button onClick={() => qrRequestHandler()} className="refreshBtn">
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>
        : isLogin && !openMypage ? // 로그인 안했고, 마이페이지 버튼도 안눌렀을때
         <>

          <LoginMain 
            closeModal={closeModal}
            qrImg={qrImg}
            setQrImg={setQrImg}
            qrRequestHandler={qrRequestHandler}
            accessToken={accessToken}
            userinfo={userinfo}
            setUserinfo={setUserinfo}
           /> 

         </>
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