import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { fetchy } from '../../components/fetchy';
import { useState, useRef } from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Popover from '@mui/material/Popover';
import PasswordPopover from '../../components/passwordPopover';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export function CreateStatus(props) {

    const headers = { 'content-Type': 'application/json' }
    fetchy(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/User/Create' : 'https://www.danspizza.dev/api/User/Create', 'POST', props.login, headers)
        .catch((error) => {
            console.log('API error: ' + JSON.parse(error.message).message)
            props.setError('API error: ' + JSON.parse(error.message).message)
            props.setCreatePosted(false)
        })
        .then(() => {

            props.setIsLoggedIn(true)
            props.setIsStep2(true)
            props.setCreatePosted(false)
        })
        .catch((error) => {
            if (typeof error.json === "function") {
                error.json().then(jsonError => {
                    console.log("Json error from API");
                    console.log(jsonError);
                }).catch(genericError => {
                    console.log("Generic error from API");
                    console.log(error.statusText);
                });
            } else {
                console.log("Fetch error");
                console.log(error);
            }
            // console.log('React fetch error: ' + JSON.stringify(error.message))
            // console.log('React fetch error: ' + JSON.stringify(error.cause))
            // props.setError('React fetch error: ' + error.message)
            props.setCreatePosted(false)
        })
}

export function CreateModal(props) {
    const [login, setLogin] = useState({ email: '', password: '' })
    const [error, setError] = useState(null)
    const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [createPosted, setCreatePosted] = useState(false)
    const [isPwMinLength, setIsPwMinLength] = useState({ text: 'At least 8 characters in length.', active: true })
    const [isPwMaxLength, setIsPwMaxLength] = useState({ text: 'Does not exceed 24 characters in length.', active: false })
    const [isPwNumber, setIsPwNumber] = useState({ text: 'Includes at least one number.', active: true })
    const [isPwChar, setIsPwChar] = useState({ text: 'Allowed characters: !@#$%^&*', active: true })

    const riffRef = useRef(0);

    const isPwValid = !isPwMinLength.active && !isPwMaxLength.active && !isPwNumber.active && !isPwChar.active
    let validationArray = [isPwMinLength, isPwMaxLength, isPwNumber, isPwChar]
    console.log('valArray: ' + JSON.stringify(validationArray))

    function validateEmail(email) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        console.log('regex: ' + email.toString().match(regex))
        email.toString().match(regex) ? setIsEmailValid(true) : setIsEmailValid('Invalid Email')
    }

    function validatePw(pw) {
        const numRegex = /[0-9]/
        const charRegex = /[a-zA-Z0-9!@#$%^&*]+/

        if (pw.length < 8) {
            setIsPwMinLength({ ...isPwMinLength, active: true })
        } else {
            setIsPwMinLength({ ...isPwMinLength, active: false })
        }
        if (pw.length > 24) {
            setIsPwMaxLength({ ...isPwMaxLength, active: true })
        } else {
            setIsPwMaxLength({ ...isPwMaxLength, active: false })
        }
        if (!pw.match(numRegex)) {
            setIsPwNumber({ ...isPwNumber, active: true })
        } else {
            setIsPwNumber({ ...isPwNumber, active: false })
        }
        if (pw.match(charRegex) && pw.match(charRegex).toString().length < pw.length) {
            setIsPwChar({ ...isPwChar, active: true })
        } else {
            setIsPwChar({ ...isPwChar, active: false })
        }
    }

    function handleClick() {
        setHasAttemptedLogin(true)
        if (isPwValid && isEmailValid) {
            console.log('valArray: ' + JSON.stringify(validationArray))
            console.log('login: ' + JSON.stringify(login))
            setCreatePosted(true)
        }
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleClickShowValidation = (event) => {
        console.log('current target: ' + event.currentTarget.innerHTML)
        setAnchorEl(event.currentTarget);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: 'primary.main', textAlign: 'center', mb: 3, fontSize: '1.5rem', fontWeight: 500, letterSpacing: '.1rem' }}>
                Create Account
            </Typography>
            <Box>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="standard-basic-email" error={!isEmailValid && hasAttemptedLogin}>Email</InputLabel>
                    <Input
                        autoFocus
                        id="standard-basic-email"
                        variant="standard"
                        label="Email"
                        sx={{ mb: 2 }}
                        error={!isEmailValid && hasAttemptedLogin}
                        value={login.email}
                        onChange={(e) => { validateEmail(e.target.value); setLogin({ ...login, email: e.target.value }) }}
                    />
                </FormControl>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="standard-adornment-password" error={!isPwValid && hasAttemptedLogin}>Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        error={!isPwValid && hasAttemptedLogin}
                        onChange={(e) => { validatePw(e.target.value); setLogin({ ...login, password: e.target.value }) }}
                        onKeyDown={(e) => {
                            if (e.code === 'Enter') {
                                handleClick()
                            }
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                {!isPwValid && hasAttemptedLogin ?
                                    <>
                                        <IconButton
                                            color='error'
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>

                                    </>
                                    :
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>

                                }
                            </InputAdornment>
                        }
                    />
                    {!isPwValid && hasAttemptedLogin &&
                            <FormHelperText 
                                error
                            >
                                <IconButton
                                    color={!isPwValid ? hasAttemptedLogin ? 'error' : 'warning' : 'info'}
                                    aria-label="toggle pw validation errors"
                                    onClick={handleClickShowValidation}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    <ErrorIcon />
                                </IconButton>Check Password Rules
                                
                            <Popover 
                                id={id} 
                                open={open} 
                                onClose={handleClose}
                                anchorEl={anchorEl} 
                                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                                transformOrigin={{vertical: 'top', horizontal: 'left'}}
                                sx={{ zIndex: 1301 }} 
                                children={riffRef}
                            >
                                <Box ref={riffRef}>
                                    <PasswordPopover validationArray={validationArray} />
                                </Box>
                            </Popover>
                            </FormHelperText>
}
                </FormControl>
                {error && <div>{error}</div>}
                <Box sx={{ width: '100%', mx: 'auto', display: 'block', pt: 4 }}>
                    {createPosted ?
                        <Button sx={{ minWidth: 75, mx: 'auto', display: 'block' }} variant="contained" onClick={() => handleClick()} disabled>Create</Button>
                        :
                        <Button sx={{ minWidth: 75, mx: 'auto', display: 'block' }} variant="contained" onClick={() => handleClick()}>Create</Button>
                    }
                    <Button sx={{ width: '100%', mx: 'auto', display: 'block', mt: 3 }} href='' onClick={() => props.setIsCreate(false)}>Go to Login</Button>
                </Box>
            </Box>
            {createPosted &&
                <CreateStatus
                    login={login}
                    setHasCookie={(data) => props.setHasCookie(data)}
                    setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                    setError={(error) => setError(error)}
                    setCreatePosted={(data) => setCreatePosted(data)}
                    setUserName={(data) => props.setUserName(data)}
                    setOpen={(data) => props.setOpen(data)}
                    setIsStep2={(data) => props.setIsStep2(data)}
                />}
        </Box>
    )
}
{/* <TextField
    autoFocus
    label="Email"
    variant="standard"
    sx={{mb: 2}}
    error={(isEmailValid !== true && hasAttemptedLogin) ? true : false}
    value={login.email}
    onChange={(e) => { validateEmail(e.target.value); setLogin({ ...login, email: e.target.value }) }}
/> */}