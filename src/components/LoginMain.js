import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../css/App.css";
import Ddabong from "./Ddabong"
import axios from "axios";
import { useLocation } from "react-router";

const LoginMain = ({qrImg, qrRequestHandler, setErrorMessage, closeModal, userinfo, setUserinfo, accessToken}) => {
  
  const [toggleOn, setToggleOn ] = useState(false);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [userQrImg, setUserQrImg ] = useState(null);
  const [isUserLike, setIsUserLike ] = useState(false);
  const [isUserDislike, setIsUserDislike ] = useState(false);
  const [thisUrl , setThisUrl] = useState('');

  // 유저용 관심사 qr 얻어오기 핸들러 
  const userQrRequestHandler = () => {
    axios.get('http://13.209.10.136/url/userurl', 
    { headers : {authorization: accessToken , withCredentials: true}})
    .then((res) => {
      let qrUrl = res.data;
      setThisUrl(qrUrl)
      let urlStr = qrUrl.split('chl=');
      let url = urlStr[1];
  
      setUserQrImg(url)
      setIsRefreshed(true)
      setIsUserLike(false)
      setIsUserDislike(false)
    })
  }
  // 토글 상태 껐다 켰다 -> 처음 토글 켰을 때 유저 정보 받아오기 
  const toggleStatus = () => {
    setToggleOn(!toggleOn); 
    axios.get('http://13.209.10.136/user/info',
    { headers : {authorization: accessToken , withCredentials: true}})
    .then(res => {
      if(res.status !== 200) {
        const message = 'access token 만료. refresh token 이용바람';
        setErrorMessage(message)
      }
      const getData = res.data;
      setUserinfo(getData);
    })
  }
  // like 누른 url 서버로 보내기 
  const likeSelect = () => {

    let url = userQrImg;
    let userId = userinfo.userInfo.id;
    axios.post('http://13.209.10.136/url/like',
    {userId, url},
    { withCredentials: true }
    ).then((res) => {
      setIsUserLike(true);
    })
  }  
  // dislike 누른 url 서버로 보내기 
  const dislikeSelect = () => {
    let url = userQrImg;
    let userId = userinfo.userInfo.id;
    axios.post('http://www.simsimae-server.site/url/dislike',
    {userId, url},
    { withCredentials: true }
    ).then((res) => {
      setIsUserDislike(true);
    })
  }
  return(
    
    <div className="body">
        <div className='toggle-div'>
          <input className='toggle-input' type="checkbox" id="switch"/>
          <label className='toggle-label'htmlFor="switch" onClick={() => {toggleStatus()}}></label>
        </div>

      { 
        !toggleOn ? 
      //토글 꺼진 QR
        <>
        <div className="user-qrRender">
          <a target='_blank'>
            <img src={qrImg} alt=''/>
          </a>
        </div>
        <div className='reBtnDiv'>
          <button onClick={() => qrRequestHandler()} className="user-refreshBtn">
          <i class="fas fa-sync-alt"></i>
          </button>
        </div>
        </>
      : 
      toggleOn && !isRefreshed ? // 토글 on, 리프레시 버튼 안눌렀을때
      <div>
        <div className="user-qrRender">
          <p>리프레시를 눌러주세요</p>
          <a target='_blank'>
            <img src={qrImg} alt=''/>
          </a>
          <div>
            <Ddabong likeSelect={likeSelect} dislikeSelect={dislikeSelect} />
          </div>
        </div>
        <div className='reBtnDiv'>
          <button onClick={() => userQrRequestHandler()} className="user-refreshBtn">
          <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
      :
      //토글 켜진 QR
      <div>
        <div className="user-qrRender">
          <p>좋아요 or 싫어요 누른 후 리프레시를 눌러주세요</p>
          <a target='_blank'>
            <img src={`https://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=${userQrImg}`} alt=''/>
          </a>
          <div>
            <Ddabong isUserLike={isUserLike} isUserDislike={isUserDislike} likeSelect={likeSelect} dislikeSelect={dislikeSelect} />
          </div>
        </div>
        <div className='reBtnDiv'>
          <button onClick={() => userQrRequestHandler()} className="user-refreshBtn">
          <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
      }
    </div>
  )
}

export default withRouter(LoginMain);