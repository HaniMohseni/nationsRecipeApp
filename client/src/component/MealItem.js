//A template in which fields and fetched data from TheMeal api (in Meal component)
// are embedded in this structure, getMeal is coming from Meal component and contains all the fields
import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import RecipeAction from './RecipeAction'
const MealItem=(getMeal)=> {
    //console.log(getMeal.data)
    return (
     
           <div className="card" >
               <img src={getMeal.data.strMealThumb}/>
               <div className="info">
                   <h2>{getMeal.data.strMeal}</h2>
                   <p>{getMeal.data.strArea}food</p>
                 </div>
               <div className="recipe">
               <h2>Recipe</h2>
                     <p>{getMeal.data.strInstructions}</p>
                
                   
                   <img src={getMeal.data.strMealThumb}/>
                   <a href={getMeal.data.strSource}>Watch video</a>
               </div>
               <div>  
                   <RecipeAction Meal={getMeal}/>
               </div>

         </div>
     
        
    )
}
export default MealItem