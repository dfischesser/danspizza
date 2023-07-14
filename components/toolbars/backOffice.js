
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
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

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
        <Container maxWidth="xl" sx={{bgcolor: 'black'}}>
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
                    <MenuItem component={NextLinkComposed} to='/' onClick={handleCloseNavMenu} sx={{py: 0, my: 0}}>Home</MenuItem>
                    <MenuItem component={NextLinkComposed} to='/menu' onClick={handleCloseNavMenu} sx={{py: 0, my: 0}}>Menu</MenuItem>
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
                        onClick={() => {handleCloseNavMenu(''); setIsBackOffice(false)}}
                        to='/'
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Home
                    </Button>
                    <Button
                        component={NextLinkComposed}
                        onClick={handleCloseNavMenu}
                        to='/backoffice/manage'
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Manage Orders
                    </Button>
                    <Button
                        component={NextLinkComposed}
                        onClick={handleCloseNavMenu}
                        to='/backoffice/editSite'
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Edit Site
                    </Button>
            </Box>
            <Box sx={{ flexGrow: 0  }}>
            {isLoggedIn ?
                <>
                    <Tooltip title="Open settings">
                        <Button
                            sx={{ color: 'white', p: 0 }}
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
                                Logout
                        </MenuItem>
                        <MenuItem component={NextLinkComposed} onClick={() => handleCloseUserMenu('Account')} to='/account'>
                                Account
                        </MenuItem>
                        {role == 'Employee' &&
                            <MenuItem component={NextLinkComposed} to={'/backoffice/manage'}>
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