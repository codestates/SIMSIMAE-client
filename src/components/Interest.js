import React ,{ useState } from "react";
import { withRouter } from "react-router-dom";


const Interest = ({checkHandler, updateActivation, update,
  foodState, sportsState,travelState,animalsState, shoppingState, gameState,healthState
  ,entertainmentState,loveState,itState
}) => {

  // form태그 새로고침 방지 함수
  const handleSubmit = (e)=>  {
    e.preventDefault(); 
  }

  return(
    <>
      <div className='tabForm'>
        <div className='interestDiv'>
          <form className='disablelForm' onSubmit={handleSubmit}>
            <h2 className='interestTitle'>나의 관심사</h2>
            <form className='checkForm' onSubmit={handleSubmit}>
              <section className='checkSection1'>
                <div className='interDiv'>
                  <input type='checkbox'
                    className='likeCheck food'
                    value='food'
                    checked={foodState}
                    disabled={!update ? true : false}
                    onChange={(e) => checkHandler(e)}
                  />
                  <span>음식</span>
                </div>
                <div className='interDiv'>
                  <input type='checkbox'
                    className='likeCheck sports'
                    value='sports'
                    checked={sportsState}
                    disabled={!update ? true : false}
                    onChange={(e) => checkHandler(e)}
                    />
                  <span>스포츠</span>
                </div>
                <div className='interDiv'>
                  <input type='checkbox'
                    className='likeCheck travel'
                    value='travel'
                    checked={travelState}
                    disabled={!update ? true : false}
                    onChange={(e) => checkHandler(e)}
                    />
                    <span>여행</span>
                </div>
                <div className='interDiv'>
                  <input type='checkbox'
                    className='likeCheck animals'
                    value='animals'
                    checked={animalsState}
                    disabled={!update ? true : false}
                    onChange={(e) => checkHandler(e)}
                    />
                  <span>동물</span>
                </div>
                <div className='interDiv'>                
                  <input type='checkbox'
                    className='likeCheck shopping'
                    value='shopping'
                    checked={shoppingState}
                    disabled={!update ? true : false}
                    onChange={(e) => checkHandler(e)}
                  />
                  <span>쇼핑</span>
                </div>
                </section>
              <section className='checkSection2'>
                <div className='interDiv'>  
                  <input type='checkbox'
                    className='likeCheck game'
                    value='game'
                    checked={gameState}
                    disabled={!update ? true : false}
                    onChange={(e) => checkHandler(e)}
                  />
                <span>게임</span>
                </div>
                <div className='interDiv'>  
                <input type='checkbox'
                  className='likeCheck entertainment'
                  value='entertainment'
                  checked={entertainmentState}
                  disabled={!update ? true : false}
                  onChange={(e) => checkHandler(e)}
                />
                <span>방송</span>
                </div>
                <div className='interDiv'>    
                  <input type='checkbox'
                    className='likeCheck health'
                    value='health'
                    checked={healthState}
                    disabled={!update ? true : false}
                    onChange={(e) => checkHandler(e)}
                  />  
                  <span>건강</span>
                </div>
                <div className='interDiv'>  
                  <input type='checkbox'
                    className='likeCheck love'
                    value='love'
                    checked={loveState}
                    disabled={!update ? true : false}
                    onChange={(e) => checkHandler(e)}
                    />
                  <span>연애</span>
                </div>
                <div className='interDiv'>  
                  <input type='checkbox'
                  className='likeCheck it'
                  value='it'
                  checked={itState}
                  disabled={!update ? true : false}
                  onChange={(e) => checkHandler(e)}
                  />
                  <span>IT</span>
                </div>
              </section>
            </form>
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