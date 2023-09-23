import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import StorageIcon from '@mui/icons-material/Storage';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import BugReportIcon from '@mui/icons-material/BugReport';
import ApiIcon from '@mui/icons-material/Api';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CheckLive from './checkLive';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SoapIcon from '@mui/icons-material/Soap';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { fetchy } from './fetchy';
import { LoginInfo } from './loginInfo';
import { useState } from 'react';
import { NextLinkComposed } from './Link';
import { useRouter } from 'next/router'

export function SoapStatus(props) {
    const headers = { 'content-type': 'text/xml; charset=utf-8', 'Host':'localhost', 'SOAPAction':'' }
    const body = '<?xml version="1.0" encoding="utf-8"?\><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><HelloWorld xmlns="SoapyBoi" /></soap12:Body></soap12:Envelope>'
    fetchy(process.env.NODE_ENV === 'development' ? 'http://localhost:61829/SoapyBoi.asmx/HelloWorld' : 'https://www.danspizza.dev/SoapyBoi.asmx/HelloWorld', 'POST', body, headers)
        .catch((error) => {
            console.log('API error: ' + JSON.stringify(error.message))
            props.setResponsePosted(false)
        })
        .then((data) => {
            //console.log('message: ' + data.message)
            console.log('handleFetch login data: ' + JSON.stringify(data))
            console.log('soap response received success')
            props.setResponse(data)
            props.setResponsePosted(false)
        })
        .catch((error) => {
            console.log('React fetch error: ' + error.message)
            //console.log('React fetch error: Username/Password combination does not match')
            props.setError('Login Failed')
            props.setResponsePosted(false)
        })
}

