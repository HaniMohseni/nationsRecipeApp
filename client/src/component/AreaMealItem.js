//A template in which fields and fetched data from TheMeal api (in AreaMeal component)
// are embedded in this structure, getMeal is coming from AreaMeal component and contains all the fields



import React from 'react'
import styled, { StyledComponent } from 'styled-components'


const AreaMealItem=(getMeal)=> {
    
    return (
     <>
           <div className="card">
               <img src={getMeal.data.strMealThumb}/>
               <div className="info">
                   <h2>{getMeal.data.strMeal}</h2>
                   <p>{getMeal.data.strArea}food</p>
                 </div>
               <div className="recipe">
                     <p>{getMeal.data.strInstructions}</p>
                
                   <h2>Recipe</h2>
                   <img src={getMeal.data.strMealThumb}/>
                   <p>To see the recipe, please search the name of the food</p>
                   
               </div>
            
         </div>
     </>
        
    )
}




export default AreaMealItem
