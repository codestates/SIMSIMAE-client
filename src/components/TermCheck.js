import React, { Component } from "react";
import { withRouter } from "react-router";

import axios from "axios";

class TermCheck extends Component {
  constructor(props){
    super(props);
    this.state = {
      allCheck : false,
      requierCheck1 : false,
      requierCheck2 : false,
      optionCheck : false,
    }

    this.handleSignup = this.handleSignup.bind(this);
    this.allCheckHandler = this.allCheckHandler.bind(this);
    this.check1Handler = this.check1Handler.bind(this);
    this.check2Handler = this.check2Handler.bind(this);
    this.optionCheckHandler = this.optionCheckHandler.bind(this);
  }

  // 전체 선택 및 동의 버튼
  allCheckHandler = () => {
    const { allCheck } = this.state;
    this.setState({
      allCheck: !allCheck,
    })
    // 체크하면 전체 선택 및 해제가 되어야한다.
    if(allCheck){
      this.setState({
        requierCheck1 : false,
        requierCheck2 : false,
        optionCheck: false
      })
    }else if(!allCheck) {
      this.setState({
        requierCheck1 : true,
        requierCheck2 : true,
        optionCheck: true
      })
    }
    // 이중 하나라도 해제가 될 시 전체선택은 false,
    // Allcheck 외 나머지 모두 선택 시 전체선택 true
 
  };

  check1Handler = () => {
    const { requierCheck1 } = this.state;
    this.setState({
      requierCheck1 : !requierCheck1
    })
    if(requierCheck1){
      this.setState({
        allCheck : false
      })
    }
  }

  check2Handler = () => {
    const { requierCheck2 } = this.state;
    this.setState({
      requierCheck2 : !requierCheck2
    })
    if(requierCheck2){
      this.setState({
        allCheck : false
      })
    }
  }

  optionCheckHandler = () => {
    const { optionCheck } = this.state;
    this.setState({
      optionCheck : !optionCheck
    })
    if(optionCheck){
      this.setState({
        allCheck : false
      })
    }
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
        console.log('res:::',res)
        this.props.history.push("/likeForm");
      })
    }

  }

  render() {
    
    return(
      <>
        <div className='termForm'>
        <div className='termDiv allCheck'>
          <input type='checkbox' className='termsCheckbox'
          checked = {this.state.allCheck}
          onChange={(e) => this.allCheckHandler(e)}
           />
          <span>전체 선택 및 동의</span>
        </div>
        <hr />

        <div className='termDiv'>
          <input type='checkbox' className='termsCheckbox'
           checked = {this.state.requierCheck1}
           onChange={(e) => this.check1Handler(e)}
          />
          <span>SIMSIMAE 이용약관 동의 (필수)</span>
        </div>
        <div className='termDiv'>
          <input type='checkbox' className='termsCheckbox'
           checked = {this.state.requierCheck2}
           onChange={(e) => this.check2Handler(e)}
          />
          <span>개인정보 수집 및 이용 동의 (필수)</span>
        </div>
        <div className='termDiv'>
          <input type='checkbox' className='termsCheckbox'
           checked = {this.state.optionCheck}
           onChange={(e) => this.optionCheckHandler(e)}
          />
          <span>프로모션 정보 수신 동의 (선택)</span>
        </div>
      </div>
      <button
        className="signupBtn"
        type='submit'
        onClick={this.handleSignup}
        >다음</button >
    </>
    )
  }
}

export default withRouter(TermCheck);