import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HelpIcon from '@mui/icons-material/Help';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Link from 'next/link'
import Paper from '@mui/material/Paper';
import Footer from '../components/footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';

export function WelcomeModalBody({handleCloseWelcome}) {


    return (
            <Grid container spacing={2}>
                <Grid xs={12} textAlign={'center'}>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'fantasy',
                        fontWeight: 500,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >   DANS
                    <LocalPizzaIcon sx={{ fontSize:40, ml: 1, mr: 1.5 }} />
                    PIZZA
                </Typography>
                <Typography id="modal-modal-title" color="text.secondary" variant="subtitle1" sx={{fontFamily: 'fantasy', letterSpacing: '.05rem'}}>
                    Simulated Restaurant Order App
                </Typography>
                </Grid>
                <Grid xs={12} sx={{ textAlign: 'center' }}>
                    <Typography id="modal-modal-description" variant="h5" component="h2" sx={{ mt: 2 }}>
                        Features
                    </Typography>
                </Grid>
                <Grid xs={12} md={6}>
                    <Paper sx={{ minWidth: 150, p: 2, bgcolor: 'background.lightest' }}>
                        <Typography variant="h5" component="div">
                            Store Front
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Users
                        </Typography>
                        <Typography variant="body2">
                            Explore the menu and place orders
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6}>
                    <Paper sx={{ minWidth: 150, p: 2, bgcolor: 'background.lightest' }}>
                        <Typography variant="h5" component="div">
                            Back Office
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Employees
                        </Typography>
                        <Typography variant="body2">
                            Manage Orders, Edit Site, and Visualize Data
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6}>
                    <Paper sx={{ minWidth: 150, p: 2, bgcolor: 'background.lightest' }}>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ textAlign: 'left' }}>
                                Info Drawer
                            </Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                <HelpIcon color={'secondary'} sx={{ ml: 2, fontSize:'1.3rem' }} />
                            </Typography>
                        </Stack>
                            <Typography sx={{ textAlign: 'left' }} variant="body2" color="text.secondary" gutterBottom>
                                    Test + Contact
                            </Typography>
                            <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom>
                                Quickly Create Test Users and Employees
                            </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6}>
                    <Paper sx={{ minWidth: 150, p: 2, bgcolor: 'background.lightest' }}>
                        
                            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ textAlign: 'left' }}>
                                More to Come!
                            </Typography>
                            <Typography sx={{ textAlign: 'left' }} variant="body2" color="text.secondary" gutterBottom>
                                Updates Mondays
                            </Typography>
                            <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom>
                                This is an ongoing project. <Link href='mailto:report@danspizza.dev' target='_blank'>Change Log</Link>
                            </Typography>
                    </Paper>
                </Grid>
                <Grid >
                    <Paper sx={{ p: 2, bgcolor: 'background.lightest' }}>
                        <Grid xs={12}>
                            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ textAlign: 'center', pb: 1 }}>
                                Getting Started
                            </Typography>
                            <Divider variant='middle' />
                        </Grid>
                        <Grid xs={12}>
                            <Typography>
                                Select Create User from the Navigation Bar, or use the Info Drawer to quickly create a test user or employee.
                            </Typography>
                        </Grid>
                        <Grid xs={12} sx={{ textAlign: 'center', mt: 2 }} >
                            <Button variant='contained' onClick={handleCloseWelcome}>
                                Got It
                            </Button>
                        </Grid>
                    </Paper>
                    <Grid xs={12}>
                        <Footer/>
                    </Grid>
                </Grid>
            </Grid>
    )
}