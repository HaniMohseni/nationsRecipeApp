// I wil show the list of saved favorite foods for each user in the profile page


import React, {useContext} from 'react'
import { UserConstext } from '../component/UserContext'
import FavoriteMealItem from '../component/FavoriteMealItem'
import styled from 'styled-components'
import "../component/searchStyles.css"
 


const Profile=()=> {
    const {favoritelst, setFavoritelst} = useContext(UserConstext)

   
    return (
        
        <div>
            
            <Topdiv> 
                
               <i class="fas fa-utensils"></i>
               You have {favoritelst.length} meals in your list.
           </Topdiv>

           <Containdiv>
               { 
               (favoritelst.length==0)? <p>Nothing found to display ... </p> : favoritelst.map((res)=>{
                   return(<FavoriteMealItem data={res.data}/>)})
               }
        
            </Containdiv> 

        </div>

    )
}


const Containdiv= styled.div`
    width: 100vw;
    margin: 0;
    margin:0 auto;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0;
`

const Topdiv=styled.div`

font-family: 'poppins', sans-serif;
color:#444;
text-align: center;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    align-items: center;
    justify-content: center;

`

export default Profile