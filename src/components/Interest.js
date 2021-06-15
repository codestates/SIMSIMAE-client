import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Interest = ({updateActivation, update }) => {
  return(
    <>
      <div className='tabForm'>
        <div className='interestDiv'>
          <form className='disablelForm'>
            <h2 className='interestTitle'>나의 관심사</h2>
            <section className='interestSection'>
              <div className='leftDiv'>
              <button 
                className='likeCheck'
                type='button'
                >음식</button>
              <button 
                className='likeCheck'
                type='button'
              >쇼핑</button>
              <button 
              className='likeCheck'
                type='button'
                >IT</button>
              <button 
              className='likeCheck'
                type='button'
                >방송</button>
              <button 
              className='likeCheck'
                type='button'
                >유머</button>
              </div>
              <div className='rightDiv'>
                <button 
                className='likeCheck'
                type='button'
                >동물</button>
                <button 
                className='likeCheck'
                type='button'
                >연애</button>
                <button 
                className='likeCheck'
                type='button'
                >???</button>
                <button 
                className='likeCheck'
                type='button'
                >???</button>
                <button 
                className='likeCheck'
                type='button'
                >???</button>
              </div>
            </section>
            <div className='update'>
              <button type='button' 
                className={update === true ? 'updateBtn' : 'updateBtnAlone'}
                onClick={() => updateActivation()}>
                {update === true ? '취소' : '수정'}
                </button>
              <button type='submit' 
                className={update === true ? 'cpBtn' : 'cpBtnNone'}
                onClick={() => updateActivation()} >
                완료</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )

}

export default withRouter(Interest);