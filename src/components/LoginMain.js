
import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import "../css/App.css";
import Ddabong from "../components/Ddabong"
import axios from "axios";



const LoginMain = ({closeModal, qrRequestHandler, qrImg, userQrRequestHandler, userQrImg, setUserQrImg, userinfo, setUserinfo, accessToken}) => {
  const [toggleOn, setToggleOn ] = useState(false);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [user, setUser] = useState([]);

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

  const requestUserInfo = () => {
    axios.get('http://www.simsimae-server.site/user/info',
        { headers : {authorization: accessToken , withCredentials: true}
        })
        .then(res => {
            console.log('user 정보 받아오기 성공!!!', res)
            setUser(res.data.userInfo);
        }).catch(err => console.log(err));
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
                        <Ddabong user={user} setUser={setUser} accessToken={accessToken} requestUserInfo={requestUserInfo}/>
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