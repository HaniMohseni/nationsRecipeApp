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
                   <a href={getMeal.data.strSource}>Watch video</a>
               </div>
            
         </div>
     </>
        
    )
}




export default AreaMealItem
