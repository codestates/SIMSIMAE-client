import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import FavoriteCheck from "./FavoriteCheck";
import '../css/Like.css';
import like_btn from '../img/like_btn.png';
import like_btn_filled from '../img/like_btn_filled.png';
import dislike_btn from '../img/dislike_btn.png';
import dislike_btn_filled from '../img/dislike_btn_filled.png';
import axios from 'axios';
import { get } from "jquery";

const Ddabong = ({userinfo, setUserinfo, accessToken}) => {
    const [isUserLike, setIsUserLike ] = useState(false);
    const [isUserDislike, setIsUserDislike ] = useState(false);
    
    
    const userClickLikeBtn = () => {
        //like 버튼이 눌려있지 않을 때
        if(isUserLike === false) {
            //만약 Dislike 버튼이 눌려있으면 취소되고
            if(isUserDislike === true) {
                setIsUserDislike(false);

            }
            setIsUserLike(true);
            // getUserInfo();
            // sendToLikeQr();
            
        //이미 like 버튼이 눌려있으면
        }else if(isUserLike === true) {
            //like 버튼을 취소한다
            setIsUserLike(false);
        }
    }

    const userClickDislikeBtn = () => {
        //dislike 버튼이 눌려있지 않을 때
        if(isUserDislike === false) {
            //만약 like 버튼이 눌려있으면 취소되고
            if(isUserLike === true) {
                setIsUserLike(false);
            }
            // dislike 버튼이 눌린다
            setIsUserDislike(true);
        //이미 dislike 버튼이 눌려있으면
        }else if(isUserDislike === true) {
            //dislike 버튼을 취소한다
            setIsUserDislike(false);
        }
    }
    const getUserInfo = () => {
      axios.get('http://13.209.10.136/user/info',
        { headers : {authorization: accessToken , withCredentials: true}
        })
        .then(res => {
            console.log('user 정보 받아오기 성공!!!', res)
            setUserinfo(res.data.userInfo);
        }).catch(err => console.log(err));
    }
    
    
    const sendToLikeQr = () => {
        console.log(userinfo);
        axios.post('http://13.209.10.136/url/like', 
            
            { 'Content-Type':'application/json', withCredentials: true }
        ).then((res) => {
            console.log('관심QR에 저장했습니다!')
        }).catch((err) => console.log(err))
    }
            
    return(
        <>
            {isUserLike ? <img className='likeBtn' onClick={() => getUserInfo()} src={like_btn_filled}/> :
            <img className='likeBtn' onClick={() => userClickLikeBtn()} src={like_btn}/>}
            {isUserDislike ? <img className='dislikeBtn'onClick={() => userClickDislikeBtn()} src={dislike_btn_filled}/> :
            <img className='dislikeBtn'onClick={() => userClickDislikeBtn()} src={dislike_btn}/>}
            
        </>
    )
}
export default withRouter(Ddabong); 