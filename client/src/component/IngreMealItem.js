//A template in which fields and fetched data from TheMeal api (in IngreaMeal component)
// are embedded in this structure, getMeal is coming from IngreMeal component and contains all the fields


import React from 'react'
import styled, { StyledComponent } from 'styled-components'


const IngreMealItem=(getMeal)=> {
    //console.log(getMeal.data)
    return (
     <>
           <div className="card">
               <img src={getMeal.data.strMealThumb}/>
               <div className="info">
                   <h2>{getMeal.data.strMeal}</h2>
                   <p>{getMeal.data.strArea}food</p>
                 </div>
               <div className="recipe">
               <h2>Recipe</h2>
                     <p>To see the recipe, please search the name of the food</p>
                                   
               </div>
            
         </div>
     </>
        
    )
}

export default IngreMealItem
