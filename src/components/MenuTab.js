import React, { Component } from "react";
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'

import '../css/tap.css';

const obj = {
  0: <First />,
  1: <Second />,
  2: <Third />,
}

export default class MenuTab extends Component {
  state = {
    activeTab: 0,
  }

  clickHandler = (id) => {
    this.setState({
      activeTab: id,
    })
  };

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
          {obj[this.state.activeTab]}
        </div>
      </div>
    );
  }
}
