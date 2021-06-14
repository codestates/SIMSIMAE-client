import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../css/Like.css';
import axios from 'axios';

import logo from '../img/SIMSIMAE-logo.png';
class LikeForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      // 관심사를 배열로 받는게 나은가?
      favorit : [],
      gender : null,
      age : null,
      location : null,
    };
  }
  
  collectBtn = (e) => {
    console.log(e.target)
  }
  
  // 회원가입 버튼 클릭 시 서버통신
  handleSignup = () => {
    const { email, password, name, phone, 
      isValidEmail, isValidPassword, isPwdDoubleCk, isValidName, isValidPhone } = this.props;

    if(!isValidEmail || !isValidPassword || !isPwdDoubleCk || !isValidName || !isValidPhone) {
      this.setState({errorMessage : '모든 항목이 확인되어야 합니다.'})
      alert('모든항목필수');

    }else if(this.state.requierCheck1 === false || this.state.requierCheck2 === false){
      this.setState({errorMessage : '필수 약관 동의 '})
      alert('필수 약관 확인해주세요');

    }else{
      alert('가입성공!')
      axios.post('http://13.209.10.136/user/signup',
      { email, password, name, phone },
      {'Content-Type':'application/json', withCredentials: true })
      .then(res => {
        console.log('완료res:::',res)
        this.props.history.push("/");
      })
    }

  }

  render() {
    return(
      <div >
        <center>
          <img className='logo' src={logo}/>
          <p className='likeTitle'>좋아하는 관심사를 골라주세요 (최대 5개까지)</p>
          <form className='checkForm'>
            <section className='checkSection'>
              <button 
                className='likeCheck'
                type='button'
                onClick={this.collectBtn}
                >음식</button>
              <button 
                className='likeCheck'
                type='button'
                onChange={this.collectBtn}
              >쇼핑</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >IT</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >방송</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >유머</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >동물</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >연애</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >???</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >???</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >???</button>
            </section>
            <hr></hr>
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
              <div className='locationTitle'>지역</div>
              <div className='locationOption'>
                <div className='locationSet'>
                  <input type='radio' name='location' className='optionCheck'/>
                  <span>국내</span>
                </div>
                <div className='locationSet'>
                  <input type='radio' name='location' className='optionCheck'/>
                  <span>해외</span>
                </div>
              </div>
              
            </section>
           
            <button
                className="completeBtn"
                type='submit'
                onClick={this.handleSignup}
                >완료</button >
          </form>
        </center>
      </div>
    )
  }

}

export default withRouter(LikeForm);