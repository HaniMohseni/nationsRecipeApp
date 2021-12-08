import React from 'react'
import styled, { StyledComponent } from 'styled-components'

import LoginBackground from "../assets/LoginBackground.jpg"


const Register=()=> {
    return (
        <Registerdiv>

            <Registerform>

                <RegisterSpan>Register</RegisterSpan>

                <Registerlabel>Username</Registerlabel>
                <Registerinput type="text" placeholder="Enter your username ..."/>

                <Registerlabel>Email</Registerlabel>
                <Registerinput type="text" placeholder="Enter your email ..."/>


                <Registerlabel>Password</Registerlabel>
                <Registerinput type="password" placeholder="Enter your passwoed ..."/>

                <RegisterButton>Register</RegisterButton>

             </Registerform>

                <LoginRegisterButton>Login</LoginRegisterButton>
            
        </Registerdiv>
    )
}

const Registerdiv = styled.div`
height: calc(100vh - 50px);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background: linear-gradient(
    rgba(255, 255, 255, 0.5)
    rgba(255, 255, 255, 0.5)
),
url("LoginBackground");
background-size:cover;

`

const RegisterSpan=styled.span`
font-size: 50px;

`

const Registerform=styled.form`
margin-top:20px;
display: flex;
flex-direction: column;

`

const Registerlabel = styled.label`
margin: 10px 0;

`
const Registerinput= styled.input`
padding:10px;
background-color: white;
border: none;

`

const RegisterButton=styled.button`
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

export default Register
