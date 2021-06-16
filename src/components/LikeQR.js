import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';

const LikeQR = ({userinfo}) => {

  //const [showQr, setShowQr] = useState(true)
  const [userUrl, setUserUrl] = useState(userinfo.likeUrl)

  // 삭제 버튼 눌렀을 때 
  const handleQrRemove = (e) => {
    let url = e.target.value;
    let id = userinfo.userInfo.id
    console.log(typeof id)
    console.log(typeof url)
    axios.post('http://www.simsimae-server.site/user/updatelikeqr',
    { url, id },
    {header : {withCredentials: true }})
    .then(res => {
      if(res.status === 200) {
        setUserUrl(userUrl.filter(el => el !== e.target.value));
      }
    }).catch(err => console.log(err))
    e.preventDefault(); 
  }
  return(
    <>
    {console.log('LikeQR:::',userUrl)}
      <div className='tabForm'>
        <div className='likeQRDiv'>
          <form className='disablelForm'>
            <h2 className='likeQRTitle'>나의 Like 모음</h2>
            {userUrl.length === 0 ? 
              <span>관심 QR이 없습니다.</span>
              :
              userUrl.map((el) => {
                return (
                  <div className='qrDiv'>
                    <a href={el}>
                      <img src={`https://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=${el}`} alt='qrImg' className='likeQR'/>
                    </a>
                    <div className='qrNameDiv'>
                      <p className='domainName'>{el}</p>
                    </div>
                    <button value={el} type='submit' className='qrRemoveBtn' onClick={(e) => handleQrRemove(e)}>삭제</button>
                  </div>
                )
              })
            }
            
          </form>
        </div>
      </div>
    </>
  )

}

export default withRouter(LikeQR);