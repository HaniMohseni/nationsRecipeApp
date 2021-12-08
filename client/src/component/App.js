import React from 'react';
import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import "./GlobalStyles"
import RandomMeal from "./RandomMeal"
import Topbar from "./Topbar";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

function App() {
  return (
    
    <div >

      <Topbar/>
      <Register/>
      {/* <Login/> */}
      

      {/* <RandomMeal/> */}
      
    
    </div>
  );
}

export default App;
