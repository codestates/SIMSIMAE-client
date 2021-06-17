import axios from "axios";
import React from "react";
import { withRouter, useHistory } from "react-router-dom";

const Account = ({ userinfo }) => {
  const history = useHistory();
  const user = userinfo.userInfo;

  //회원 탈퇴 로직
  const dropUser = () => {
    const userPsw = prompt('비밀번호를 입력하세요', '');
    console.log('userPsw', userPsw)
    axios.post('http://www.simsimae-server.site/user/drop', {
      email: user.email, password:userPsw
    })
    .then(res => {
      console.log('status', res.status)
      if(res.status === 200) {
        alert('회원 탈퇴가 완료되었습니다.')
        return history.push('/')
      }
    })
    .catch(err => {
      alert('비밀번호가 일치하지 않습니다.')
    })
  }

  //form태그 div로 변경했음
  return(
    <>
    {console.log('userinfo::::',user)}
      <div className='tabForm'>
        <div className='accountDiv'>
          <div className='disablelForm'>
          <h2 className='accountTitle'>내 계정</h2>
            <div className='accountUl'>
              <div className='accountNameLi'>
                <input disabled
                  className='disName'
                  type="text" name="val" 
                  value={user.name} />
              </div>
              <div className='accountEmailLi'>
                <input disabled
                  className='disEmail'
                  type="email" name="val" 
                  value={user.email} />
              </div>
              <div className='accountPhoneLi'>
                <input disabled
                  className='disPassword'
                  type="tel" name="val" 
                  value={user.phone} />
              </div>

              <hr className='endLine' />

              <div className='accountGenderLi'>
                <input disabled checked={user.gender === 'M' ? true : false}
                  className='disGenderMale'
                  type="radio" name="gender" 
                  value='M' /><p>남성</p>
                <input disabled checked={user.gender === 'F' ? true : false}
                  className='disGenderFemale'
                  type="radio" name="gender" 
                  value='F' /><p>여성</p>
              </div>

              <div className='accountLocationLi'>
                <input disabled checked={user.location === '국내' ? true : false}
                  className='domestic'
                  type="radio" name="location" 
                  value='국내' /><p>국내</p>
                <input disabled checked={user.location === '해외' ? true : false}
                  className='overseas'
                  type="radio" name="location" 
                  value='해외' /><p>해외</p>
              </div>

              <div className='accountAgeLi'>
                <select disabled className='ageSelect' value={user.age}>
                  <option value='1'>10대</option>
                  <option value='2'>20대</option>
                  <option value='3'>30대</option>
                  <option value='4'>40대</option>
                  <option value='5'>50대 이상</option>
                </select>
              </div>
              <button onClick={() => dropUser()}>회원탈퇴</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default withRouter(Account);