import React from 'react'
import { StyledComponent } from 'styled-components';
import styled from 'styled-components';


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
