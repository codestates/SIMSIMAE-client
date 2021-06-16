import React from "react";
import { withRouter } from "react-router-dom";
import '../css/Like.css';
import like_btn from '../img/like_btn.png';
import like_btn_filled from '../img/like_btn_filled.png';
import dislike_btn from '../img/dislike_btn.png';
import dislike_btn_filled from '../img/dislike_btn_filled.png';

const Ddabong = ({isUserLike, isUserDislike, dislikeSelect, likeSelect}) => {

  return(
    <>
    { !isUserLike ? 
    <i className="far fa-thumbs-up likeBtn" onClick={() => likeSelect()}/> 
    :
    <i className="far fa-thumbs-up clickLikeBtn" onClick={() => likeSelect()}/>
    }
    {
    !isUserDislike ?
    <i class="far fa-thumbs-down dislikeBtn" onClick={() => dislikeSelect()}/>
    :
    <i class="far fa-thumbs-down clickDislikeBtn" onClick={() => dislikeSelect()}/>
    }
    </>
  )
}
export default withRouter(Ddabong); 