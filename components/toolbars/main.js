
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
import Badge from '@mui/material/Badge';
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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FaceIcon from '@mui/icons-material/Face';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Abril_Fatface } from 'next/font/google';
import { useRouter } from 'next/router'

export const abrilFatFace = Abril_Fatface({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
  });

const style = {
    mr: 1,
    color: 'white', 
    textAlign: 'center', 
    '&:hover': { bgcolor: 'background.hover' } 
}
const activeStyle = {
    mr: 1,
    color: 'background.beiger', 
    textAlign: 'center', 
    '&:hover': { bgcolor: 'background.hover' } 
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
    cartItemCount,
    open,
}) {

    const router = useRouter();
    return (

        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    fontFamily= {abrilFatFace.style.fontFamily}
                    noWrap
                    sx={{
                        mr: 5,
                        fontSize: '1.3rem',
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >   DANS
                    <LocalPizzaIcon sx={{ display: { xs: 'none', md: 'flex' }, mx: .5 }} />
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
                            <CottageIcon sx={{ mr: 2 }} />
                            Home
                        </MenuItem>
                        <MenuItem component={NextLinkComposed} to='/menu' onClick={handleCloseNavMenu} sx={{ py: 0, my: 0 }}>
                            <RestaurantMenuIcon sx={{ mr: 2 }} />
                            Menu
                        </MenuItem>
                    </Menu>
                </Box>
                <Typography
                    variant="h6"
                    fontFamily= {abrilFatFace.style.fontFamily}
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        letterSpacing: '.2rem',
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
                        sx={router.asPath === '/' ? activeStyle : style}
                    >
                    <CottageIcon fontSize='small' sx={{ mr: 1 }} />
                        Home
                    </Button>
                    <Button
                        component={NextLinkComposed}
                        onClick={handleCloseNavMenu}
                        to='/menu'
                        sx={router.asPath.endsWith('menu') ? activeStyle : style}
                    >
                    <RestaurantMenuIcon fontSize='small' sx={{ mr: 1 }} />
                        Menu
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    {isLoggedIn ?
                        <>
                            <Tooltip title="Open settings">
                                    <Button
                                        sx={Boolean(anchorElUser) ? { color: 'background.beiger' } : { color: 'white' }}
                                        onClick={handleOpenUserMenu} 
                                    >
                                        <AccountCircleIcon />
                                        <Typography sx={{ my: 'auto', ml: 1, maxWidth: 175, fontWeight: 500, fontSize: '.75rem', display: { xs: 'none', sm: 'inherit' } }}>
                                            {userName}
                                        </Typography>
                                    </Button>
                            </Tooltip>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'bottom',
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
                                    <LogoutIcon sx={{ mr: 2 }} />
                                    Logout
                                </MenuItem>
                                {userName ?
                                    <MenuItem component={NextLinkComposed} to='/account' onClick={() => handleCloseUserMenu('Account')}>
                                        <AccountBoxIcon sx={{ mr: 2 }} />
                                        Account
                                    </MenuItem> :
                                    <MenuItem onClick={() => { setIsCreate(true); setIsStep2(true); setOpen(true); handleCloseUserMenu() }}>
                                        <ManageAccountsIcon sx={{ mr: 2 }} />
                                        Complete <br /> Account
                                    </MenuItem>
                                }
                                {role == 'Employee' &&
                                    <MenuItem onClick={() => { handleCloseUserMenu(); }} component={NextLinkComposed} to={'/backoffice/manage'}>
                                        <TuneIcon sx={{ mr: 2 }} />
                                        Back Office
                                    </MenuItem>
                                }
                            </Menu>
                            <Badge badgeContent={cartItemCount} max={10} color='secondary' overlap='circular' sx={{pl: {sm: 0, md: 2}}}>
                                <IconButton onClick={handleCartClick}>
                                    <ShoppingCartIcon sx={ open ? { color: 'background.beiger' } : {color: 'white'}} />
                                </IconButton>
                            </Badge>
                        </>
                        :
                        <>
                            <Box sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 1,
                            }}>
                                <Button
                                    sx={{ color: 'white', textAlign: 'center', '&:hover': { bgcolor: 'background.hover' }, mr: 2 }}
                                    focusRipple={false}
                                    onClick={() => { setIsCreate(true); setOpen(true); }}
                                >
                                    <PersonAddIcon sx={{ mr: 1 }} />
                                    {'Create'}
                                </Button>
                                <Button
                                    sx={{ color: 'white', textAlign: 'center', '&:hover': { bgcolor: 'background.hover' }, mr: 2 }}
                                    focusRipple={false}
                                    onClick={() => { setIsCreate(false); setOpen(true); }}
                                >
                                    <LoginIcon sx={{ mr: 1 }} />
                                    {'Login'}
                                </Button>
                                <Badge badgeContent={cartItemCount} max={10} color='secondary' overlap='circular' sx={{pl: {sm: 0, md: 2}}}>
                                    <IconButton onClick={handleCartClick}>
                                        <ShoppingCartIcon sx={ open ? { color: 'background.beiger' } : {color: 'white'}} />
                                    </IconButton>
                                </Badge>
                            </Box>
                            <Box sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                            }}>
                                <IconButton
                                    sx={{ color: 'white', textAlign: 'center', '&:hover': { bgcolor: 'background.hover' } }}
                                    focusRipple={false}
                                    onClick={() => { setIsCreate(true); setOpen(true); }}
                                >
                                    <PersonAddIcon />
                                </IconButton>
                                <IconButton
                                    sx={{ color: 'white', textAlign: 'center', '&:hover': { bgcolor: 'background.hover' } }}
                                    focusRipple={false}
                                    onClick={() => { setIsCreate(false); setOpen(true); }}
                                >
                                    <LoginIcon sx={{ mr: 1 }} />
                                </IconButton>
                                <Badge badgeContent={cartItemCount} max={10} color='secondary' overlap='circular' sx={{pl: {sm: 0, md: 2}}}>
                                    <IconButton onClick={handleCartClick}>
                                        <ShoppingCartIcon sx={ open ? { color: 'background.beiger' } : {color: 'white'}} />
                                    </IconButton>
                                </Badge>
                            </Box>
                        </>}
                </Box>

            </Toolbar>
        </Container>
    )
}