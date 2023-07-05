
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { fetchy } from '../../components/fetchy';
import { createJWT } from '../createJWT';
import { useState } from 'react';

export function LoginStatus(props) {
    const headers = {'Content-Type': 'application/json'}
        fetchy('http://localhost:5753/api/User/Hash', 'POST', props.login.email, headers)
        .catch((error) => {
                console.log('API error: ' + error.message)
                console.log('API error: ' + JSON.parse(error.message).message)
                props.setError('API error: ' + JSON.parse(error.message).message)
                props.setLoginPosted(false)
        })
        .then((data) => {
            //console.log('handleFetch login data: ' + JSON.stringify(data)) 
            const bcrypt = require('bcryptjs');
            bcrypt.compare(props.login.password, data.hash)
            .then((res) => {
                if (res === true) {
                    console.log('handleFetch password: ' + props.login.password) 
                    console.log('handleFetch hash: ' + data.hash) 
                    console.log('handleFetch isValid: ' + res) 
                    const token = createJWT(props.login.email, data.firstName, data.role, data.userID)
                    document.cookie = "token=" + token + "; max-age=" + 60*60*24 + ";"
                    props.setLoginPosted(false)
                    props.setHasCookie(true)
                    props.setIsLoggedIn(true)
                    props.setUserName(data.firstName)
                    props.setOpen(false)
                } else {
                    console.log('React fetch error: Username/Password combination does not match')
                    props.setError('Login Failed')
                    props.setLoginPosted(false)
                }
            })
        })
        .catch((error) => {
            console.log('React fetch error: ' + error.message)
            props.setError('React fetch error: ' + error.message)
            props.setLoginPosted(false)
        })
}

export function LoginModal(props) {
    const [login, setLogin] = useState({email: '', password: ''})
    const [error, setError] = useState(null)
    const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [loginPosted, setLoginPosted] = useState(false)

    function validateEmail(email) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        
        console.log('valid: ' + email.toString().match(regex))
        
        email.toString().match(regex) ? setIsEmailValid(true) : setIsEmailValid('Email is Invalid')
        console.log('is email valid: ' + isEmailValid)
    }    

    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}}>
            Login
            </Typography>
            <Box sx={{textAlign: 'center'}}>
                <TextField 
                    id="standard-basic-email" 
                    label="Email" 
                    variant="standard" 
                    margin='dense' 
                    
                    helperText={(isEmailValid !== true && hasAttemptedLogin) ? isEmailValid : false} 
                    error={(isEmailValid !== true && hasAttemptedLogin) ? true : false} 
                    value={login.email} 
                    onChange={(e) => {validateEmail(e.target.value); setLogin({...login, email: e.target.value})}} /
                >
                <TextField 
                    id="standard-basic-password" 
                    label="Password" 
                    variant="standard" 
                    margin='dense' 
                    type='password'
                    value={login.password} 
                    onChange={ e => setLogin({...login, password: e.target.value})} 
                />
                {error && <Box sx={{textAlign:'center', pt: 1, color: 'red'}}>{error}</Box>}
                <Box sx={{width: '100%', mx: 'auto', display: 'block', pt: 4}}>
                    <Button sx={{width: 75, mx: 'auto', display: 'block'}} variant="contained"
                    className='login-button' 
                    onClick={() => {
                        console.log('click is email valid: ' + isEmailValid)
                        if (isEmailValid === true) {
                            setLoginPosted(true)
                        }
                        setHasAttemptedLogin(true)
                    }}>Login</Button>
                    <Button sx={{width: '100%', mx: 'auto', display: 'block', pt: 2}} href='' onClick={() => props.setIsCreate(true)}>Create Account</Button>
                    
                    {loginPosted && 
                        <LoginStatus 
                            login={login} 
                            setHasCookie={(data) => props.setHasCookie(data)}
                            setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                            setError={(error) => setError(error)} 
                            setLoginPosted={(data) => setLoginPosted(data)}
                            setUserName={(data) => props.setUserName(data)} 
                            setOpen={(data) => props.setOpen(data)}
                        />}
                </Box>
            </Box>
        </>
    )
}