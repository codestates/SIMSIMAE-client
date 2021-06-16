import React, { useState } from "react";
import { Switch, Route, Link, withRouter, useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import Signup from '../pages/Signup'
import LikeForm from "../pages/LikeForm";
import axios from 'axios';

import "../css/modal.css";

const Login = ({errorMessage, isOpen, close, emailHandler, passwordHandler, loginClickHandler}) => {

  const [googleuseremail, setGoogleuseremail ] = useState('');
  const [googleusername, setGoogleusername ] = useState('');
  const [googleaccesstoken, setGoogleaccesstoken ] = useState('');

  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [movePage, setMovePage ] = useState(false);

  let history = useHistory();

   // Google Login
   const responseGoogle = (res) => {
    setIsGoogleLogin(true);
    console.log('성공:::',res)
    setGoogleuseremail(res.profileObj.email)
    setGoogleusername(res.profileObj.email)
    setGoogleaccesstoken(res.accessToken)
    completeGooleLogin()  
    setMovePage(true);
  }


   //google login success 수정중 

   const completeGooleLogin = () => {

    axios.post('http://www.simsimae-server.site/user/googlelogin',
    { email : googleuseremail },
    {'Content-Type':'application/json', withCredentials: true })
    .then(res => {
     console.log('테스트',res)
    })
  }

// Login Fail
  const responseFail = (err) => {
    console.error('에러:::',err);
  }

  return (
    <> 
    { movePage ? 
      <>
      { history.push({
         pathname : '/likeform',
         state : {email: googleuseremail, name: googleusername}
       })}
      </>
       : 
      <>
       {isOpen ? (

        <div className="modal">
          <div>
            <div className="loginModal">
              <span className="close" onClick={() => close()}>&times;
              </span>
              <h1 className="modalContents" >
                로그인
                <input
                  name="email"
                  className="loginId"
                  type="text"
                  placeholder="아이디"
                  onChange={(e) => emailHandler(e)}
                />

                <input
                  name="password"
                  className="loginPw"
                  type="password"
                  placeholder="비밀번호"
                  onChange={(e) => passwordHandler(e)}
                />

                <div className="loginMid">
                  <div className="autoLogin">아이디/비밀번호 찾기</div>
                </div>

                <button className="loginBtn" onClick={() => loginClickHandler()}>
                  로그인
                </button>

                <GoogleLogin
                  className='google'
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseFail}
                  cookiePolicy={'single_host_origin'}
                />

                <div className="loginEnd">
                  <Link to='/signup'>일반 회원가입</Link>
                </div>

                {errorMessage === '' ? <div className="alert-box"></div> :
                  <div className="alert-box">이메일과 비밀번호를 입력하세요</div>
                  }
              </h1>
            </div>
          </div>
        </div>
      ) : null} 
      </>
  } </>
  );
}


export default withRouter(Login);