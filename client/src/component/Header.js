import React from "react";
import { NavLink } from "react-router-dom";
import styled, { StyledComponent } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import ImageHome from "../assets/ImageHome.jpg"

const Header=()=> {
    return (
        <Headdiv>
            <HeaderTitle>

            <IDiv>
                 <i class="fas fa-utensils"></i>
             </IDiv>
            <SpanDiv> Nations Recipe</SpanDiv>
                   
            </HeaderTitle>

            <Homeimg src={ImageHome} />
            
        </Headdiv>
    )
}



const Headdiv= styled.div`
margin-top: 60px;

`


const HeaderTitle= styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Lora', serif;
color:#444;


`

const IDiv= styled.div`
position: absolute;

font-size: 45px;
margin-bottom:40px;
color: #444;

`

const SpanDiv = styled.span`
position: absolute;
top:20%;
font-size:100px;

`

const Homeimg = styled.img`
width:100%;
height: 450px;
margin-top:80px;
object-fit: cover;

`

export default Header
