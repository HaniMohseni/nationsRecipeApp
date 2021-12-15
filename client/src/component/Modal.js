import React from 'react'
import { StyledComponent } from 'styled-components';
import styled from 'styled-components';

// to open and close the full recipe in random meal component by clicking on the button
// showModal is a boolean an arguman from random meal 

function Modal({showModal,setShowModal, strInstructions,strMealThumb}) {
    return (
        <>
            {showModal ? <div className="RecipeDiv">{strInstructions}</div> : null}

        </>
    )
}

const RecipeDiv=styled.div`
background-color:black;
justify-content: center;
height:100%
width:100%
text-align: justify;
`

export default Modal
