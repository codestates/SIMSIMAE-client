import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Interest extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <>
        <div className='interestDiv'>
          <form className='disablelForm'>
            <h2 className='interestTitle'>나의 관심사</h2>
            <section className='interestSection'>
              <div className='leftDiv'>
              <button 
                className='likeCheck'
                type='button'
                onClick={this.collectBtn}
                >음식</button>
              <button 
                className='likeCheck'
                type='button'
                onChange={this.collectBtn}
              >쇼핑</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >IT</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >방송</button>
              <button 
              className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >유머</button>
              </div>
              <div className='rightDiv'>
                <button 
                className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >동물</button>
                <button 
                className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >연애</button>
                <button 
                className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >???</button>
                <button 
                className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >???</button>
                <button 
                className='likeCheck'
                type='button'
                onChange={this.collectBtn}
                >???</button>
              </div>
            </section>
          </form>
        </div>
      </>
    )
  }

}


export default withRouter(Interest)
