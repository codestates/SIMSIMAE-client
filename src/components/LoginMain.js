import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

const LoginMain = ({closeModal}) => {
  
  closeModal()
  return(
    <>
      <div className="body">
        <h1>로그인했땅!</h1>
      </div>
    </>
  )
}

export default withRouter(LoginMain);