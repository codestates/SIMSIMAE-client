import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Second extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <>
        <div>Hello p2</div>
      </>
    )
  }
}

export default withRouter(Second);