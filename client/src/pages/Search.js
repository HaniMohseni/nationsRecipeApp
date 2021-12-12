import React from 'react'
import Meal from '../component/Meal'
import AreaMeal from '../component/AreaMeal'
import "../component/searchStyles.css"
import LoginBackground from "../assets/LoginBackground.jpg"
import styled from 'styled-components'
import { useState } from 'react'


const Search=()=> {

  const [answer, setAnswer] = useState(false);
  const toggleAnswer = () => setAnswer(!answer);

  return (
        <>
         <div className="heading">
                 <h1>Search Your Food Recipe</h1>
                 
         </div>

                 
      <div>
        <input type="radio" value={true} name="option" onClick={toggleAnswer} />
        <span>Search Based on Name</span>
        <input type="radio" value={false} name="option" onClick={toggleAnswer} /> 
        <span>Search Based on Area</span>
      </div>

      {/* to have conditional rendering, based on selected radio button,
       I will render different search component(Search based on name or search based on Area) */}

      {answer ? <div><AreaMeal/> </div> : <div><Meal/></div>}
          
      </>

      
     
    )
}

const SearchContain = styled.div`
display: flex;
align-items:center;

`

export default Search
