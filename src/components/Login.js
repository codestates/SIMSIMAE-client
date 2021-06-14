import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

import axios from 'axios';
import "../css/modal.css";

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    }
    this.loginHandler = this.loginHandler.bind(this);
    this.loginClickHandler = this.loginClickHandler.bind(this);
    this.HandlegGoogleSignUp = this.HandlegGoogleSignUp.bind(this);
   this.responseFail = this.responseFail.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);

  }


  loginHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }; 

  loginClickHandler = () => {
    const { email, password } = this.state;

    if(email ===''|| password ===''){
      this.setState({errorMessage : '이메일과 비밀번호를 입력하세요'})

    }else{
      axios.post('https://localhost:4000/signin',
      { email, password } ,
      {'Content-Type':'application/json', withCredentials: true }
      ).then(res => {
        this.props.handleResponseSuccess();
      })
    }
  }; 

  HandlegGoogleSignUp = () => {

  }


  // Google Login
  responseGoogle = (res) => {
    console.log('성공:::',res)
  }

  // Login Fail
  responseFail = (err) => {
      console.error('에러:::',err);
  }

  
  render() {
    const { isOpen, close } = this.props;

    return (
      <>
        {isOpen ? (  
      
          <div className="modal">
            <div onClick={() => close()}>
              <div className="loginModal">
                <span className="close" onClick={() => close()}>
                  &times;
                </span>
                <h1 className="modalContents" >
                  로그인

                  <input
                    name="email"
                    className="loginId"
                    type="text"
                    placeholder="아이디"
                    onChange={this.loginHandler}
                  />

                  <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={this.loginHandler}
                  />

                  <div className="loginMid">
                    <div className="autoLogin">아이디/비밀번호 찾기</div>
                  </div>

                  <button className="loginBtn" onClick={this.loginClickHandler}>
                    로그인
                  </button>
                  
                  <GoogleLogin
                    className='google'
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                    cookiePolicy={'single_host_origin'}
                  />
                  <div className="loginEnd">
                    <Link to='/signup'>일반 회원가입</Link>
                  </div>

                </h1>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
  
}

export default withRouter(Login);