import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import logo from '../img/SIMSIMAE-logo.png';
import { isEmail, isPassword, isName, isPhone } from '../js/regExp';


import TermCheck from "../components/TermCheck";
import axios from "axios";

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      emailCheck: false,
      password: "",
      passwordCheck: "",
      name: "",
      phone: "",
      errorMessage: "",
      isValidEmail : false,
      isValidPassword : false,
      isPwdDoubleCk : false,
      isValidName : false,
      isValidPhone : false,
    };

    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPwd = this.handleInputPwd.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputPwdCh = this.handleInputPwdCh.bind(this);
    this.handleInputPhone = this.handleInputPhone.bind(this);
  }
  
  // 이메일 값 바뀔때마다 유효성 검사
  handleInputEmail = (key) => (e) => {
    this.setState({ [key]: e.target.value });
    if (!isEmail(e.target.value)) { 
      this.setState({ isValidEmail: false });
    } else if(e.target.value === ''){
      this.setState({ isValidEmail: false });
    } else { // 이메일 형식 통과 했을때
      this.setState({ isValidEmail: true });
    }
  };

  // 이메일 중복체크
  emailDCEvent = (currentEmail) => {
    const { isValidEmail } = this.state;
    // 이메일이 유효성 검사를 통과하면
    if(isValidEmail === true) { 
      axios.post('http://13.209.10.136/user/conflictemail',
      {currentEmail},
      {'Content-Type':'application/json', withCredentials: true })
      .then(res => {
        alert('사용가능한 이메일 입니다.')
        console.log('중복체크 res:::',res)
        this.setState({emailCheck:true})
      }).catch(err => {
        alert('이미 존재하는 이메일 입니다.')
        console.log('에러:::',err)
      })
    }else {
      alert('사용할 이메일을 입력해주세요.')
      console.log('잉?')
    }
  }

  // 비밀번호 값 바뀔때마다 유효성 검사
  handleInputPwd = (key) => (e) => {
    this.setState({ [key]: e.target.value });
     // 비밀번호 형식 안맞을 때
     if (!isPassword(e.target.value)) { 
      this.setState({ isValidPassword: false });
    } else { // 비밀번호 형식 통과 했을때
      this.setState({ isValidPassword: true });
    }
  };
  
   // 비밀번호체크값 바뀔때마다 비밀번호와 일치하는지 검사
  handleInputPwdCh = (key) => (e) => {
    this.setState({ [key]: e.target.value });
    const { password } = this.state;
    if (password.length < 1 || e.target.value.length < 1) {
      this.setState({
        isPwdDoubleCk: false,
      });
      // 비밀번호가 같다면 일치
    }else if (password === e.target.value) {
      this.setState({
        isPwdDoubleCk: true,
      });
      // 비밀번호가 같지 않다면 불일치
    } else {
      this.setState({
        isPwdDoubleCk: false,
      });
    }
  };
  
  // 이름 값 바뀔때마다 유효성검사
  handleInputName = (key) => (e) => {
    this.setState({ [key]: e.target.value });
    if (!isName(e.target.value)) { 
      this.setState({ isValidName: false });
    } else { // 이름 형식 통과 했을때
      this.setState({ isValidName: true });
    }
  };

  // 모바일 값 바뀔때마다 유효성검사
  handleInputPhone = (key) => (e) => {
    this.setState({ [key]: e.target.value });
    if (!isPhone(e.target.value)) { 
      this.setState({ isValidPhone: false });
    } else { // 전화번호 형식 통과 했을때
      this.setState({ isValidPhone: true });
    }
  };
  

  
  
  render(){
    return (
      <div>
        <center>
          <img className='logo' src={logo}/>
          <form className='signForm' onSubmit={(e) => e.preventDefault()}>

            <div>
              <div className='signTitle'>이메일</div>
              <div className='emailBox'>
                <input className={this.state.isValidEmail===false ? '' : 'pass'}
                  value={this.state.email}
                  type="email"
                  placeholder="ex) simsimae@love.com"
                  onChange={this.handleInputEmail("email")}
                ></input>
                <button className='emailDoubleCheck'
                  onClick={() => this.emailDCEvent(this.state.email)}
                >중복확인</button>
              </div>
            </div>

            <div>
              <div className='signTitle'>비밀번호</div>
              <input className={this.state.isValidPassword===false ? '' : 'pass'}
              value={this.state.password}
                type="password"
                placeholder="영문,숫자 조합 6~10자"
                onChange={this.handleInputPwd("password")}
              ></input>
            </div>

            <div>
              <div className='signTitle'>비밀번호 재확인</div>
              <input className={this.state.isPwdDoubleCk === false ? '' : 'pass'}
                value={this.state.passwordCheck}
                type="password"
                placeholder="비밀번호 재입력"
                onChange={this.handleInputPwdCh("passwordCheck")}
              ></input>
            </div>

            <div>
              <div className='signTitle'>이름</div>
              <input className={this.state.isValidName === false ? '' : 'pass'}
                value={this.state.name}
                type='text'
                placeholder="이름"
                onChange={this.handleInputName("name")}
              ></input>
            </div>
            
            <div>
              <div className='signTitle'>전화번호</div>
              <input className={this.state.isValidPhone === false ? '' : 'pass'}
                value={this.state.phone}
                type='tel'
                placeholder="'-' 를 제외한 숫자만 입력"
                onChange={this.handleInputPhone("phone")}
              ></input>
            </div>

            <TermCheck 
              email={this.state.email}
              password={this.state.password}
              name={this.state.name}
              phone={this.state.phone}
              errorMessage={this.state.errorMessage}
              isValidEmail={this.state.isValidEmail}
              isValidPassword={this.state.isValidPassword}
              isPwdDoubleCk={this.state.isPwdDoubleCk}
              isValidName={this.state.isValidName}
              isValidPhone={this.state.isValidPhone}
            />

            </form>

        </center>
      </div>
    )
  }
}

export default withRouter(Signup);