import React from 'react';
import '../Stylesheets/Login_Signup.css'
import {NavLink, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import '../firebase.jsx'
import {auth} from '../firebase.jsx'
import { createUserWithEmailAndPassword } from 'firebase/auth';

import {Button,TextField,Stack} from '@mui/material'

function SignUp() {

 
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[error,setError] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
           await createUserWithEmailAndPassword(auth,email,password)
           navigate('/login')
           setEmail('')
           setPassword('')
        }
        catch(err){
            setError('Invalid user name or password')
        }

    }

    return (

        <div id="login-signup-container">
        <form noValidate onSubmit={handleSubmit}>
            <h1>Create your Everlane account</h1>
            <Stack spacing={3} width={400}>
                <TextField required label='Email' type='email' variant='outlined'
                    value = {email}
                    onChange={(e)=>setEmail(e.target.value)}
                 />
                <TextField required label='Password' type='password' variant='outlined'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                 />
                <Button style={{ display: 'inline-block', width: 200, alignSelf:'center',
                                  fontWeight:'bold'                                                             
                }} 
                type='submit' variant='contained'>SIGN UP</Button>
                <p style={{textAlign:'center'}}>Already registered?
                    <NavLink to="/login">LOG IN</NavLink>
                </p>
                <p className='error-message'>{error}</p>
            </Stack>
        </form>
    </div>
    );
}

export default SignUp;
