
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import './css/App.css';

import Signup from "./pages/Signup";
import Main from './pages/Main';
import LikeForm from "./pages/LikeForm";

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} render={() => <Main />} />
      <Route exact path='/signup' render={() => <Signup />} />
      <Route exact path='/likeform' render={() => <LikeForm />} />
    </Switch>
  );
}

export default withRouter(App);
