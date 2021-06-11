import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from '../components/Nav';
import logo from '../img/simsimae_logo.png';
import qr from '../img/simsimae_qr.png';
import $ from "jquery";

class Main extends Component {
  constructor(props){
    super(props);
    this.revealQr = this.revealQr.bind(this);
    this.qrRequestHandler = this.qrRequestHandler.bind(this);
    this.state = {
      email: '',
      password: '',
      click: false
    }

  }

  qrRequestHandler() {
    
  };

  revealQr(){
    $(".logoRender").css('display', 'none');
    $(".center-qr").css('display', 'block');
    $(".refreshBtn").css('display', 'block');
    $(".qrRender").css('display','block');
  }

    
 

  render() {
    return (
      <div>
          <div className='header'>
            <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" />
            <Nav />
          </div>
          <div className="body">
            <div className='logoRender'>
              <div><img className='center-logo' src={logo} alt=""></img></div>
              <div><button onClick={this.revealQr} className = "qrBtn">Click!</button></div>
            </div>
            <div className="qrRender">
              <div className='center-qr'>
                <a href='http://www.naver.com' target='_blank'>
                  <img src={qr} alt="" />
                </a>
                </div>
              <div className='reBtnDiv'>
                <button onClick={this.qrRequestHandler} className="refreshBtn">
                  <i class="fas fa-sync-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="footer">
              <p className='copyright'>Copyright 2021. SONGYUIJO inc. all rights reserved.</p>
          </div>
      </div>
    );
  }
}

export default withRouter(Main);