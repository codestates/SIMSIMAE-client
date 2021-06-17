import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import logo from '../img/SIMSIMAE-logo.png';
import { isEmail, isPassword, isName, isPhone } from '../js/regExp';
import { useHistory } from "react-router";


import TermCheck from "../components/TermCheck";
import axios from "axios";
import LikeForm from "../pages/LikeForm";

const Signup = () => {

  const history = useHistory();
  const [email , setEmail ] = useState('');
  const [emailCheck , setEmailCheck ] = useState(false);
  const [password , setPassword ] = useState('');
  const [passwordCheck , setPasswordCheck ] = useState('');
  const [name , setName ] = useState('');
  const [phone , setPhone ] = useState('');
  const [errorMessage , setErrorMessage ] = useState('');
  const [isValidEmail , setIsValidEmail ] = useState(false);
  const [isValidPassword , setIsValidPassword ] = useState(false);
  const [isPwdDoubleCk , setIsPwdDoubleCk ] = useState(false);
  const [isValidName , setIsValidName ] = useState(false);
  const [isValidPhone , setIsValidPhone ] = useState(false);
  const [nextValidChk, setNextValid] = useState(false)

  // 이메일 값 바뀔때마다 유효성 검사
  const handleInputEmail = (e) => {
    setEmail(e.target.value)
    if (!isEmail(e.target.value)) { 
      setIsValidEmail(false);
    } else if(e.target.value === ''){
      setIsValidEmail(false);
    } else { // 이메일 형식 통과 했을때
      setIsValidEmail(true);
    }
  };

  // 이메일 중복체크
  const emailDCEvent = (email) => {
    // 이메일이 유효성 검사를 통과하면
    if(isValidEmail === true) { 
      axios.post('http://www.simsimae-server.site/user/conflictemail',
      {email},
      {'Content-Type':'application/json', withCredentials: true })
      .then(res => {
        alert('사용가능한 이메일 입니다.')
        setEmailCheck(true)
      }).catch(err => {
        alert('이미 존재하는 이메일 입니다.')
        setEmailCheck(false)
      })
    }else {
      alert('사용할 이메일을 입력해주세요.')
    }
  }

  // 비밀번호 값 바뀔때마다 유효성 검사
  const handleInputPwd = (e) => {
    setPassword(e.target.value)
     // 비밀번호 형식 안맞을 때
     if (!isPassword(e.target.value)) { 
      setIsValidPassword(false);
    } else { // 비밀번호 형식 통과 했을때
      setIsValidPassword(true);
    }
  };
  
   // 비밀번호체크값 바뀔때마다 비밀번호와 일치하는지 검사
  const handleInputPwdCh = (e) => {
    setPasswordCheck(e.target.value);
    if (password.length < 1 || e.target.value.length < 1) {
      setIsPwdDoubleCk(false);
      // 비밀번호가 같다면 일치
    }else if (password === e.target.value) {
      setIsPwdDoubleCk(true);
      // 비밀번호가 같지 않다면 불일치
    } else {
      setIsPwdDoubleCk(false);
    }
  };
  
  // 이름 값 바뀔때마다 유효성검사
  const handleInputName = (e) => {
    setName(e.target.value)
    if (!isName(e.target.value)) { 
      setIsValidName(false);
    } else { // 이름 형식 통과 했을때
      setIsValidName(true);
    }
  };

  // 모바일 값 바뀔때마다 유효성검사
  const handleInputPhone = (e) => {
    setPhone(e.target.value);
    if (!isPhone(e.target.value)) { 
      setIsValidPhone(false);
    } else { // 전화번호 형식 통과 했을때
      setIsValidPhone(true);
    }
  };

  //termCheck 다음 버튼 누를 때 상태 업데이트
  const nextStep = () => {
    setNextValid(true)
  }

  return (
    <>
    {nextValidChk ?
      <> 
      { history.push({
         pathname : '/likeform',
         state : {email :email, password :password, name:name, phone:phone}
       })}
       
      </>
    :
    <div>
      <center>
        <img className='logo' src={logo}/>
        <form className='signForm' onSubmit={(e) => e.preventDefault()}>

          <div>
            <div className='signTitle'>이메일</div>
            <div className='emailBox'>
              <input className={isValidEmail === false ? '' : 'pass'}
                value={email}
                type="email"
                placeholder="ex) simsimae@love.com"
                onChange={(e) => handleInputEmail(e)}
              ></input>
              <button className='emailDoubleCheck'
                onClick={() => emailDCEvent(email)}
              >중복확인</button>
            </div>
          </div>

          <div>
            <div className='signTitle'>비밀번호</div>
            <input className={isValidPassword ===false ? '' : 'pass'}
            value={password}
              type="password"
              placeholder="영문,숫자 조합 6~10자"
              onChange={(e) => handleInputPwd(e)}
            ></input>
          </div>

          <div>
            <div className='signTitle'>비밀번호 재확인</div>
            <input className={isPwdDoubleCk === false ? '' : 'pass'}
              value={passwordCheck}
              type="password"
              placeholder="비밀번호 재입력"
              onChange={(e) => handleInputPwdCh(e)}
            ></input>
          </div>

          <div>
            <div className='signTitle'>이름</div>
            <input className={isValidName === false ? '' : 'pass'}
              value={name}
              type='text'
              placeholder="이름"
              onChange={(e) => handleInputName(e)}
            ></input>
          </div>
          
          <div>
            <div className='signTitle'>전화번호</div>
            <input className={isValidPhone === false ? '' : 'pass'}
              value={phone}
              type='tel'
              placeholder="'-' 를 제외한 숫자만 입력"
              onChange={(e) => handleInputPhone(e)}
            ></input>
          </div>

            <TermCheck isValidEmail={isValidEmail} isValidPassword={isValidPassword} isPwdDoubleCk={isPwdDoubleCk} isValidName={isValidName} isValidPhone={isValidPhone} nextStep={nextStep} emailCheck={emailCheck}/>

          </form>

      </center>
    </div>
    }
   </>
  )
  
}


export default withRouter(Signup);