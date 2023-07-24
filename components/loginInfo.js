
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { fetchy } from './fetchy';
import BadgeIcon from '@mui/icons-material/Badge';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export function LoginStatus(props) {
    console.log('employee: ' + props.employee)
    const headers = { 'content-Type': 'application/json' }
    const role = props.employee ? 2 : 1
    //const roleName = props.employee ? 'Employee' : 'User'
    fetchy(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/User/CreateRandom' : 'https://danspizza-api.azurewebsites.net/api/User/CreateRandom', 'POST', role, headers)
        .catch((error) => {
            console.log('API error: ' + JSON.stringify(error.message))
            props.setLoginPosted(false)
        })
        .then((data) => {
            console.log('message: ' + data.message)
            if (data.message === 'Login Success') {
                console.log('login success')
                console.log('handleFetch login data: ' + JSON.stringify(data))
                document.cookie = "LoggedIn=true"
            }
            props.setLoginPosted(false)
            props.setEmail(data.email)
            props.setPass(data.password)
            props.setHasLoggedOn(true)
        })
        .catch((error) => {
            console.log('React fetch error: ' + error.message)
            //console.log('React fetch error: Username/Password combination does not match')
            props.setError('Login Failed')
            props.setLoginPosted(false)
        })
}

export function LoginInfo(props) {
    const [disableButton, setDisableButton] = useState(false);
    const [loginPosted, setLoginPosted] = useState(false);
    const [employee, setEmployee] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (disableButton) {
            if (router.asPath.startsWith('/backoffice')) {
                process.env.NODE_ENV === 'development' ? location.assign('http://localhost:3000') : location.assign('http://danspizza.dev')
            } else {
                router.reload();
            }
        }
    })

    const copyEmail = () => {
        navigator.clipboard.writeText(email)
    };
    const copyPass = () => {
        navigator.clipboard.writeText(pass)
    };

    return (
        <Grid container>
        <Paper sx={{p:3, bgcolor: 'background.paper'}}>
        <Grid xs={12} textAlign={'center'} sx={{mb:3}}>
            <Typography sx={{fontWeight:500}}> Generate a User</Typography>
        </Grid>
        <Grid xs={12} textAlign={'left'}>
                <FormControlLabel control={<Switch />} value={employee} onClick={() => setEmployee(!employee)} label="Employee" sx={{ml:.5}}/>
        </Grid>
            <Grid xs={12}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" onClick={copyEmail}>
                    <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        value={email}
                        label='Email'
                        endAdornment={<InputAdornment position="end"><IconButton onClick={copyEmail}><ContentCopyIcon /></IconButton></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                    />
                </FormControl>
            </Grid>
            <Grid xs={12}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" onClick={copyPass}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        value={pass}
                        label='Password'
                        endAdornment={<InputAdornment position="end"><IconButton onClick={copyPass}><ContentCopyIcon /></IconButton></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                    />
                </FormControl>
            </Grid>
            <Grid xs={12} textAlign={'center'}>
                {props.hasLoggedOn ? 
                    <Button variant='contained' onClick={() => setDisableButton(true)}>Refresh Page</Button> :
                    loginPosted ?
                        <Button disabled variant='contained'>Create</Button> :
                        <Button variant='contained' onClick={() => setLoginPosted(true)}>Create</Button>
                }
            </Grid>
            {loginPosted &&
                <LoginStatus
                    employee={employee}
                    setLoginPosted={(data) => setLoginPosted(data)}
                    setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                    setInfoDrawer={(data) => setInfoDrawer(data)}
                    loginPosted={loginPosted}
                    setError={(data) => setError(data)}
                    setHasLoggedOn={(data) => props.setHasLoggedOn(data)}
                    setEmail={(data) => setEmail(data)}
                    setPass={(data) => setPass(data)}
                />}
            {error && <Box sx={{textAlign: 'center', pt: 2, color: 'red', fontWeight: 500}}>{error}</Box>}
            </Paper>
        </Grid>
    )
}