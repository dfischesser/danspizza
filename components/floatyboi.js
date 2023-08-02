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
import { LoginInfo } from './loginInfo';
import { useState } from 'react';
import { NextLinkComposed } from './Link';
import { useRouter } from 'next/router'

export default function FloatingActionButtons(props) {
    const [infoDrawer, setInfoDrawer] = useState(false)
    const [live, setLive] = useState(false)
    const [openR, setOpenR] = useState(false)
    const [openG, setOpenG] = useState(false)
    const [openU, setOpenU] = useState(false)
    const [hasLoggedOn, setHasLoggedOn] = useState(false);

    const router = useRouter();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        console.log('open state: ' + open)
        setInfoDrawer(open);
        if(hasLoggedOn) {
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
                        <Typography sx={{fontSize: '1.5rem', fontWeight: 600, mb: 3}}>Site Options</Typography>
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
                        <ListItem sx={{float: 'right'}}>
                            <Button sx={{textAlign: 'right', float: 'right'}} onClick={() => setInfoDrawer(false)}><ArrowBackIcon sx={{mr:1}} />Back</Button>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}