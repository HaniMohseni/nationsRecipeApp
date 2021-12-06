
import React, {useState, useEffect} from 'react'


// TODOS
// featured meals
// search meals 
// by using this free api: (https://www.themealdb.com/api.php)

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php"

const RandomMeal=()=> {
    const [meal,setMeal]=useState(undefined);

    useEffect(()=>{

        async function getMeal(){
        const res = await fetch (API_URL);
        const data = await res.json();

            setMeal(data.meals[0]);
        }

        getMeal();
    },[]);

    if(!meal) return null;

    return (
        <div>
         <h2> {meal.strMeal}</h2>  
        </div>
    )
}

export default RandomMeal
