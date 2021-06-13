import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";


class Account extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <>
        <div className='accountDiv'>
          <form className='disablelForm'>
          <h2 className='accountTitle'>계정 설정</h2>

            <div className='accountUl'>
              <div className='accountEmailLi'>
                <input disabled
                  className='disEmail'
                  type="email" name="val" 
                  value='chomimi@test.com' />
              </div>
              <div className='accountPwdLi'>
                <input disabled
                  className='disPassword'
                  type="password" name="val" 
                  value='qlalf1234' />
              </div>
              <div className='accountNameLi'>
                <input disabled
                  className='disName'
                  type="text" name="val" 
                  value='초미미' />
              </div>

              <hr className='endLine' />

              <div className='accountGenderLi'>
                <input disabled
                  className='disGenderMale'
                  type="radio" name="gender" 
                  value='남성' /><p>남성</p>
                <input disabled checked
                  className='disGenderFemale'
                  type="radio" name="gender" 
                  value='여성' /><p>여성</p>
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
                <select disabled className='ageSelect'>
                     <option>10대</option>
                     <option selected>20대</option>
                     <option>30대</option>
                     <option>40대</option>
                     <option>50대 이상</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }

}
export default withRouter(Account);