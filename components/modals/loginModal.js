
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { fetchy } from '../../components/fetchy';
import { useState } from 'react';

export function LoginStatus(props) {
    const headers = { 'content-Type': 'application/json' }
    fetchy(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/Login' : 'danspizza-api.azurewebsites.net/api/Login', 'POST', props.login, headers)
        .catch((error) => {
            console.log('API error: ' + JSON.stringify(error.message))
            console.log('API error2: ' + JSON.stringify(props.login))
            //console.log('API error: ' + JSON.parse(error.message).message)
            //props.setError('API error: ' + JSON.parse(error.message).message)
            props.setLoginPosted(false)
        })
        .then((data) => {
            console.log('message: ' + data.message)
            if (data.message === 'Login Success') {
                console.log('login success')
                console.log('handleFetch login data: ' + JSON.stringify(data))
                document.cookie = "LoggedIn=true"
                props.setIsLoggedIn(true)
                props.setOpen(false)
            }
            props.setLoginPosted(false)
        })
        .catch((error) => {
            console.log('React fetch error: ' + error.message)
            //console.log('React fetch error: Username/Password combination does not match')
            props.setError('Login Failed')
            props.setLoginPosted(false)
        })
}

export function LoginModal(props) {
    const [login, setLogin] = useState({ email: '', password: '' })
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
        <Box sx={{ mx: 'auto', textAlign: 'center' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                Login
            </Typography>
            <TextField
                autoFocus
                fullWidth
                id="standard-basic-email"
                label="Email"
                variant="standard"
                margin='dense'
                helperText={(isEmailValid !== true && hasAttemptedLogin) ? isEmailValid : false}
                error={(isEmailValid !== true && hasAttemptedLogin) ? true : false}
                value={login.email}
                onChange={(e) => { validateEmail(e.target.value); setLogin({ ...login, email: e.target.value }) }}
            />
            <TextField
                fullWidth
                id="standard-basic-password"
                label="Password"
                variant="standard"
                margin='dense'
                type='password'
                value={login.password}
                onChange={e => setLogin({ ...login, password: e.target.value })}
                onBlur={(e) => { console.log('enter key detected. bubbles: ' + e.bubbles); e.stopPropagation() }}
                onKeyDown={(e) => {
                    console.log('key down detected')
                    if (e.code === 'Enter') {
                        console.log('enter key detected.')
                        if (isEmailValid === true) {
                            setLoginPosted(true)
                        }
                        setHasAttemptedLogin(true)
                    }
                }}
            />
            {error && <Box sx={{ textAlign: 'center', pt: 1, color: 'red' }}>{error}</Box>}
            <Box sx={{ width: '100%', mx: 'auto', display: 'block', pt: 4 }}>
                <Button
                    disabled={loginPosted}
                    sx={{ width: 75, mx: 'auto', display: 'block' }}
                    variant="contained"
                    className='login-button'
                    onKeyDown={(e) => {
                        console.log('key down detected')
                        if (e.code === 'Enter') {

                            console.log('enter key detected. email valid: ' + isEmailValid)
                            if (isEmailValid === true) {
                                setLoginPosted(true)
                            }
                            setHasAttemptedLogin(true)
                        }
                    }}
                    onClick={() => {
                        console.log('click is email valid: ' + isEmailValid)
                        if (isEmailValid === true) {
                            setLoginPosted(true)
                        }
                        setHasAttemptedLogin(true)
                    }}
                >Login</Button>
                <Button sx={{ width: '100%', mx: 'auto', display: 'block', mt: 2 }} href='' onClick={() => props.setIsCreate(true)}>Create Account</Button>

                {loginPosted &&
                    <LoginStatus
                        login={login}
                        setHasCookie={(data) => props.setHasCookie(data)}
                        setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                        setError={(error) => setError(error)}
                        setLoginPosted={(data) => setLoginPosted(data)}
                        setUserName={(data) => props.setUserName(data)}
                        setRole={(data) => props.setRole(data)}
                        setOpen={(data) => props.setOpen(data)}
                        closeLogin={() => props.closeLogin()}
                    />}
            </Box>
        </Box>
    )
}