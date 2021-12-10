import React from 'react'
import { useState } from 'react'
import styled, { StyledComponent } from 'styled-components'

import LoginBackground from "../assets/LoginBackground.jpg"


const Register=()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser=(e)=>{
        e.preventDefault();
    }
    

    return (
        <Registerdiv>

            <Registerform action="" onSubmit={e=>registerUser(e)}>

                <RegisterSpan>Register</RegisterSpan>

                <Registerlabel>Username</Registerlabel>
                <Registerinput type="text" placeholder="Enter your username ..." value={email} onChange={e=> setEmail(e.target.value)}  />
                {/* <Textlabel>You can Use letters, numbers and periods</Textlabel> */}

                <Registerlabel>Email</Registerlabel>
                <Registerinput type="text" placeholder="Enter your email ..." value={password} onChange={e=> setPassword(e.target.value)} />


                <Registerlabel>Password</Registerlabel>
                <Registerinput type="password" placeholder="Enter your passwoed ..."/>
                <Textlabel>Use 8 or more characters with a mix of letters, numbers and symbols</Textlabel>

                <RegisterButton type="submit">Register</RegisterButton>

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
background-image: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,.8) 100%), url(${LoginBackground});


`

const RegisterSpan=styled.span`
font-size: 50px;
color: white;
`

const Registerform=styled.form`
margin-top:20px;
display: flex;
flex-direction: column;

`

const Registerlabel = styled.label`
margin: 10px 0;
color: white;

`

const  Textlabel = styled.label`
margin: 10px 0;
color: white;
font-size:12px;
font-weight:50;
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
