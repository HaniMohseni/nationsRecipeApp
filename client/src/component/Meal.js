import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import {injectGlobal} from  'styled-components';
import MealItem from './MealItem'

const Meal=()=> {
    return (
        <div className="main">
             <div className="heading">
                 <h1>Search Your Food Recipe</h1>
                 <i class="fas fa-search"></i>
             </div>

             <div className="searchBox"> 
                  <input type="search" className="search-bar" placeholder="Enter your food name"></input>
             </div>

             <div className="container">
                 <MealItem/>
             </div>
 
        </div >


        
    )
}



export default Meal
