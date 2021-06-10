import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../css/Like.css';

import logo from '../img/SIMSIMAE-logo.png';
class LikeForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  
  // 체크하면 해당 인풋에 값을 넣음.
  // 값을 가진 갯수가 총 5개가 넘으면 넘어가기 금지
  complete = () => {
    

  }

  skip = () => {

  }


  render() {
    return(
      <div >
        <center>
          <img className='logo' src={logo}/>
          <p className='likeTitle'>좋아하는 관심사를 골라주세요 (최대 5개까지)</p>
          <form className='checkForm'>
            <section className='checkSection'>
              <button className='likeCheck'>음식</button>
              <button className='likeCheck'>쇼핑</button>
              <button className='likeCheck'>IT</button>
              <button className='likeCheck'>방송</button>
              <button className='likeCheck'>유머</button>
              <button className='likeCheck'>동물</button>
              <button className='likeCheck'>연애</button>
              <button className='likeCheck'>???</button>
              <button className='likeCheck'>???</button>
              <button className='likeCheck'>???</button>
            </section>
            <hr></hr>
            <span className='optionText'>추가 선택 사항 (건너뛰기 가능) </span>
            <section className='optionSection'>
              <div className='genderTitle'>성별</div>
              <div className='genderOption'>
                <div className='genderSet'>
                  <input type='radio' name='gender' className='optionCheck'/>
                  <span>남성</span>
                </div>
                <div className='genderSet'>
                  <input type='radio' name='gender' className='optionCheck'/>
                  <span>여성</span>
                </div>
              </div>
              <div className='ageTitle'>나이대</div>
              <div className='ageOption'>
                <div className='ageSet'>
                  <input type='radio' name='age' className='optionCheck'/>
                  <span>10대</span>
                </div>
                <div className='ageSet'>
                  <input type='radio' name='age' className='optionCheck'/>
                  <span>20대</span>
                  </div>
                <div className='ageSet'>
                  <input type='radio' name='age' className='optionCheck'/>
                  <span>30대</span>
                </div>
                <div className='ageSet'>
                  <input type='radio' name='age' className='optionCheck'/>
                  <span>40대</span>
                </div>
                <div className='ageSet'>
                  <input type='radio' name='age' className='optionCheck'/>
                  <span>50대 이상</span>
                </div>
              </div>
            </section>
           
            <button
                className="skipBtn"
                type='button'
                onClick={this.skip}
                >건너뛰기</button >
            <button
                className="completeBtn"
                type='submit'
                onClick={this.complete}
                >완료</button >
          </form>
        </center>
      </div>
    )
  }

}

export default withRouter(LikeForm);