import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Interest from '../components/Interest';

class Second extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <>
        <div className='tabForm'>
          <Interest />
        </div>
      </>
    )
  }
}

export default withRouter(Second);