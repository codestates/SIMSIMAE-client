import React, { useState } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import Nav from '../components/Nav';
import logo from '../img/simsimae_logo.png';
import $ from "jquery";
import axios from 'axios';
import NoneUserQr from "../components/NoneUserQr";

const Main = () => {

  const [email , setEmail ] = useState('');
  const [password , setPassword ] = useState('');
  const [errorMessage , setErrorMessage ] = useState('');
  const [qrImg , setQrImg ] = useState(null);
  const [isLogin , setIsLogin ] = useState(false);
  const [userinfo , setUserinfo] = useState(null);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }; 
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };   
  const qrRequestHandler = () => {
    return axios.get('http://13.209.10.136/url')
      .then((res) => {
        setQrImg(res.data)
      })
  }; 
  const revealQr = () => {
    $(".logoRender").css('display', 'none');
    $(".center-qr").css('display', 'block');
    $(".refreshBtn").css('display', 'block');
    $(".qrRender").css('display','block');
    qrRequestHandler()
  }

  // login 후 회원정보 받아오기
  const handleResponseSuccess = () => {
    console.log('handleResponseSuccess실행')
    axios.get('http://13.209.10.136/user/info')
     .then(res => {
       console.log('user 정보 받아오기 성공!!!')
       setUserinfo(res.data);
     }).catch(err => console.log(err));
   }

   // 일반 로그인 버튼 클릭 시 로그인
  let history = useHistory();
  const loginClickHandler = () => {
    if(email ===''|| password ===''){
      setErrorMessage('이메일과 비밀번호를 입력하세요')
    }else{
      axios.post('http://13.209.10.136/user/login',
      { email, password } ,
      {'Content-Type':'application/json', withCredentials: true }
      ).then(res => {
        console.log('로그인성공!!!',res)
        setIsLogin(true);
        handleResponseSuccess();
        history.push("/loginMain");
      })
    }
  }; 

  return (
    <div>
      <div className='header'>
        { isLogin ? 
          <Link to='/loginMain'>
            <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" />
          </Link> :
          <Link to='/'>
            <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" />
          </Link>
        }
        <Nav emailHandler={emailHandler} 
        passwordHandler={passwordHandler} 
        loginClickHandler={loginClickHandler} 
        errorMessage={errorMessage}/>
      </div>
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

      <div className="footer">
          <p className='copyright'>Copyright 2021. SONGYUIJO inc. all rights reserved.</p>
      </div>
    </div>
  );
}

export default withRouter(Main);