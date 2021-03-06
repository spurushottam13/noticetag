import React, { Component } from 'react';
import './App.css';
import SignIN from './components/singin.js';
import SignUP from './components/signup.js';
import Main from './components/main.js';
import Dash from './components/dash';
import AddNoter from './components/addnoter';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <Router>
        <div> 
        <Route exact path="/" component={Main} />
        <Route path="/singup" component={SignUP} />
        <Route path="/signin" component={SignIN} />
        <Route path="/dash" component={Dash} />
        <Route path="/addNoter" component={AddNoter} />
        </div>
        </Router>
    );
  }
}

export default App;
