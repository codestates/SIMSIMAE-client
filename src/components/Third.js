import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Third extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <>
        <div>Hello p3</div>
      </>
    )
  }
}

export default withRouter(Third);