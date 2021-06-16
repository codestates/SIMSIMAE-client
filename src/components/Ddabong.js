import React from "react";
import { withRouter } from "react-router-dom";
import '../css/Like.css';
import like_btn from '../img/like_btn.png';
import like_btn_filled from '../img/like_btn_filled.png';
import dislike_btn from '../img/dislike_btn.png';
import dislike_btn_filled from '../img/dislike_btn_filled.png';

const Ddabong = ({dislikeSelect, likeSelect}) => {

  return(
    <>
      <i className="far fa-thumbs-up likeBtn" onClick={() => likeSelect()}/>
      <i class="far fa-thumbs-down dislikeBtn" onClick={() => dislikeSelect()}/>
    </>
  )
}
export default withRouter(Ddabong); 