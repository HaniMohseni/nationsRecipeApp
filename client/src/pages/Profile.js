import React, {useContext} from 'react'
import { UserConstext } from '../component/UserContext'
import { useEffect } from 'react'
import MealItem from '../component/MealItem'
const Meals = []

const Profile=()=> {
    const {favoritelst, setFavoritelst} = useContext(UserConstext)
    
    useEffect(() => {
        favoritelst.forEach(element => {
            console.log(element)
            fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${element}`)
             .then(res=>res.json())
             .then(data=>{
                //console.log(data.meals) 
                Meals.push(data.meals[0])
             })
                     
        });
        return () => {
            console.log('Something went wrong!')
        }
    }, [favoritelst])


    return (
        <div>
           You have {favoritelst.length} meals in your list.

           <div>
               { (Meals.length!=0)? <p>Nothing Found to Display ... </p> : Meals.map((res)=>{
                   return(<MealItem data={res}/>)
                   })
                }
            </div>

        </div>
        
    )
}

export default Profile
