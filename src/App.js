
import React, { useState  } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import './css/App.css';
import axios from 'axios';

import Signup from "./pages/Signup";
import Main from './pages/Main';
import LoginMain from './pages/LoginMain';
import Mypage from "./pages/Mypage";
import LikeForm from "./pages/LikeForm";

 const App = () => {


  return (
    <Switch>
      <Route
        exact
        path='/'
        component={Main}
        render={() => <Main />}
      /> 
      <Route
        exact
        path='/loginMain'
        component={LoginMain}
        render={() => <LoginMain />}
      /> 
      <Route exact path='/signup' render={() => <Signup />} />
      <Route exact path='/likeForm' render={() => <LikeForm />} />
      <Route
        exact
        path='/mypage'
        render={() => <Mypage />}
      />
    </Switch>
  );
}

export default withRouter(App);
