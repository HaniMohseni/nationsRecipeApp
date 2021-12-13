import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import styled from 'styled-components';
import "./GlobalStyles"
import Topbar from "./Topbar";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/Search';
import FeaturedMeal from '../pages/FeaturedMeal';
import GlobalStyles from './GlobalStyles';


function App() {
  const user = true;
  return (
    
    <Router >
      <Topbar/>

      <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="/Register" element={<Register />}/>
            <Route  path="/Login" element={<Login />}/>
            <Route  path="/Search" element={<Search />}/>
            <Route  path="/FeaturedMeal" element={<FeaturedMeal />}/>
                      
             {/* {user ? <Home/> : <Register/>} */}
      </Routes>
           
    </Router>
    
  );
}

export default App;
