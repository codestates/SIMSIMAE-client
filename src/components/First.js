import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Account from '../components/Account';

class First extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return(
      <>
        <div className='tabForm'>
          <Account />
        </div>
      </>
    )
  }
}

export default withRouter(First);