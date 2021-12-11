
import React, {useState, useEffect} from 'react'
import "./randomMeal.css"
import "./GlobalStyles"
import Modal from './Modal'

// TODOS
// featured meals
// by using this free api: (https://www.themealdb.com/api.php)

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php"

const RandomMeal=()=> {
    const [meal,setMeal]=useState(undefined);
    const [showModal,setShowModal]=useState(false);

    const openModal=()=>{
        setShowModal(prev => !prev)

    }

    useEffect(()=>{

        async function getMeal(){
        const res = await fetch (API_URL);
        const data = await res.json();
            console.log(data)
            setMeal(data.meals[0]);
        }

        getMeal();
    },[]);

    if(!meal) return null;

    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strArea,
        strCategory
    } = meal;

    return (
<section className="container">
  <h2>Featured Meal</h2>
   <div className="meal">
    <div className="meal-img"> 
        <img src={strMealThumb} alt={strMeal}/>
    </div>
    <div className="meal-details"> 
           <h3 className="meal-title"> {strMeal}</h3>
           <p className="meal-instruction">
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
           <button className="btn" onClick={openModal}>
               View Recipe<i className="fas fa-arrow-alt-circle-rught"></i>
           </button>
           <Modal showModal={showModal} setShowModal={setShowModal} strInstructions={strInstructions} strMealThumb={strMealThumb}/>
        </div>
 </div>
 </section>
    );
};

export default RandomMeal
