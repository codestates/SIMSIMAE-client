import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LikeList from '../components/LikeList';

import logo from '../img/SIMSIMAE-logo.png';
class LikeForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render() {
    return(
      <div>
        <center>
          <img className='logo' src={logo}/>
          <LikeList />
        </center>
      </div>
    )
  }

}

export default withRouter(LikeForm);