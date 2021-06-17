import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Account from '../components/Account.js';
import Interest from '../components/Interest.js';
import LikeQR from '../components/LikeQR.js';
import $ from "jquery";
import '../css/tap.css';

const MenuTab = ({userinfo}) => {
  const [activeTab , setActiveTab ] = useState(0);
  const [update , setUpdate ] = useState(false);
  const [foodState , setfoodState] = useState($('.food').is(":checked"));
  const [sportsState , setsportsState] = useState($('.sports').is(":checked"));
  const [travelState , settravelState] = useState($('.travel').is(":checked"));
  const [animalsState , setanimalsState] = useState($('.animals').is(":checked"));
  const [shoppingState , setshoppingState] = useState($('.shopping').is(":checked"));
  const [gameState , setgameState] = useState($('.game').is(":checked"));
  const [healthState , sethealthState] = useState($('.health').is(":checked"));
  const [entertainmentState , setentertainmentState] = useState($('.entertainment').is(":checked"));
  const [loveState , setloveState] = useState($('.love').is(":checked"));
  const [itState , setitState] = useState($('.it').is(":checked"));
  const [checkedItems, setCheckedItems] = useState(new Set([]));

  // 체크박스 클릭하면 관심사 배열에 추가
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
  
  // 탭 관심사 눌렀을때 기본 관심사 불러오기
  const clickHandler = (id) => {
    setActiveTab(id)
    if( id === 1 ){
      defaultCheck()
    }
  };
  
  // 관심사 수정 버튼 (수정<->취소,완료)
  const updateActivation = () => {
    setUpdate(!update)
  }

  // 불러온 userinfo의 체크 기본 상태 설정
  const defaultCheck = () => {

    let favoriteArr = ['food','sports','travel','animals','shopping','game','health','entertainment','love','it']
    let user = userinfo.favorite;
      for(let i=0; i<user.length; i++){
        if( favoriteArr.includes(user[i]) ){
          switch (user[i]) {
            case 'food' : setfoodState(true)
            break;
            case 'sports' : setsportsState(true)
            break;
            case 'travel' :settravelState(true) 
            break;
            case 'animals' : setanimalsState(true)
            break;
            case 'shopping' : setshoppingState(true)
            break;
            case 'game' : setgameState(true)
            break;
            case 'health' : sethealthState(true)
            break;
            case 'entertainment' : setentertainmentState(true)
            break;
            case 'love' : setloveState(true) 
            break;
            case 'it' : setitState(true)
            break;
          }
        }
      }
    }

  // 타겟에 따라 상태 반대로업데이트 함수
  const checkHandler = ({ target }) => {
    checkedItemHandler(target.value, target.checked)
    switch (target.value) {
      case 'food' : setfoodState(!foodState)
      break;
      case 'sports' : setsportsState(!sportsState)
      break;
      case 'travel' :settravelState(!travelState) 
      break;
      case 'animals' : setanimalsState(!animalsState)
      break;
      case 'shopping' : setshoppingState(!shoppingState)
      break;
      case 'game' : setgameState(!gameState)
      break;
      case 'health' : sethealthState(!healthState)
      break;
      case 'entertainment' : setentertainmentState(!entertainmentState)
      break;
      case 'love' : setloveState(!loveState) 
      break;
      case 'it' : setitState(!itState)
      break;
    }
  };

  const obj = ({
    0: <Account userinfo={userinfo}/>,
    1: <Interest checkHandler={checkHandler} updateActivation={updateActivation} update={update} 
    foodState={foodState} sportsState={sportsState} travelState={travelState} animalsState={animalsState}
    shoppingState={shoppingState} gameState={gameState} healthState={healthState} entertainmentState={entertainmentState}
    loveState={loveState} itState={itState}/>,
    2: <LikeQR userinfo={userinfo}/>,
  });
  
  return (
    <div className="wrapper">
      <div className="tabs">
        <div 
        className={activeTab === 0 ? 'currentTab' : 'one'} 
        onClick={() => clickHandler(0)}>
          <p>내 계정</p>
        </div>
        <div 
        className={activeTab === 1 ? 'currentTab' : 'two'} 
        onClick={() => clickHandler(1)}>
          <p>관심사</p>
          </div>
        <div 
        className={activeTab === 2 ? 'currentTab' : 'three'} 
        onClick={() => clickHandler(2)}>
          <p>관심 QR</p>
        </div>
      </div>
      <div className="contents">
        {obj[activeTab]}
      </div>
      
    </div>
  );
  
}

export default withRouter(MenuTab);