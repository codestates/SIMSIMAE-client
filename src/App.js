import React from 'react';
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
      <div>
        <h1>Hello World</h1>
      </div>

    )
  }

}

export default App;
