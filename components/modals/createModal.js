import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createJWT } from '../createJWT';
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
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import LockIcon from '@mui/icons-material/Lock';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

export function CreateStatus(props) {
    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(props.login.password, salt);
    console.log('salt: ' + salt);
    console.log('hash: ' + hash);

    const headers = { 'Content-Type': 'application/json' }
    fetchy('http://localhost:5753/api/User/Create', 'POST', { email: props.login.email, password: hash }, headers)
        .catch((error) => {
            console.log('API error: ' + JSON.parse(error.message).message)
            props.setError('API error: ' + JSON.parse(error.message).message)
            props.setCreatePosted(false)
        })
        .then((userID) => {
            console.log('handleFetch step 2 data: ' + userID)
            const token = createJWT(props.login.email, '', '', userID)
            console.log('handleFetch token: ' + token)
            document.cookie = "token=" + token + "; max-age=" + 60 * 60 * 24 + ";"
            console.log('setting isloggedin')
            props.setIsLoggedIn(true)
            console.log('setting isstep2')
            props.setIsStep2(true)
            console.log('setting createposted')
            props.setCreatePosted(false)
            console.log('everything set')

        })
        .catch((error) => {
            console.log('React fetch error: ' + error.message)
            props.setError('React fetch error: ' + error.message)
            props.setCreatePosted(false)
        })
}

export function CreateModal(props) {
    const [login, setLogin] = useState({ email: '', password: '' })
    const [error, setError] = useState(null)
    const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [createPosted, setCreatePosted] = useState(false)
    const [isPwMinLength, setIsPwMinLength] = useState({text: 'Be at least 8 characters in length.', active: true})
    const [isPwMaxLength, setIsPwMaxLength] = useState({text: 'Not exceed 24 characters in length.', active: false})
    const [isPwNumber, setIsPwNumber] = useState({text: 'Include at least one number.', active: true})
    const [isPwChar, setIsPwChar] = useState({text: 'Allowed characters: !@#$%^&*', active: true})

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
            setIsPwMinLength({...isPwMinLength, active: true})
        } else {
            setIsPwMinLength({...isPwMinLength, active: false})
        }
        if (pw.length > 24) {
            setIsPwMaxLength({...isPwMaxLength, active: true})
        } else {
            setIsPwMaxLength({...isPwMaxLength, active: false})
        }
        if (!pw.match(numRegex)) {
            setIsPwNumber({...isPwNumber, active: true})
        } else {
            setIsPwNumber({...isPwNumber, active: false})
        }
        if (pw.match(charRegex) && pw.match(charRegex).toString().length < pw.length) {
            setIsPwChar({...isPwChar, active: true})
        } else {
            setIsPwChar({...isPwChar, active: false})
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

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleClickShowValidation = (event) => {
        console.log('current target: ' + event.currentTarget)
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const canBeOpen = open && anchorEl && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', mb: 3 }}>
                Create
            </Typography>
            <Box>
                <TextField
                    autoFocus
                    id="standard-basic-email"
                    label="Email"
                    variant="standard"
                    sx={{mb: 2}}
                    error={(isEmailValid !== true && hasAttemptedLogin) ? true : false}
                    value={login.email}
                    onChange={(e) => { validateEmail(e.target.value); setLogin({ ...login, email: e.target.value }) }}
                />
                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password" error={!isPwValid && hasAttemptedLogin}>Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        error={!isPwValid && hasAttemptedLogin}
                        onChange={(e) => { validatePw(e.target.value); setLogin({ ...login, password: e.target.value }) }}
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
                                <IconButton
                                    color={!isPwValid ? hasAttemptedLogin ? 'error' : 'warning' : 'info'}
                                    aria-label="toggle pw validation errors"
                                    onClick={handleClickShowValidation}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    <ErrorIcon />
                                    <Popper 
                                        id={id} 
                                        open={open} 
                                        anchorEl={anchorEl} 
                                        placement='right' 
                                        sx={{ zIndex: 1301 }} 
                                        transition>
                                            {({ TransitionProps }) => (
                                                <Fade {...TransitionProps} timeout={350}>
                                                    <Paper component='div'>
                                                        <List  
                                                            sx={style}
                                                            component='div'       
                                                            subheader={
                                                                <ListSubheader component='div' id="nested-list-subheader" >
                                                                <Typography sx={{ pl: 2, pt: 2 }}  component='div'>Password Must:</Typography>
                                                                </ListSubheader>
                                                            }>
                                                            <Typography sx={{ px: 2 }} component='div'>
                                                            {
                                                                validationArray.map((val, index) => (
                                                                    <div key={index}>
                                                                        <ListItem disableGutters sx={{maxWidth: 175}}>
                                                                                
                                                                                {val.active ?
                                                                                    <ListItemIcon sx={{minWidth:30, color:'red'}}>
                                                                                        <CloseIcon fontSize='small'/>
                                                                                    </ListItemIcon> :
                                                                                    <ListItemIcon sx={{minWidth:30, color:'green'}}>
                                                                                        <DoneIcon fontSize='small'/>
                                                                                    </ListItemIcon> 
                                                                                    
                                                                                }
                                                                            
                                                                                <ListItemText 
                                                                                    primary={val.text} 
                                                                                    primaryTypographyProps={{fontSize: '.75rem'}}
                                                                                />
                                                                        </ListItem>
                                                                        {index !== (validationArray.length-1) && <Divider variant='middle' component='li'/>}
                                                                    </div>
                                                                ))
                                                            }
                                                            </Typography>
                                                        </List>
                                                    </Paper>
                                                </Fade>
                                            )}
                                        
                                    </Popper>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {!isPwValid && hasAttemptedLogin &&
                        <FormHelperText error>Check Password Rules</FormHelperText>
                    }
                </FormControl>
                {error && <div>{error}</div>}
                <Box sx={{ width: '100%', mx: 'auto', display: 'block', pt: 4 }}>
                    {createPosted ? 
                        <Button sx={{ minWidth: 75, mx: 'auto', display: 'block' }} variant="contained" onClick={() => handleClick()} disabled>Create</Button>  
                        :
                        <Button sx={{ minWidth: 75, mx: 'auto', display: 'block' }} variant="contained" onClick={() => handleClick()}>Create</Button> 
                    }
                    <Button sx={{ width: '100%', mx: 'auto', display: 'block' }} href='' onClick={() => props.setIsCreate(false)}>Back to Login</Button>
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
        </>
    )
}