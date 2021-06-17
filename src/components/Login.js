import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

import "../css/modal.css";
const Login = ({errorMessage, isOpen, close, emailHandler, passwordHandler, loginClickHandler}) => {

  const [googleuseremail, setGoogleuseremail ] = useState('');
  const [googleusername, setGoogleusername ] = useState('');
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [movePage, setMovePage ] = useState(false);

  let history = useHistory();

  return (
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
                <div className="loginEnd">
                  <Link to='/signup'>일반 회원가입</Link>
                </div>
                {errorMessage === '' ? <div className="alert-box"></div> :
                  <div className="alert-box">이메일과 비밀번호를 확인해주세요</div>
                  }
              </h1>
            </div>
          </div>
        </div>
      ) 
      : 
      null} 
    </>
  );
}



export default withRouter(Login);