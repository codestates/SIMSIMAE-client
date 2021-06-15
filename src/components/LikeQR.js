import React from "react";
import { withRouter } from "react-router-dom";
import qr from '../img/simsimae_qr.png'

const LikeQR = () => {

  return(
    <>
      <div className='tabForm'>
        <div className='likeQRDiv'>
          <form className='disablelForm'>
            <h2 className='likeQRTitle'>나의 Like 모음</h2>
            <div className='qrDiv'>
              <a href='http://www.naver.com'>
                <img src={qr} alt='qrImg' className='likeQR' />
              </a>
              <div className='qrNameDiv'>
                <p className='domainName'>www.naver.com</p>
              </div>
              <button className='qrRemoveBtn'>삭제</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )

}

export default withRouter(LikeQR);