// Fetching dada based on "Ingredient" for search page /one of the options of radio buttons
// sending the date to IngreMealItem (templet) component


import React from 'react'
import { useState } from 'react';
import styled, { StyledComponent } from 'styled-components'
import {injectGlobal} from  'styled-components';
import IngreMealItem from './IngreMealItem'

const IngreMeal=()=> {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState([]);
    
    const searchMeal=(evt)=>{
        if(evt.key=="Enter"){
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
             .then(res=>res.json())
             .then(data=>{
                //console.log(data.meals) 
                setMeal(data.meals)
             })
             
        }
    }

   


    return (
        <div className="main">
             <div className="heading">
              
             </div>

             <div className="searchBox"> 
                  <i class="fas fa-search"></i>
                  <input type="search" className="search-bar" placeholder="Enter the Main Ingredient" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}></input>
                  
             </div>

             <div className="container">

                 {
                     (Mymeal==null)? <p>Not Found</p> : Mymeal.map((res)=>{
                         return(
                            <IngreMealItem data={res}/>
                         )
                     })
                     


                 }
              
             </div>
 
        </div >
        
    )
}



export default IngreMeal
