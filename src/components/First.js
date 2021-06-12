import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class First extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <>
        <div>Hello p1</div>
      </>
    )
  }
}

export default withRouter(First);