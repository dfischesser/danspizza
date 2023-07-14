
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import Link, { NextLinkComposed } from 'next/link'
import Link, { NextLinkComposed } from '../../components/Link'
import { useState, useRef, useEffect } from 'react';
import Container from '@mui/material/Container';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TuneIcon from '@mui/icons-material/Tune';
import CottageIcon from '@mui/icons-material/Cottage';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { getCookie } from '../../components/getCookie';

export function Index() {
    return (
        <Button
            component={NextLinkComposed}
            to={{
                pathname: '/',
            }}
        >
            Button link
        </Button>
    );
}

export function MainToolbar({
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleCloseNavMenu,
    handleOpenUserMenu,
    handleCloseUserMenu,
    setOpen,
    setIsBackOffice,
    setIsCreate,
    setIsStep2,
    isLoggedIn,
    hasCookie,
    userName,
    role,
    handleCartClick,
    cartHasItems,
    open,
}) {

    console.log('isLoggedIn is ' + isLoggedIn)
    console.log('username is ' + userName)
    console.log('firstname cookie is ' + (typeof document !== 'undefined') ? 'not defined' : getCookie('firstName'))
    return (

        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'fantasy',
                        fontWeight: 500,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >   DANS
                    <LocalPizzaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    PIZZA
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        <MenuItem component={NextLinkComposed} to='/' onClick={handleCloseNavMenu} sx={{ py: 0, my: 0 }}>
                            <CottageIcon sx={{mr:2}}/>
                            Home
                        </MenuItem>
                        <MenuItem component={NextLinkComposed} to='/menu' onClick={handleCloseNavMenu} sx={{ py: 0, my: 0 }}>
                            <RestaurantMenuIcon sx={{mr:2}}/>
                            Menu
                        </MenuItem>
                    </Menu>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'fantasy',
                        fontWeight: 500,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    DAN'S PIZZA
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        component={NextLinkComposed}
                        onClick={handleCloseNavMenu}
                        to='/'
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Home
                    </Button>
                    <Button
                        component={NextLinkComposed}
                        onClick={handleCloseNavMenu}
                        to='/menu'
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Menu
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    {isLoggedIn ?
                        <>
                            <Tooltip title="Open settings">
                                <Button
                                    sx={{ color: 'white', p: 0 }}
                                    onClick={handleOpenUserMenu}
                                >
                                    {userName ? userName : 'Profile'}
                                </Button>
                            </Tooltip>

                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                
                            >
                                <MenuItem onClick={() => handleCloseUserMenu('Logout')}>
                                        <LogoutIcon sx={{mr:2}}/>
                                        Logout
                                </MenuItem>
                                {userName ?
                                    <MenuItem component={NextLinkComposed} to='/account' onClick={() => handleCloseUserMenu('Account')}>
                                    <AccountBoxIcon sx={{mr:2}}/>
                                        Account
                                    </MenuItem> :
                                    <MenuItem onClick={() => { setIsCreate(true); setIsStep2(true); setOpen(true); handleCloseUserMenu() }}>
                                    <ManageAccountsIcon sx={{mr:2}}/>   
                                        Complete <br/> Account
                                    </MenuItem>
                                }
                                {role == 'Employee' &&
                                    <MenuItem onClick={() => { handleCloseUserMenu(); setIsBackOffice(true)}} component={NextLinkComposed} to={'/backoffice/manage'}>
                                        <TuneIcon sx={{mr:2}}/> 
                                        Back Office
                                    </MenuItem>
                                }
                            </Menu>
                            <IconButton onClick={handleCartClick} sx={{ pl: 3 }}>
                                {(cartHasItems) ?
                                    open ?
                                        <ShoppingCartIcon />
                                        :
                                        <ShoppingCartIcon sx={{ color: '#8d762b' }} /> :
                                    <ShoppingCartIcon sx={{ color: 'white' }} />
                                }
                            </IconButton>
                        </>
                        :
                        <>
                            <Button
                                sx={{ color: 'white' }}
                                focusRipple={false}
                                onClick={() => { setOpen(true); }}
                            >
                                {'Login'}
                            </Button>

                            <IconButton onClick={handleCartClick}>
                                {(cartHasItems) ?
                                    open ?
                                        <ShoppingCartIcon />
                                        :
                                        <ShoppingCartIcon sx={{ color: '#8d762b' }} /> :
                                    <ShoppingCartIcon sx={{ color: 'white' }} />
                                }
                            </IconButton>
                        </>}
                </Box>

            </Toolbar>
        </Container>
    )
}