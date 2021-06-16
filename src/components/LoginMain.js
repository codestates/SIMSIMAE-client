import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import "../css/App.css";

const LoginMain = ({closeModal, qrRequestHandler, qrImg, userQrRequestHandler, userQrImg, setUserQrImg}) => {
  const [toggleOn, setToggleOn ] = useState(false);
  const toggleStatus = () => {
    if(toggleOn === true) {
      setToggleOn(false);
    }else if(toggleOn === false) {
      setToggleOn(true);
    }
  }

  

  closeModal()
  return(
    
      <div className="body">
          <div className='toggle-div'>
              <input className='toggle-input' type="checkbox" id="switch"/>
              <label className='toggle-label'htmlFor="switch" onClick={() => {toggleStatus()}}></label>
          </div>
            {toggleOn ? 
            //토글 켜진 QR
            <>
              <div className="user-qrRender">
                <div className='user-center-qr'>
                  <img src={userQrImg} alt=''/>
                  <a href='http://www.naver.com' target='_blank'>
                  </a>
                </div>
                <div className='reBtnDiv'>
                  <button onClick={() => userQrRequestHandler()} className="refreshBtn">
                  <i className="fas fa-sync-alt"></i>
                  </button>
                </div>
              </div>
              </>: 
          //토글 꺼진 QR
          <>
              <div className="user-qrRender">
              <div className='user-center-qr'>
                <img src={qrImg} alt=''/>
                <a href='http://www.naver.com' target='_blank'>
                </a>
              </div>
              <div className='reBtnDiv'>
                <button onClick={() => qrRequestHandler()} className="refreshBtn">
                <i className="fas fa-sync-alt"></i>
                </button>
              </div>
            </div>
            </>
            }
            
        </div>
    
  )
}

export default withRouter(LoginMain);