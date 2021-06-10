import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from '../components/Nav';
import logo from '../img/simsimae_logo.png';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
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
              <div><button onClick={this.qrRequestHandler} className="qrBtn">Click!</button></div>
          </div>

          <div className="footer">
              <p className='copyright'>Copyright 2021. SONGYUIJO inc. all rights reserved.</p>
          </div>
      </div>
    );
  }
}

export default withRouter(Main);