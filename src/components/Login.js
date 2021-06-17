import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/modal.css";
import { useHistory } from "react-router";

const Login = ({errorMessage, isOpen, close, emailHandler, passwordHandler, loginClickHandler}) => {
  const history = useHistory();
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
                <button className="loginBtn" onClick={() => loginClickHandler()}>
                  로그인
                </button>
                <button className="loginEnd" onClick={() => history.push('/signup')}>
                  회원가입
                </button>
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