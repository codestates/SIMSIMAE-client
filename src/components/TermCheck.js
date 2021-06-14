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

    this.handleNextBtn = this.handleNextBtn.bind(this);
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

  
  handleNextBtn = () => {
    this.props.history.push("/likeForm");
    

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
        onClick={this.handleNextBtn}
        >다음</button >
    </>
    )
  }
}

export default withRouter(TermCheck);