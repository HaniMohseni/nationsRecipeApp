import React, {useState, useEffect} from 'react'

const API_URL = "www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

const Categorysearch=()=> {
    const [meal, setMeal] = useState(undefined);

    useEffect(async()=>{

        async function getMeal(){
            const res = await fetch(API_URL);
            const data= await res.json();
            setMeal(data.meals[0]);


        }
       getMeal();

    }, []);


    if(!meal) return null;

    return (
        <div>
          <h1> {meal.strMeal} </h1>
        </div>
    )
}

export default Categorysearch
