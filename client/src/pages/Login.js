import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { useState } from 'react'
// in 'react-router' ver.6 instead of useHystory
import { useNavigate } from 'react-router'

import LoginBackground from "../assets/LoginBackground.jpg"


const Login=()=> {
    const [email,setEmail]=useState(localStorage.getItem('Current_User'));
    const [password,setPassword]=useState('');
    const navigate = useNavigate();


    const signing_in=(e)=>{
        e.preventDefault();
        fetch("/api/sign-in", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                plain_password: password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            if((data.status === 400)||(data.status === 400)){
                alert(data.msg)    
            }
            
            if(data.status === 200){
               navigate('/');
            } 
        })
        .catch(err => {
            console.log("we have a problem " + err.message)});

    }





    return (
        <Logindiv>

            <Loginform onSubmit={(e) =>{signing_in(e)}}>
{/* <img src={LoginBackground}/> */}
                <LoginSpan>Login</LoginSpan>

                <Loginlabel>Email</Loginlabel>
                <Logininput type="text" value={email} onChange={e=> setEmail(e.target.value)}/>

                <Loginlabel>Password</Loginlabel>
                <Logininput type="password" placeholder="Enter your passwoed ..." onChange={e=> setPassword(e.target.value)}/>

                <LoginButton>Login</LoginButton>

             </Loginform>

                <LoginRegisterButton>Register</LoginRegisterButton>
            
        </Logindiv>
    )
}

const Logindiv = styled.div`
height: calc(100vh - 50px);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
/* background: url(${LoginBackground}),
linear-gradient(to bottom,
    rgba(255,255,255, 0.1),
    rgba(255,255,255, 0.1),
); */

background-image: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,.8) 100%), url(${LoginBackground});




background-size: cover;

`

const LoginSpan=styled.span`
font-size: 50px;
color: white;

`

const Loginform=styled.form`
margin-top:20px;
display: flex;
flex-direction: column;

`

const Loginlabel = styled.label`
margin: 10px 0;
color: white;

`
const Logininput= styled.input`
padding:10px;
background-color: white;
border: none;

`

const LoginButton=styled.button`
margin-top: 20px;
cursor: pointer;
background-color:  #ffd617;
border: none;
border-radius:10px;
padding: 10px;


`

const LoginRegisterButton= styled.button`
position: absolute;
top:60px;
right:20px;
background-color:#444;
cursor: pointer;
border:none;
padding: 10px;
border-radius: 10px;
color: white;


`

export default Login
