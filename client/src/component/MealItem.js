import React from 'react'
import styled, { StyledComponent } from 'styled-components'


const MealItem=()=> {
    return (
     <>
           <div className="card">
               <img src="https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg"/>
               <div className="info">
                   <h2>Pancake</h2>
                   <p>American Food</p>
                 </div>
               <div className="recipe">
                     <p>Preheat the oven to 180°C/350°F/Gas Mark 4.
                      Grease and line the base of an 8 in round spring form cake tin with baking parchment Break the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. </p>
                
                   <h2>Recipe</h2>
                   <img src="https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg"/>
                   <a href="https://themealdb.com/watch?v#IEDEtZ4UvtI">Watch video</a>
               </div>
            
         </div>
     </>
        
    )
}




export default MealItem
