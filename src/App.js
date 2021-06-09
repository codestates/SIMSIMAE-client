import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Nav from "./pages/Nav";
import axios from "axios";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
      userinfo: null,
    };
  }
    
  handleResponseSuccess() {
   /*  axios.get('https://localhost:4000/user')
    .then(res => {
      this.setState({ isLogin: true, userinfo: res.data });
      this.props.history.push("/user");
    }).catch(err => console.log(err)); */
  }

  handleLogout() {
    /* axios.post('https://localhost:4000/loginout')
    .then((res) => {
      this.setState({ userinfo: res.data, isLogin: false });
      this.props.history.push("/login");
    }).catch(err => console.log(err)); */
  }


  render() {
    const { isLogin, userinfo } = this.state;

    return (
      <div>
        <Switch>
          <Route
            exact
            path='/nav'
            render={() => (
              <Nav />
            )}
          /> 
          <Route
            exact
            path='/login'
            render={() => (
              <Login handleResponseSuccess={this.handleResponseSuccess.bind(this)} />
            )}
          /> 
          <Route exact path='/signup' render={() => <Signup />} />
          <Route
            exact
            path='/mypage'
            render={() => <Mypage userinfo={userinfo} handleLogout={this.handleLogout.bind(this)}/>}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
