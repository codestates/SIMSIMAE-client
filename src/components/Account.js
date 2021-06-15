import React from "react";
import { withRouter } from "react-router-dom";

const Account = ({ userinfo }) => {
 
  return(
    <>
    {console.log('userinfo::::',userinfo)}
      <div className='tabForm'>
        <div className='accountDiv'>
          <form className='disablelForm'>
          <h2 className='accountTitle'>내 계정</h2>
            <div className='accountUl'>
              <div className='accountNameLi'>
                <input disabled
                  className='disName'
                  type="text" name="val" 
                  value={userinfo.name} />
              </div>
              <div className='accountEmailLi'>
                <input disabled
                  className='disEmail'
                  type="email" name="val" 
                  value={userinfo.email} />
              </div>
              <div className='accountPhoneLi'>
                <input disabled
                  className='disPassword'
                  type="tel" name="val" 
                  value={userinfo.phone} />
              </div>

              <hr className='endLine' />

              <div className='accountGenderLi'>
                <input disabled
                  className='disGenderMale'
                  type="radio" name="gender" 
                  value='M' /><p>남성</p>
                <input disabled checked
                  className='disGenderFemale'
                  type="radio" name="gender" 
                  value='F' /><p>여성</p>
              </div>

              <div className='accountLocationLi'>
                <input disabled checked
                  className='domestic'
                  type="radio" name="location" 
                  value='국내' /><p>국내</p>
                <input disabled 
                  className='overseas'
                  type="radio" name="location" 
                  value='해외' /><p>해외</p>
              </div>

              <div className='accountAgeLi'>
                <select disabled className='ageSelect' value='20'>
                  <option value='10'>10대</option>
                  <option value='20'>20대</option>
                  <option value='30'>30대</option>
                  <option value='40'>40대</option>
                  <option value='50'>50대 이상</option>
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