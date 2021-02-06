import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-router'

import UserProfile from './componentsV2/containers/userProfile';
import Navbar from './componentsV2/containers/Navbar';

// sections - paths
import AllPublications from './sections/AllPublications';
import HelpersContainer from './componentsV2/containers/HelpersContainer';
import RegistrationV2 from './sections/Registration';
import LogInV2 from './sections/LogIn';


import './App.scss';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Navbar />
        <div id="app">
          <Switch>
            <Route path="/my-profile">
              <UserProfile />
            </Route>
            <Route path="/registration">
              <RegistrationV2 />
            </Route>
            <Route path="/login">
              <LogInV2 />
            </Route>
            <Route path="/">
              <AllPublications />
            </Route>
          </Switch>

          <HelpersContainer />
        </div>
      </Router>
    );
  }
}

export default hot(App);
