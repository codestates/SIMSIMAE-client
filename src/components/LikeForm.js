import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import FavoriteCheck from "./FavoriteCheck";
import '../css/Like.css';
import axios from 'axios';


const LikeForm = (props) => {

  const [gender , setGender ] = useState(null);
  const [age , setAge ] = useState(null);
  const [location , setLocation ] = useState(null);
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
  console.log('location', location)
  // 회원가입 버튼 클릭 시 서버통신
  const handleSignup = () => {
    const {email, password, name, phone} = props;
    console.log('email, password, name, phone', email, password, name, phone)

      axios.post('http://13.209.10.136/user/signup',
      { email, password, name, phone, gender, age, location, favorite: checkedItems },
      {'Content-Type':'application/json', withCredentials: true })
      .then(res => {
        alert('가입성공!')
        console.log('완료res:::',res)
        //this.props.history.push("/");
    })
  
  }
 
  return(
    <div >
      <center>
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
              type='submit'
              onClick={handleSignup}
          >완료</button>
        
      </center>
    </div>
  )
}

export default withRouter(LikeForm);