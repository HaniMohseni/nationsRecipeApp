// I wil show the list of saved favorite foods for each user in the profile page


import React, {useContext} from 'react'
import { UserConstext } from '../component/UserContext'
import { useEffect } from 'react'
import FavoriteMealItem from '../component/FavoriteMealItem'
//const Meals = []

const Profile=()=> {
    const {favoritelst, setFavoritelst} = useContext(UserConstext)

   
    //  useEffect(() => {
    //     Meals.map((res)=>{
    //         return(<MealItem data={res}/>)
    //         })



    //      return () => {
    //          console.log('Something went wrong!')
    //      }
    //  }, [favoritelst])


    return (
        <div>
           You have {favoritelst.length} meals in your list.

           
           { <div>
               { (favoritelst.length==0)? <p>Nothing Found to Display ... </p> : favoritelst.map((res)=>{
                   return(<FavoriteMealItem data={res.data}/>)
                   })
                }
        
            </div> }

        </div>

    )
}
export default Profile