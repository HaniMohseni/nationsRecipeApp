import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Topbar=()=> {
    const user = true;
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

                 <NavigationList>
                    
                       <LiDiv>
                             <NavigationLink to="/" >HOME</NavigationLink>
                       </LiDiv>

                       <LiDiv>
                           <NavigationLink to="/FeaturedMeal">FEATURE MEAL</NavigationLink>
                       </LiDiv>

                       <LiDiv>
                           <NavigationLink to="/Search">SEARCH </NavigationLink>
                       </LiDiv>

                       <LiDiv>
                           <NavigationLink to="/Contact"> CONTACT</NavigationLink>
                      </LiDiv>

                 </NavigationList>

                  </TopCenter>


                  <TopRight>

                     <NavigationList>

                        <LiDiv>
                          <NavigationLink to="/Register"> REGISTER</NavigationLink>
                        </LiDiv>

                        <LiDiv>
                           <NavigationLink to="/Logout">LOGOUT</NavigationLink>
                        </LiDiv>

                     </NavigationList>
                      
                      


                 </TopRight>

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

const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
`;


const LiDiv = styled.li`
  list-style-type: none;
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


const NavigationLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  padding: 0 16px;
  &.active {
    color: black;
  }
  &:after {
    content: '';
    position: absolute;
    background-color: currentColor;
    left: 0;
    right: 0;
    bottom: -5px;
    width: 50%;
    margin: auto;
    height: 3px;
    transform: scaleX(0);
    transform-origin: center center;
    border-radius: 2px;
  }
  &.active:after {
    /* transition: transform 250ms, opacity 150ms; */
    transform: scaleX(1);
    opacity: 1;
  }
`;



export default Topbar
