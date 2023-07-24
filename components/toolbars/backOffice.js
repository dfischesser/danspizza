
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
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TuneIcon from '@mui/icons-material/Tune';
//import Link, { NextLinkComposed } from 'next/link'
import Link, { NextLinkComposed } from '../../components/Link'
import Container from '@mui/material/Container';
import CottageIcon from '@mui/icons-material/Cottage';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BarChartIcon from '@mui/icons-material/BarChart';

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

export function BackOfficeToolbar({
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleCloseNavMenu,
    handleOpenUserMenu,
    handleCloseUserMenu,
    setIsBackOffice,
    setOpen,
    isLoggedIn,
    userName,
    role,
    handleCartClick,
    cartHasItems,
    open }) {

    return (
        <Container maxWidth="xl" sx={{ bgcolor: 'black' }}>
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
                >   BACK
                    <LocalPizzaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    OFFICE
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
                        <MenuItem component={NextLinkComposed} to='/backoffice/manage' onClick={handleCloseNavMenu} sx={{ py: 0, my: 0 }}>
                            <ReceiptIcon sx={{ mr: 2 }} />
                            Manage Orders
                        </MenuItem>
                        <MenuItem component={NextLinkComposed} to='/backoffice/editSite' onClick={handleCloseNavMenu} sx={{ py: 0, my: 0 }}>
                            <ModeEditIcon sx={{ mr: 2 }} />
                            Edit Site
                        </MenuItem>
                        <MenuItem component={NextLinkComposed} to='/backoffice/sales' onClick={handleCloseNavMenu} sx={{ py: 0, my: 0 }}>
                            <BarChartIcon sx={{ mr: 2 }} />
                            Sales
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
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-evenly' }}>
                    <Box>
                    <Tooltip title={'Store Front'} >
                    <Button
                        component={NextLinkComposed}
                        onClick={() => { handleCloseNavMenu('');}}
                        to='/'
                        sx={{ ml: 2, my: 'auto', color: 'white', '&:hover': {bgcolor: '#3c3c3c'}  }}
                    >
                    <CottageIcon sx={{ mx:'auto',  width: '100%' }} />
                    </Button>
                    </Tooltip>
                    <Tooltip title={'Manage Orders'} >
                    <Button
                        component={NextLinkComposed}
                        onClick={handleCloseNavMenu}
                        to='/backoffice/manage'
                        sx={{ my: 'auto', color: 'white', '&:hover': {bgcolor: '#3c3c3c'} }}
                    >
                    <ReceiptIcon sx={{ mx:'auto', width: '100%' }} />
                    </Button>
                    </Tooltip>
                    <Tooltip title={'Edit Site'} >
                    <Button
                        component={NextLinkComposed}
                        onClick={handleCloseNavMenu}
                        to='/backoffice/editSite'
                        sx={{ my: 'auto', color: 'white', '&:hover': {bgcolor: '#3c3c3c'}  }}
                    >
                        <ModeEditIcon sx={{mx:'auto', width: '100%' }} />
                        
                    </Button>
                    </Tooltip>
                    <Tooltip title={'Sales'} >
                    <Button
                        component={NextLinkComposed}
                        onClick={handleCloseNavMenu}
                        to='/backoffice/sales'
                        sx={{ my: 'auto', color: 'white', '&:hover': {bgcolor: '#3c3c3c'} }}
                    >
                        <BarChartIcon sx={{ mx:'auto', width: '100%' }} />
                        
                    </Button>
                    </Tooltip>
                    </Box>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    {isLoggedIn ?
                        <>
                            <Tooltip title="Open settings">
                                <Button
                                    sx={{ my: 'auto', color: 'white', '&:hover': {bgcolor: '#3c3c3c'} }}
                                    onClick={handleOpenUserMenu}
                                >
                                    {userName ? userName + ' (' + role + ')' : 'Account'}
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
                        </>
                        :
                        <>
                            <Tooltip title="Open settings">
                                <Button
                                    sx={{ color: 'white' }}
                                    onClick={() => setOpen(true)}
                                >
                                    {'Login'}
                                </Button>
                            </Tooltip>
                        </>}
                </Box>

            </Toolbar>
        </Container>
    )
}