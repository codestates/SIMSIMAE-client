import React from 'react';
import axios from 'axios';
import logo from '../logo.png';
import centerLogo from '../logo.png';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    // this.inputHandler = this.inputHandler.bind(this);
    // this.loginRequestHandler = this.loginRequestHandler.bind(this);
  }

//   inputHandler(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   loginRequestHandler() {
//     // TODO: 로그인 요청을 보내세요.
//     //
//     axios.post("https://localhost:4000/users/login", {
//       username: this.state.username,
//       password: this.state.password
//     }).then((res) => {
//       this.props.loginHandler();
//       axios.get("https://localhost:4000/users/userinfo").then((res) => {
//         this.props.setUserInfo(res);
//       })
//     })
//     // 로그인에 성공하면
//     // - props로 전달받은 함수를 호출해, 로그인 상태를 변경하세요.
//     // - GET /users/userinfo 를 통해 사용자 정보를 요청하세요
//     //
//     // 사용자 정보를 받아온 후
//     // - props로 전달받은 함수를 호출해, 사용자 정보를 변경하세요.
//   }

  render() {
    return (
        <div>
            <div className='header'>
                <div className='logo' onClick=''>
                    <img className='logo_image' src={logo} alt="" sizes="10px"></img>
                    <button onClick={this.loginRequestHandler} className='loginBtn'>로그인</button>
                </div>
            </div>
            <div className="body">
                {/* <div>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                        </input>
                    </label>
                </div> */}
                <div><img className='center-logo' src={centerLogo} alt=""></img></div>
                <div><button onClick={this.qrRequestHandler} className="qrBtn">Click!</button></div>
            </div>

            <div className="footer">

            </div>
        </div>
    );
  }
}

export default Main;