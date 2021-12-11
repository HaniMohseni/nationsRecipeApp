import React from 'react'
import { StyledComponent } from 'styled-components';
import styled from 'styled-components';

 const Modal=({showModal,setShowModal, strInstructions,strMealThumb})=> {
    return (
        <> 
        console.log(strInstructions)
        {showModal ? (
            <Background>
                <ModalWrapper showModal={showModal}>
                    {/* <Modalimg>
                        {strMealThumb}
                    </Modalimg> */}
                    <ModalContent>
                        <h2>Recipe</h2>
                        {/* <p>{strInstructions}</p> */}
                         

                    </ModalContent>
                    <CloseModalButton 
                    aria-label='close modal' 
                    onClick={()=> setShowModal(prev=>!prev)}></CloseModalButton>

                </ModalWrapper>
            </Background>
        ):null}
        </>
    );
};

const Background=styled.div`
width: 100%;
height:100%;
background: rgba(0, 0, 0, 0.0);
position: fixed;
display:flex;
justify-content:center;
align-items: center;

`

const ModalWrapper=styled.div`
width:800px
height:500px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color:#000;
display:grid;
grid-template-columns:1fr 1fr;
position: relative;
z-index: 10;
border-radius:10px;
`

const Modalimg=styled.img`
width:100%;
height: 100%;
border-radius: 10px 0 0 10px;
background:#000;
`

const ModalContent=styled.div`

`

const CloseModalButton=styled.button`
`

export default Modal
