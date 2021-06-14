import React, { Component } from "react";
import Login from "./Login";
import { GoogleLogout } from 'react-google-login';

import { Link, withRouter } from "react-router-dom";

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen : false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.logout = this.logout.bind(this);
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  logout = (res) => {
    console.log('로그아웃성공:::',res)
  }

  render() {
    return (
      <>
        <Link to='/mypage'>mypage</Link>
          <button onClick={() => this.openModal()} className='loginModalBtn' >로그인</button>
          <Login isOpen={this.state.isModalOpen} close={this.closeModal} />

          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
          />
        </>
    )
  }

}

export default withRouter(Nav);