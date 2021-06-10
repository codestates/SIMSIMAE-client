import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

import google from '../img/google.png';
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

  render() {
    const { isOpen, close } = this.props;

    return (
      <>
        {isOpen ? (  
      
          <div className="modal">
            <div onClick={close}>
              <div className="loginModal">
                <span className="close" onClick={close}>
                  &times;
                </span>
                <h1 className="modalContents" onClick={isOpen}>
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
                  {this.state.errorMessage === '' ? <div className="alert-box"></div> :
                   <div className="alert-box">이메일과 비밀번호를 입력하세요</div>}
                  
                  <div className="socialBox">
                    <div className="google">
                      <div className="googleText">
                        <img src={google} className='googleLogo'></img>
                          Google 계정으로 신규가입
                      </div>
                    </div>
                  </div>

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