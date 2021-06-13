import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import MenuTab from '../components/MenuTab';
import Nav from '../components/Nav';
import logo from '../img/simsimae_logo.png';

import '../css/tap.css';

class Mypage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <>
        <div className='header'>
          <Link to='/'>
            <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" />
          </Link>
          <Nav />
        </div>
        <MenuTab userinfo={this.props.userinfo}/>
        <div className="footer">
          <p className='copyright'>Copyright 2021. SONGYUIJO inc. all rights reserved.</p>
        </div>
      </>
    )
  }
}

export default withRouter(Mypage);