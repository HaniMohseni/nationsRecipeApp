// Fetching dada based on "Area" for search page /this component is one of the options of radio buttons
// sending the date to AreaMealItem (templet) component


import React from 'react'
import { useState } from 'react';
import styled, { StyledComponent } from 'styled-components'
import {injectGlobal} from  'styled-components';
import AreaMealItem from './AreaMealItem'

const AreaMeal=()=> {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState([]);
    
    const searchMeal=(evt)=>{
        if(evt.key=="Enter"){
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${search}`)
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
                  <input type="search" className="search-bar" placeholder="Enter Your Food Area" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}></input>
                  
             </div>

             <div className="container">

                 {
                     (Mymeal==null)? <p>Not Found</p> : Mymeal.map((res)=>{
                         return(
                            <AreaMealItem data={res}/>
                         )
                     })
                     


                 }
              
             </div>
 
        </div >
        
    )
}



export default AreaMeal
