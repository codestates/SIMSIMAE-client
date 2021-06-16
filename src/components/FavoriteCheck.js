import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import logo from '../img/SIMSIMAE-logo.png';

const FavoriteCheck = ({checkedItemHandler}) => {

const checkHandler = ({ target }) => {
  console.log('target', target.value)
  checkedItemHandler(target.value, target.checked);
};

return (
  <div>
    <img className='logo' src={logo}/>
    <p className='likeTitle'>좋아하는 관심사를 골라주세요</p>
    <form className='checkForm'>
      <section className='checkSection1'>
      <div className='checkDiv'>
        <input type='checkbox'
          className='likeCheck'
          value='food'
          onChange={(e) => checkHandler(e)} 
        />
        <span>음식</span>
        </div>
        <div className='checkDiv'>
          <input type='checkbox'
          className='likeCheck'
          value='sports'
          onChange={(e) => checkHandler(e)} 
          />
          <span>스포츠</span>
        </div>
        <div className='checkDiv'>
          <input type='checkbox'
          className='likeCheck'
          value='travel'
          onChange={(e) => checkHandler(e)} 
          />
          <span>여행</span>
        </div>
        <div className='checkDiv'>
          <input type='checkbox'
          className='likeCheck'
          value='animals'
          onChange={(e) => checkHandler(e)} 
          />
          <span>동물</span>
        </div>
        <div className='checkDiv'>
          <input type='checkbox'
          className='likeCheck'
          value='shopping'
          onChange={(e) => checkHandler(e)} 
          />
          <span>쇼핑</span>
        </div>
        </section>
        <section className='checkSection2'>
          <div className='checkDiv'>
            <input type='checkbox'
            className='likeCheck'
            value='game'
            onChange={(e) => checkHandler(e)} 
            />
            <span>게임</span>
          </div>
          <div className='checkDiv'>
            <input type='checkbox'
            className='likeCheck'
            value='entertainment'
            onChange={(e) => checkHandler(e)} 
            />
            <span>방송</span>  
          </div>
          <div className='checkDiv'>
            <input type='checkbox'
            className='likeCheck'
            value='health'
            onChange={(e) => checkHandler(e)}  
            />  
            <span>건강</span>
          </div>
          <div className='checkDiv'>
            <input type='checkbox'
            className='likeCheck'
            value='love'
            onChange={(e) => checkHandler(e)} 
            />
          <span>연애</span>
          </div>
          <div className='checkDiv'>
            <input type='checkbox'
            className='likeCheck'
            value='it'
            onChange={(e) => checkHandler(e)} 
            />
          <span>IT</span>
          </div>
          </section>
        </form>
      </div>
  )
}

export default withRouter(FavoriteCheck); 