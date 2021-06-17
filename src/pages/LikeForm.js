import React, { useState } from "react";
import { withRouter , useHistory } from "react-router-dom";
import FavoriteCheck from "../components/FavoriteCheck";
import '../css/Like.css';
import axios from 'axios';
import logo from '../img/SIMSIMAE-logo.png';
import { useLocation } from "react-router";

const LikeForm = (props) => {
  let history = useHistory();
  const uselocation = useLocation();
  const { email , password, name, phone } = uselocation.state;  
  console.log('email, password, name, phone', email, password, name, phone)

  const [gender , setGender ] = useState(null);
  const [age , setAge ] = useState(null);
  const [userlocation , setLocation ] = useState(null);
  const [checkedItems, setCheckedItems] = useState(new Set([]));


  const checkedItemHandler = (value, isChecked) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, value]);
    } else if (!isChecked && checkedItems.includes(value)) {
      const copy = checkedItems.slice()
      const index = copy.indexOf(value)
      copy.splice(index, 1)
      setCheckedItems(copy);
    }
  };
  console.log('checked', checkedItems)

  const getGender = (e) => {
    console.log(e.target.value)
    setGender(e.target.value)
  }
  console.log('gender', gender)

  const getAge = (e) => {
    setAge(e.target.value)
  }
  console.log('age', age)
  const getLocation = (e) => {
    //console.dir(e.target)
    setLocation(e.target.value)
  }

  // 회원가입 버튼 클릭 시 서버통신
  const handleSignup = () => {
    
    axios.post('http://www.simsimae-server.site/user/signup',
    { email, password, name, phone, gender, age, userlocation, favorite: checkedItems },
    {'Content-Type':'application/json', withCredentials: true })
    .then(res => {
      alert('가입성공!')
      console.log('완료res:::',res)
    }).then(res =>{
      history.push('/')
    })
    
  }
 
  return(
    <div >
      <center>
        <img className='logo' src={logo}/>
        <p className='likeTitle'>좋아하는 관심사를 골라주세요</p>
        <div className='favoriteCheckForm'>
        <FavoriteCheck checkedItemHandler={checkedItemHandler}/>
          <hr></hr>
          <section className='optionSection'>
            <div className='genderTitle'>성별</div>
            <div className='genderOption'>
              <div className='genderSet'>
                <input type='radio' name='gender' className='optionCheck' value='M' onClick={getGender} />
                <span>남성</span>
              </div>
              <div className='genderSet'>
                <input type='radio' name='gender' className='optionCheck' value='F' onClick={getGender} />
                <span>여성</span>
              </div>
            </div>
            <div className='ageTitle'>나이대</div>
            <div className='ageOption'>
              <div className='ageSet'>
                <input type='radio' name='age' className='optionCheck' value='1' onClick={getAge}/>
                <span>10대</span>
              </div>
              <div className='ageSet'>
                <input type='radio' name='age' className='optionCheck' value='2' onClick={getAge}/>
                <span>20대</span>
              </div>
              <div className='ageSet'>
                <input type='radio' name='age' className='optionCheck' value='3' onClick={getAge}/>
                <span>30대</span>
              </div>
              <div className='ageSet'>
                <input type='radio' name='age' className='optionCheck' value='4' onClick={getAge}/>
                <span>40대</span>
              </div>
              <div className='ageSet'>
                <input type='radio' name='age' className='optionCheck' value='5' onClick={getAge}/>
                <span>50대 이상</span>
              </div>
            </div>
            <div className='locationTitle'>지역</div>
            <div className='locationOption'>
              <div className='locationSet'>
                <input type='radio' name='location' className='optionCheck' value='국내' onClick={getLocation}/>
                <span>국내</span>
              </div>
              <div className='locationSet'>
                <input type='radio' name='location' className='optionCheck' value='해외' onClick={getLocation}/>
                <span>해외</span>
              </div>
            </div>
          </section>
          <button
            className="completeBtn"
            onClick={handleSignup}
            type='submit'
          >완료</button>
          </div>
      </center>
      
    </div>
  )
}

export default withRouter(LikeForm);