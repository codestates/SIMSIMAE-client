import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
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
    // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동하세요.
    //        회원가입 성공 후 로그인 페이지 이동은 다음 코드를 이용하세요.
    //
    //        this.props.history.push("/");
    //
    // TODO : 모든 항목을 입력하지 않았을 경우 에러를 표시해야 합니다.
    const { email, password, username, mobile } = this.state;

    if(email===''||password===''||username===''|| mobile===''){
      this.setState({errorMessage : '모든 항목은 필수입니다'})
    }else{
      axios.post('https://localhost:4000/signup',
      { email, password, username, mobile },
      {'Content-Type':'application/json', withCredentials: true })
      .then(res => {
        // 응답 성공시
        this.props.history.push("/signin");
      })
    }

  }
  
  render(){
    return (
      <div>
        <center>
          <h1>Sign Up</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>모든 항목은 필수입니다</div>
            <div>
              <span>이메일</span>
              <input
                value={this.state.email}
                type="email"
                onChange={this.handleInputValue("email")}
              ></input>
            </div>
            <div>
              <span>비밀번호</span>
              <input
              value={this.state.password}
                type="password"
                onChange={this.handleInputValue("password")}
              ></input>
            </div>
            <div>
              <span>이름</span>
              <input
              value={this.state.username}
                type='text'
                onChange={this.handleInputValue("username")}
              ></input>
            </div>
            <div>
              <span>전화번호</span>
              <input
              value={this.state.mobile}
                type='tel'
                onChange={this.handleInputValue("mobile")}
              ></input>
            </div>
            <div>
              <Link to='/login'>이미 아이디가 있으신가요?</Link>
            </div>
            <button
              className="btn btn-signup"
              type='submit'
              onClick={this.handleSignup}
            >
              회원가입
            </button >
            {/* TODO : 조건에 따라 에러메시지를 표시하세요. */ 
            this.state.errorMessage === '' ? 
            <div className="alert-box"></div> : 
            <div className="alert-box">모든 항목은 필수입니다</div>
            }
          </form>
        </center>
      </div>
    )
  }
}

export default withRouter(Signup);