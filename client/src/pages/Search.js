import React from 'react'
import Meal from '../component/Meal'
import AreaMeal from '../component/AreaMeal'
import IngreMeal from '../component/IngreMeal'
import "../component/searchStyles.css"
import searchback from "../assets/searchback.jpg"
import styled from 'styled-components'
import { useState } from 'react'


const Search=()=> {

  const [displayA, setDisplayA] = useState(true);
  const [displayB, setDisplayB] = useState(true);
  const [displayC, setDisplayC] = useState(true);

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
    <searchDiv>
        <>
         <div className="heading">
                 <h1>Search Your Food Recipe</h1>
                    
         </div>

                 
      <div className="radioDiv">
        <ul className="RadioUl">
        <li>
        <input type="radio" value={true} name="option" onClick={showA} />
        <span>Based on Name</span>
        </li>

        <li>
        <input  type="radio" value={false} name="option"  onClick={showB} /> 
        <span>Based on Area</span>
        </li>

        <li>
        <input  type="radio" value={false} name="option"  onClick={showC} /> 
        <span>Based on Ingredient</span>
        </li>

        </ul>
      </div>

      {/* to have conditional rendering, based on selected radio button,
       I will render different search component(Search based on name or search based on Area) */}

    
          {displayA && <div><Meal/></div>}
          {displayB && <div><AreaMeal/></div>}
          {displayC && <div><IngreMeal/></div>}
          
      </>
    </searchDiv>
      

      
     
    )
}

const SearchContain = styled.div`
display: flex;
align-items:center;`

const searchDiv=styled.div`
background-image: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,.8) 100%), url(${searchback});

`


export default Search
