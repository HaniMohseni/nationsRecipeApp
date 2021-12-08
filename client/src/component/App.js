import React from 'react';
import { BrowserRouter as Browser, Switch, Route, Router, Link } from 'react-router-dom';

import styled from 'styled-components';
import "./GlobalStyles"
import RandomMeal from "./RandomMeal"
import Topbar from "./Topbar";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

function App() {
  const user = true;
  return (
    
    <Router >
      <Topbar/>

      <Switch>
            <Route exact path="/">
               <Home/>
           </Route>

           <Route exact path="/Register">
             {user ? <Home/> : <Register/>}
           </Route>

           <Route exact path="/Login">
              {user ? <Home/> : <Login/>}
            </Route>

      </Switch>
           
    </Router>
    
  );
}

export default App;
