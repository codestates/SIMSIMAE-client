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
    $(".body").css('display', 'none');
    $(".center-qr").css('display', 'block');
    $(".button").css('display', 'block');
    
  }

    
 

  render() {
    return (
      <div>
          <div className='header'>
            <img className='logo_image' src={logo} alt="center_Logo" sizes="10px" />
            <Nav />
          </div>
          <div className="body">
              {/* <div>
                  <label class="switch">
                      <input type="checkbox">
                      <span class="slider round"></span>
                      </input>
                  </label>
              </div> */}
              <div><img className='center-logo' src={logo} alt=""></img></div>
              <div><button onClick={this.revealQr} className = "qrBtn">Click!</button></div>
          </div>
          <div className="reveal">
              <div><img className='center-qr' src={qr} alt=""></img></div>
              <div><button onClick={this.qrRequestHandler} className="button">🔄</button></div>
          </div>

          <div className="footer">
              <p className='copyright'>Copyright 2021. SONGYUIJO inc. all rights reserved.</p>
          </div>
      </div>
    );
  }
}

export default withRouter(Main);