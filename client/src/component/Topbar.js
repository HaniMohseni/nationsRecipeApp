import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Topbar=()=> {
    return (
        
            <Wrapper>
               <TopLeft>
                   
                 <IconeDiv>
                     <IDiv>
                         <i class="fab fa-facebook-square"></i>
                      </IDiv>
                      <IDiv>
                         <i class="fab fa-twitter-square"></i>
                      </IDiv>
                      <IDiv>
                         <i class="fab fa-linkedin"></i>
                      </IDiv>
                 </IconeDiv>
               </TopLeft>
                 <TopCenter>
                     
                         <LiDiv>HOME</LiDiv>
                       <LiDiv>ABOUT</LiDiv>
                       <LiDiv>CONTACT</LiDiv>
                       <LiDiv>LOGOUT</LiDiv>

                 <TopRight>

                   </TopRight>
               </TopCenter>
            </Wrapper>
            
       
    )
}


const Wrapper = styled.div`
width:100%;
height: 50px;
background-color: #ffd617;
color: black;
position: sticky;
top:0;
display: flex;
align-items: center;
font-family: 'Josefin Sans', sans-serif;
z-index: 999;

`;

const TopLeft= styled.div`
flex: 3;
display:flex;
align-items:center;
justify-content:center;


`;

const TopCenter= styled.div`
flex:6;
display: flex;
margin:10;
padding:0;
list-style:none;

`;

const TopRight= styled.div`
flex:3;
display:flex;
align-items:center;
justify-content:center;

`;

const LiDiv = styled.li`
margin:20px;
font-size:18px;
font-weight: 300;
cursor: pointer;

`

const IconeDiv= styled.div`
font-size: 20px;
margin-right: 10px;
color: #444;
cursor:pointer;
display: flex;

`

const IDiv= styled.div`
margin: 10px;

`




export default Topbar
