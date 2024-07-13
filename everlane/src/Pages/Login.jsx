import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Stylesheets/Login_Signup.css'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loggedIn,setEmail as saveEmail } from '../redux/shopReducer'


import { TextField, Button, Stack, Typography } from '@mui/material'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            saveEmail(email)
            setEmail('')
            setPassword('')
            navigate('/')
            dispatch(loggedIn(true))

        }
        catch (err) {
            setError('Invalid email or password')
        }
    }


    return (
        <>
            <div id="login-signup-container">
                <form noValidate onSubmit={handleSubmit}>
                    <h1>Log into your Everlane account</h1>
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
                        type='submit' variant='contained'>LOG IN</Button>
                        <p style={{textAlign:'center'}}>Not a User?
                            <NavLink to="/signup">SIGN UP</NavLink>
                        </p>
                        <p>{error}</p>
                    </Stack>
                </form>
            </div>
        </>
    )
}

export default Login



