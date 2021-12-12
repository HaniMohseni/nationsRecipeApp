import React from 'react'
import Meal from '../component/Meal'
import AreaMeal from '../component/AreaMeal'
import "../component/searchStyles.css"
import searchback from "../assets/searchback.jpg"
import styled from 'styled-components'
import { useState } from 'react'


const Search=()=> {

  const [answer, setAnswer] = useState(false);
  const toggleAnswer = () => setAnswer(!answer);

  return (
    <searchDiv>
        <>
         <div className="heading">
                 <h1>Search Your Food Recipe</h1>
                 <h4>SEARCH SETTING</h4>
                 
         </div>

                 
      <div className="radioDiv">
        <ul className="RadioUl">
          <li>
        <input type="radio" value={true} name="option" onClick={toggleAnswer} />
        <span>Search Based on Name</span>
        </li>
        <li>
        <input type="radio" value={false} name="option" onClick={toggleAnswer} /> 
        <span>Search Based on Area</span>
        </li>
        </ul>
      </div>

      {/* to have conditional rendering, based on selected radio button,
       I will render different search component(Search based on name or search based on Area) */}

      {answer ? <div><Meal/> </div> : <div><AreaMeal/></div>}
          
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
