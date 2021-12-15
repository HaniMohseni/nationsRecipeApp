// This component is shown on the Featured meal page
// fetching a random meal from themeal external api and showing that as a featured meal
// by using this free api: (https://www.themealdb.com/api.php)

import React, {useState, useEffect} from 'react'
import "./randomMeal.css"
import "./GlobalStyles"
import Modal from './Modal'



const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php"

const RandomMeal=()=> {
    const [meal,setMeal]=useState(undefined);
    const [showModal,setShowModal]=useState(false);

// popup for full recipe by clicking on the button
    const openModal=()=>{
        setShowModal(prev => !prev)

    }

    useEffect(()=>{

        async function getMeal(){
        const res = await fetch (API_URL);
        const data = await res.json();
            console.log(data)
            //meals is coming from external api
            setMeal(data.meals[0]);
        }

        getMeal();
    },[]);

    if(!meal) return null;

    // all this fields are fetching from api
    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strArea,
        strCategory
    } = meal;

    return (
<section className="container1">
  <h2>Featured Meal</h2>
   <div className="meal">
    <div className="meal-img"> 
        <img src={strMealThumb} alt={strMeal}/>
    </div>
    <div className="meal-details"> 
           <h3 className="meal-title"> {strMeal}</h3>
           <p className="meal-instruction">
               {/* To show just first 200 words of recipe */}
               {strInstructions.substring(0,200)+ "..."}
            </p>
           <ul className="meal-info">
               <li>
                   Category:
                   <strong>{strCategory}</strong>
               </li>
               <li>
                   Area:
                   <strong>{strArea}</strong>
               </li>
           </ul>
            {/* button to show the full recipe */}
           <button className="btn" onClick={openModal}>
               View Recipe<i className="fas fa-arrow-alt-circle-rught"></i>
           </button>
           {/* Sending the recipe and photo of food to modal component */}
           <Modal showModal={showModal} setShowModal={setShowModal} strInstructions={strInstructions} strMealThumb={strMealThumb}/>
        </div>
 </div>
 </section>
    );
};

export default RandomMeal
