import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

import "../css/App.css";

const NoneUserQr = () => {

  const [email , setEmail ] = useState('');
  const [password , setPassword ] = useState('');
  const [errorMessage , setErrorMessage ] = useState('');
  const [isLogin , setIsLogin ] = useState(false);

  const qrRequestHandler = () => {
    axios.get('http://13.209.10.136/url')
    .then((res) => {
      return res.data;
    })
  }; 

  return (
    <>
      {qrRequestHandler}
    </>
  );
}
  


export default withRouter(NoneUserQr);