
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { fetchy } from '../../components/fetchy';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function LoginStatus(props) {
    const router = useRouter();
    const headers = { 'content-Type': 'application/json' }
    fetchy(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/Login/Post' : 'https://www.danspizza.dev/api/Login/Post', 'POST', props.login, headers)
        .catch((error) => {
            console.log('API error: ' + JSON.stringify(error.message))
            console.log('API error2: ' + JSON.stringify(props.login))
            //console.log('API error: ' + JSON.parse(error.message).message)
            //props.setError('API error: ' + JSON.parse(error.message).message)
            props.setLoginPosted(false)
        })
        .then((data) => {
            console.log('role: ' + data.role)
            if (data.role) {
                console.log('login success')
                console.log('handleFetch login data: ' + JSON.stringify(data))
                props.setIsLoggedIn(true)
                router.reload()
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
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    function validateEmail(email) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        console.log('valid: ' + email.toString().match(regex))

        email.toString().match(regex) ? setIsEmailValid(true) : setIsEmailValid('Email is Invalid')
        console.log('is email valid: ' + isEmailValid)
    }

    return (
        <Box sx={{ mx: 'auto', textAlign: 'center' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color:'primary.main', textAlign: 'center', mb: 3, fontSize: '1.5rem', fontWeight: 500, letterSpacing: '.1rem' }}>
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
            <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => { setLogin({ ...login, password: e.target.value }) }}
                        onKeyDown={(e) => {
                            if (e.code === 'Enter') {
                                handleClick()
                            }
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
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