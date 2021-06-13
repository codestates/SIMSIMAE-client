import React, { Component } from "react";
import Login from "./Login";

import { Link, withRouter } from "react-router-dom";

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen : false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <Link to='/mypage'>mypage</Link>
        <button onClick={this.openModal} className='loginModalBtn' >로그인</button>
        <Login isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    )
  }

}

export default withRouter(Nav);