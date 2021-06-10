import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from '../components/Nav';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  render() {
    return(
      <>
      <Nav />
      <h1>Main Page</h1>
      </>
    )
  }
}

export default withRouter(Main);