export default function FloatingActionButtons(props) {
    const [infoDrawer, setInfoDrawer] = useState(false)
    const [live, setLive] = useState(false)
    const [openR, setOpenR] = useState(false)
    const [openG, setOpenG] = useState(false)
    const [openU, setOpenU] = useState(false)
    const [openS, setOpenS] = useState(false)
    const [hasLoggedOn, setHasLoggedOn] = useState(false)
    const [response, setResponse] = useState('Hit Invoke to Test Service')
    const [responsePosted, setResponsePosted] = useState(false)
    const [error, setError] = useState('')


    const router = useRouter();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        console.log('open state: ' + open)
        setInfoDrawer(open);
        if (hasLoggedOn) {
            console.log('floatyboi pushing reload')
            router.reload()
        }
    };

    const handleOpenGClick = () => {
        console.log('open, g')
        setOpenG(!openG);
    };
    const handleOpenRClick = () => {
        setOpenR(!openR);
    };
    const handleOpenUClick = () => {
        setOpenU(!openU);
    };
    const handleOpenSClick = () => {
        setOpenS(!openS);
    };
    const handleInvoke = () => {
        setResponsePosted(true)
    }

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="secondary" aria-label="edit" onClick={toggleDrawer(true)}>
                <QuestionMarkOutlinedIcon />
            </Fab>
            <Drawer
                anchor={'right'}
                open={infoDrawer}
                onClose={toggleDrawer(false)}
            >
                <Box minWidth={400} textAlign={'center'} sx={{ p: 5 }}>
                    <List>
                        <Typography sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 3 }}>Site Options</Typography>
                        <Paper sx={{ bgcolor: 'background.beige', mb: 2 }}>
                            <ListItem>
                                <ListItemButton sx={{ textAlign: 'left' }} onClick={handleOpenUClick}>
                                    <ListItemIcon>
                                        <PersonAddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Create User'} />
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={openU} timeout="auto" unmountOnExit>
                                <ListItem target='_blank'>
                                    <LoginInfo
                                        hasLoggedOn={hasLoggedOn}
                                        setHasLoggedOn={(data) => setHasLoggedOn(data)}
                                    />
                                </ListItem>
                            </Collapse>
                        </Paper>
                        <Paper sx={{ bgcolor: 'background.beige', mb: 2 }}>
                            <ListItem>
                                <ListItemButton sx={{ textAlign: 'left' }} onClick={handleOpenRClick}>
                                    <ListItemIcon><InfoIcon /></ListItemIcon>
                                    <ListItemText primary={<Typography>Resources</Typography>} />
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={openR} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }} href='/resume.pdf' target='_blank'>
                                        <ListItemIcon>
                                            <ContactPageIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography>Resume</Typography>} />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }} href='https://www.linkedin.com/in/dfischesser' target='_blank'>
                                        <ListItemIcon>
                                            <LinkedInIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography>LinkedIn</Typography>} />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }} onClick={handleOpenGClick}>
                                        <ListItemIcon>
                                            <GitHubIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography>GitHub</Typography>} />
                                        {openG ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={openG} timeout="auto" unmountOnExit sx={{ ml: 3 }}>
                                        <List component="div" disablePadding >
                                            <ListItemButton sx={{ pl: 4 }} href='https://github.com/dfischesser/danspizza#readme' target='_blank'>
                                                <ListItemIcon>
                                                    <JavascriptIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={<Typography>React</Typography>} />
                                            </ListItemButton>
                                            <ListItemButton sx={{ pl: 4 }} href='https://github.com/dfischesser/danspizza-api#readme' target='_blank'>
                                                <ListItemIcon>
                                                    <ApiIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={<Typography>.Net API</Typography>} />
                                            </ListItemButton>
                                            <ListItemButton sx={{ pl: 4 }} href='https://github.com/dfischesser/PizzaDB#readme' target='_blank'>
                                                <ListItemIcon>
                                                    <StorageIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={<Typography>Azure SQL</Typography>} />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton LinkComponent={NextLinkComposed} to='https://www.youtube.com/@fineplus2points' target='_blank' sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            {live ?
                                                <YouTubeIcon color='primary' /> :
                                                <YouTubeIcon />
                                            }
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography>YouTube</Typography>} />
                                        <CheckLive live={live} setLive={(data) => setLive(data)} />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }} href='mailto:dfischesser@gmail.com?subject=Bug Report'>
                                        <ListItemIcon>
                                            <EmailIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography>Email</Typography>} />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </Paper>
                        <Paper sx={{ bgcolor: 'background.beige', mb: 2 }}>
                            <ListItem>
                                <ListItemButton href='mailto:report@danspizza.dev' sx={{ textAlign: 'left' }}>
                                    <ListItemIcon><BugReportIcon /></ListItemIcon>
                                    <ListItemText primary={<Typography>Report a Bug</Typography>} />
                                </ListItemButton>
                            </ListItem>
                        </Paper>
                        <Paper sx={{ bgcolor: 'background.beige', mb: 2 }}>
                            <ListItem>
                                <ListItemButton sx={{ textAlign: 'left' }} onClick={handleOpenSClick}>
                                    <ListItemIcon>
                                        <SoapIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'SOAP Test'} />
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={openS} timeout="auto" unmountOnExit>
                                <ListItem target='_blank'>
                                    <Grid container rowSpacing={3}>
                                        <Paper sx={{ px: 3, mb: 3, bgcolor: 'background.paper' }}>
                                            <Grid xs={12} textAlign={'center'}>
                                                <Typography sx={{ fontWeight: 500 }}>Message Body</Typography>
                                            </Grid>
                                            <Grid xs={12}>
                                                <Paper square sx={{ bgcolor: 'white', pl: 3, overflow: 'auto', maxWidth: '250px' }}>
                                                    <Box sx={{ overflow: 'auto' }}>
                                                        <pre>
                                                            {'<?xml version="1.0" encoding=\"utf-8\"?\>'}<br />
                                                            {'<soap12\:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">'}<br />
                                                            {'<soap12:Body>'}<br />
                                                            {'    <HelloWorld xmlns="SoapyBoi" />'}<br />
                                                            {'</soap12:Body>'}<br />
                                                            {'</soap12:Envelope>'}
                                                        </pre>
                                                    </Box>
                                                </Paper>
                                            </Grid>
                                            <Grid xs={12}>
                                                <Button variant='contained' onClick={handleInvoke}>Invoke</Button>
                                            </Grid>
                                            <Grid xs={12} textAlign={'center'}>
                                                <Typography sx={{ fontWeight: 500 }}>Service Response</Typography>
                                            </Grid>
                                                <Grid xs={12}>
                                                    <Paper square sx={{ bgcolor: 'white', pl: 3, overflow: 'auto', maxWidth: '250px' }}>
                                                        {response &&
                                                        <Box sx={{ overflow: 'auto' }}>
                                                            <pre>
                                                                {response}
                                                            </pre>
                                                        </Box>}
                                                        {error &&
                                                            <Box>
                                                                {error}
                                                            </Box>
                                                        }
                                                    </Paper>
                                                </Grid>
                                            
                                            {response && 
                                                <Grid xs={12}>
                                                    <Button variant='contained' onClick={() => setResponse(' ')}>Clear</Button>
                                                </Grid>
                                            }
                                        </Paper>
                                    </Grid>
                                </ListItem>
                            </Collapse>
                        </Paper>
                        <ListItem sx={{ float: 'right' }}>
                            <Button sx={{ textAlign: 'right', float: 'right' }} onClick={() => setInfoDrawer(false)}><ArrowBackIcon sx={{ mr: 1 }} />Back</Button>
                        </ListItem>
                    </List>
                    {responsePosted &&
                        <SoapStatus responsePosted={responsePosted} setResponsePosted={(data) => setResponsePosted(data)} setError={(data) => setError(data)} setResponse={(data => setResponse(data))} />
                    }
                </Box>
            </Drawer>
        </Box>
    );
}