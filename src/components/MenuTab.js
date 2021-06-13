import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'




class MenuTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
      update: false,
      obj : {
        0: <First userinfo={this.props.serinfo}/>,
        1: <Second />,
        2: <Third />,
      }
    }
  }

  clickHandler = (id) => {
    this.setState({
      activeTab: id,
    })
  };

  updateActivation = () => {
    this.setState({
      update: !this.state.update
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="tabs">
          <div 
          className={this.state.activeTab === 0 ? 'currentTab' : 'one'} 
          onClick={() => this.clickHandler(0)}>
            <p>계정 설정</p>
          </div>
          <div 
          className={this.state.activeTab === 1 ? 'currentTab' : 'two'} 
          onClick={() => this.clickHandler(1)}>
            <p>관심사</p>
            </div>
          <div 
          className={this.state.activeTab === 2 ? 'currentTab' : 'three'} 
          onClick={() => this.clickHandler(2)}>
            <p>관심 QR</p>
          </div>
        </div>
        <div className="contents">
          {this.state.obj[this.state.activeTab]}
        </div>
        <div className='update'>
          <button type='submit' 
          className={this.state.update === true ? 'updateBtn' : 'updateBtnAlone'}
          onClick={this.updateActivation}>
            {this.state.update === true ? '취소' : '수정'}
            </button>
          <button 
          className={this.state.update === true ? 'cpBtn' : 'cpBtnNone'}
          onClick={this.updateActivation} >
            완료</button>
        </div>
      </div>
    );
  }
}

export default withRouter(MenuTab);