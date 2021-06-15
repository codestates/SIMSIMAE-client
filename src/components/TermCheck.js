import React, { useState } from "react";
import { withRouter, Link  } from "react-router-dom";

const TermCheck = () => {
  const [allCheck , setAllcheck] = useState(false);
  const [requierCheck1 , setRequierCheck1] = useState(false);
  const [requierCheck2 , setRequierCheck2] = useState(false);
  const [optionCheck , setOptionCheck] = useState(false);
    
  // 전체 선택 및 동의 버튼
  const allCheckHandler = () => {
    setAllcheck(!allCheck)
    // 체크하면 전체 선택 및 해제가 되어야한다.
    if(allCheck){
      setRequierCheck1(false)
      setRequierCheck2(false)
      setOptionCheck(false)
    }else if(!allCheck) {
      setRequierCheck1(true)
      setRequierCheck2(true)
      setOptionCheck(true)
    }
    // 이중 하나라도 해제가 될 시 전체선택은 false,
    // Allcheck 외 나머지 모두 선택 시 전체선택 true
 
  };

  const check1Handler = () => {
    setRequierCheck1(!requierCheck1)
    if(requierCheck1){
      setAllcheck(false)
    }
  }

  const check2Handler = () => {
    setRequierCheck2(!requierCheck2)
    if(requierCheck2){
      setAllcheck(false)
    }
  }

  const optionCheckHandler = () => {
    setOptionCheck(!optionCheck)
    if(optionCheck){
      setAllcheck(false)
    }
  }
  
  const handleNextBtn = () => {
    //this.props.history.push("/likeForm");
  }
  
  return(
    <>
      <div className='termForm'>
      <div className='termDiv allCheck'>
        <input type='checkbox' className='termsCheckbox'
        checked = {allCheck}
        onChange={(e) => allCheckHandler(e)}
          />
        <span>전체 선택 및 동의</span>
      </div>
      <hr />

      <div className='termDiv'>
        <input type='checkbox' className='termsCheckbox'
          checked = {requierCheck1}
          onChange={(e) => check1Handler(e)}
        />
        <span>SIMSIMAE 이용약관 동의 (필수)</span>
      </div>
      <div className='termDiv'>
        <input type='checkbox' className='termsCheckbox'
          checked = {requierCheck2}
          onChange={(e) => check2Handler(e)}
        />
        <span>개인정보 수집 및 이용 동의 (필수)</span>
      </div>
      <div className='termDiv'>
        <input type='checkbox' className='termsCheckbox'
          checked = {optionCheck}
          onChange={(e) => optionCheckHandler(e)}
        />
        <span>프로모션 정보 수신 동의 (선택)</span>
      </div>
    </div>
    <Link to='/likeForm'>
      <button
        className="signupBtn"
        type='submit'
        onClick={() => handleNextBtn()}
        >다음</button >
    </Link>
    </>
  )
}

export default withRouter(TermCheck);