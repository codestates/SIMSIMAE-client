import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

import Account from '../components/Account.js';
import Interest from '../components/Interest.js';
import LikeQR from '../components/LikeQR.js';

const MenuTab = ({serinfo}) => {
  const [activeTab , setActiveTab ] = useState(0);
  const [update , setUpdate ] = useState(false);
  
  const clickHandler = (id) => {
    setActiveTab(id)
  };
  
  const updateActivation = () => {
    setUpdate(!update)
  }
  
  const obj = ({
    0: <Account userinfo={serinfo}/>,
    1: <Interest updateActivation={updateActivation} update={update} />,
    2: <LikeQR />,
  });
  
  return (
    <div className="wrapper">
      <div className="tabs">
        <div 
        className={activeTab === 0 ? 'currentTab' : 'one'} 
        onClick={() => clickHandler(0)}>
          <p>계정 설정</p>
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
        {/* {this.state.obj[this.state.activeTab]} */}
        {obj[activeTab]}
      </div>
      
    </div>
  );
  
}

export default withRouter(MenuTab);