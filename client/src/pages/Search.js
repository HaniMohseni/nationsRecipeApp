import React from 'react'
import Meal from '../component/Meal'
import AreaMeal from '../component/AreaMeal'
import IngreMeal from '../component/IngreMeal'
import "../component/searchStyles.css"
import styled from 'styled-components'
import { useState } from 'react'


const Search=()=> {

  const [displayA, setDisplayA] = useState(false);
  const [displayB, setDisplayB] = useState(false);
  const [displayC, setDisplayC] = useState(false);

  const showA = () => {
    setDisplayA(true);
    setDisplayB(false);
    setDisplayC(false);
  }
  const showB = () => {
    setDisplayA(false);
    setDisplayB(true);
    setDisplayC(false);
  };
  const showC = () => {
    setDisplayA(false);
    setDisplayB(false);
    setDisplayC(true);
  };

  return (
    <div>
        <>
         <div className="heading">
                 <h1>Search Your Food Recipe</h1>
                    
         </div>

                 
      <div className="radioDiv">
        <ul className="RadioUl">
        <li>
        <input type="radio" value={true} name="option" onClick={showA} /><label for="first">{"  "}</label>
        <span>Based on Name</span>
        </li>

        <li>
        <input  type="radio" value={false} name="option"  onClick={showB} /><label for="second">{"  "}</label> 
        <span>Based on Area</span>
        </li>

        <li>
        <input  type="radio" value={false} name="option"  onClick={showC} /> <label for="third">{}</label>
        <span>Based on Ingredient</span>
        </li>

        </ul>
      </div>

      {/* to have conditional rendering, based on selected radio button,
       I will render different search component(Search based on name, Area or ingredient) */}

          {displayA && <div><Meal/></div>}
          {displayB && <div><AreaMeal/></div>}
          {displayC && <div><IngreMeal/></div>}
          
      </>
    </div>
      

      
     
    )
}





export default Search
