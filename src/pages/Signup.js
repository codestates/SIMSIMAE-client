import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import logo from '../img/SIMSIMAE-logo.png';

import axios from "axios";


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordCheck: "",
      username: "",
      mobile: "",
      errorMessage: ""
    };

    this.handleInputValue = this.handleInputValue.bind(this);
  }


  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignup = () => {

    const { email, password, username, mobile } = this.state;

    if(email===''||password===''||username===''|| mobile===''){
      this.setState({errorMessage : '모든 항목은 필수입니다'})
    }else{
      axios.post('https://localhost:4000/signup',
      { email, password, username, mobile },
      {'Content-Type':'application/json', withCredentials: true })
      .then(res => {
        //this.props.history.push("/main");
      })
    }

  }
  
  render(){
    return (
      <div>
        <center>
          <img className='logo' src={logo}/>
          <form className='signForm' onSubmit={(e) => e.preventDefault()}>

            <div>
              <div className='signTitle'>이메일</div>
              <input
                value={this.state.email}
                type="email"
                placeholder="ex) simsimae@love.com"
                onChange={this.handleInputValue("email")}
              ></input>
            </div>

            <div>
              <div className='signTitle'>비밀번호</div>
              <input
              value={this.state.password}
                type="password"
                placeholder="영문,숫자 6자 이상"
                onChange={this.handleInputValue("password")}
              ></input>
            </div>

            <div>
              <div className='signTitle'>비밀번호 재확인</div>
              <input
              value={this.state.password}
                type="password"
                placeholder="비밀번호 재입력"
                onChange={this.handleInputValue("password")}
              ></input>
            </div>

            <div>
              <div className='signTitle'>이름</div>
              <input
              value={this.state.username}
                type='text'
                placeholder="이름"
                onChange={this.handleInputValue("username")}
              ></input>
            </div>
            
            <div>
              <div className='signTitle'>전화번호</div>
              <input
              value={this.state.mobile}
                type='tel'
                placeholder="'-' 를 제외한 숫자만 입력"
                onChange={this.handleInputValue("mobile")}
              ></input>
            </div>

            <div className='termForm'>
              <div className='termDiv allCheck'>
                <input type='checkbox' className='termsCheckbox'
                checked />
                <span>전체 선택 및 동의</span>
              </div>
              <hr />

              <div className='termDiv'>
                <input type='checkbox' className='termsCheckbox'
                />
                <span>SIMSIMAE 이용약관 동의 (필수)</span>
              </div>
              <div className='termDiv'>
                <input type='checkbox' className='termsCheckbox'
                />
                <span>개인정보 수집 및 이용 동의 (필수)</span>
              </div>
              <div className='termDiv'>
                <input type='checkbox' className='termsCheckbox'
                />
                <span>프로모션 정보 수신 동의 (선택)</span>
              </div>
            </div>
            <Link to='/likeForm'>
              <button
                className="signupBtn"
                type='submit'
                onClick={this.handleSignup}
                >일반 회원가입</button >
              </Link>
          </form>

        </center>
      </div>
    )
  }
}

export default withRouter(Signup);