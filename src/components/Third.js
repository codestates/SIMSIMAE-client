import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LikeQR from '../components/LikeQR';

class Third extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <>
        <div className='tabForm'>
          <LikeQR />
        </div>
      </>
    )
  }
}

export default withRouter(Third);