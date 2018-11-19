// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Welcome from './components/welcome.js';
import Repolist from './components/repolist.js';

export default class App extends Component{
  render(){
    return(
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="Welcome" component={Welcome} title="Welcome" initial={true} />
          <Scene key="Repolist" component={Repolist} title="Repolist" />
        </Scene>
      </Router>
    );
  }
}
