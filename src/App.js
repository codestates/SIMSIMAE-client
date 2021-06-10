import React from 'react';
import Main from "./components/Main";
import './css/App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
      accessToken: "",
    }
  }

  render() {

    //const { isLogin } = this.state;

    return(
      <div className='App'>
        <Main
        />
      </div>

    )
  }

}

export default App;
