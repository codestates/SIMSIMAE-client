import React from "react";
import { withRouter } from "react-router-dom";

const Account = ({ userinfo }) => {
 
  const user = userinfo.userInfo;
  return(
    <>
    {console.log('userinfo::::',user)}
      <div className='tabForm'>
        <div className='accountDiv'>
          <form className='disablelForm'>
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
              
            </div>
          </form>
        </div>
      </div>
    </>
  )
  
}

export default withRouter(Account);