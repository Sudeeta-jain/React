import React, { useState } from 'react';
import Login from './components/login/Login';
import './App.css';
import Home from './components/home/home';
import Register from './components/register/register';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";


function App() {

  //onst [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/home' >
          <Home /></Route>
          <Route exact path = "/"><Login /></Route>
          <Route exact path = "/register"><Register /></Route>
        </Switch>
      </Router>
      
    
    </div>
  );
}

export default App;
