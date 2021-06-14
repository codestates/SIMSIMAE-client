import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

import "../css/App.css";

class NoneUserQr extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      isLogin: false
    }
    //this.loginHandler = this.loginHandler.bind(this);
    this.qrRequestHandler = this.qrRequestHandler.bind(this);

  }



  qrRequestHandler = () => {
    axios.get('http://13.209.10.136/url')
        .then((res) => {
            return res.data;
        })
        
        
  }; 

  render() {

    return (
      <>
        {this.qrRequestHandler()}
      </>
    );
  }
  
}

export default withRouter(NoneUserQr);