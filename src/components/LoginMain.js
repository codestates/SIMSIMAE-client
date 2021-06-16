<<<<<<< HEAD
import React, {useState} from "react";
import { withRouter } from "react-router-dom";
=======
import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import "../css/App.css";
import Ddabong from "../components/Ddabong"
>>>>>>> d19ca8e518ea79a675c25549c904a4e0972c7723


const LoginMain = ({closeModal, qrRequestHandler, qrImg, userQrRequestHandler, userQrImg, setUserQrImg, userinfo, setUserinfo, accessToken}) => {
  const [toggleOn, setToggleOn ] = useState(false);
  const [isRefreshed, setIsRefreshed] = useState(false);

  const userClickRefreshBtn = () => {
    setIsRefreshed(true);
  }
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
          <div className="user-qrRender">
          
            {toggleOn ? 
            //토글 켜진 QR
            <>
                
                  {isRefreshed ? 
                    <>
                      <img src={userQrImg} alt=''/>
                      <div>
                        <Ddabong/>
                      </div>
                    </> : 
                    <>
                      <div className='user-center-qr'>
                        <img src={qrImg} alt=''/>
                          <a href='qrImg' target='_blank'>
                          </a>
                      </div>
                    </> }
                  
                <div className='user-reBtnDiv'>
                  <button onClick={() => {
                  userClickRefreshBtn(); userQrRequestHandler();}} className="user-refreshBtn">
                    <i className="fas fa-sync-alt"></i>
                  </button>
                </div>
              
              </>: 
          //토글 꺼진 QR
          <>
              
              <div className='user-center-qr'>
                <img src={qrImg} alt=''/>
                <a href='http://www.naver.com' target='_blank'>
                </a>
              </div>
              <div className='user-reBtnDiv'>
                <button onClick={() => qrRequestHandler()} className="user-refreshBtn">
                <i className="fas fa-sync-alt"></i>
                </button>
              </div>
            
            </>
            }
            
            </div>
        </div>
    
  )
}

export default withRouter(LoginMain);