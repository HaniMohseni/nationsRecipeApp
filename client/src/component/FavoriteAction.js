// this component is imported to all the search component
// to like or dislike each of the search results
// Likebtn onClick: is just for action on heart icon on the each food item in the page
// IsLikedvar is a boolean when it's true we will have a insert a new food in favorit (/api/add2Favorite))
// when it's false (dislike) we will have a delet (/api/removefromFavorite)
import React, {useContext} from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { FiRepeat } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import styled from 'styled-components';
import { UserConstext } from './UserContext';
import { useState } from 'react';
import { useEffect } from 'react';

const FavoriteAction=({Meal})=> {
    //state for Dynamic rendering for like button
    const {user, setUser} = useContext(UserConstext)
    const {favoritelst, setFavoritelst} = useContext(UserConstext)
    
    const DelBtnClick = () => {
        fetch("/api/removefromFavorite", {
        method: "POST",
        body: JSON.stringify({email: user, food:Meal}),
        headers: {"Content-Type": "application/json"}})
            .then((res) => res.json())
            .then((data) => { setFavoritelst(data.token.favorite_meals)})
            .catch(err => {console.log("we have a problem " + err.message)});
    }
 return(
   <Wrapper>
     
     <Likebtn onClick={DelBtnClick}>
     <i class="fas fa-trash-alt"></i>
     </Likebtn>
     </Wrapper>
 )
}
const Wrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 margin: 10pt 0;
 padding: 0 30pt;
 /* This is a quick fix but is not the best way to position the action bar */
 position: relative; 
 right: 5%;
`
const Likebtn = styled.button`
`
const Uploadbtn = styled.button`
`
export default FavoriteAction