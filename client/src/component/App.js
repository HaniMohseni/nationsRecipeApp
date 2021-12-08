import React from 'react';
import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import "./GlobalStyles"
import RandomMeal from "./RandomMeal"
import Topbar from "./Topbar";
import Home from '../pages/Home';

function App() {
  return (
    
    <div >

      <Topbar/>
      <Home/>

      <RandomMeal/>
      
    
    </div>
  );
}

export default App;
