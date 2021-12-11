import React from 'react'
import { useState } from 'react';
import styled, { StyledComponent } from 'styled-components'
import {injectGlobal} from  'styled-components';
import MealItem from './MealItem'

const Meal=()=> {
    const[search,setSearch]=useState();
    const[Mymeal,setMeal]=useState();
    
    const searchMeal=(evt)=>{
        if(evt.key=="Enter"){
            console.log("Hello");
        }
    }
    return (
        <div className="main">
             <div className="heading">
                 <h1>Search Your Food Recipe</h1>
                 
                 
             </div>

             <div className="searchBox"> 
                  <i class="fas fa-search"></i>
                  <input type="search" className="search-bar" placeholder="Enter your food name" onChange={(e)=>setSearch(e.target.value)} value = {search} onKeyPress={searchMeal}></input>
                  
             </div>

             <div className="container">
                 <MealItem/>
               
             </div>
 
        </div >


        
    )
}



export default Meal
