
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
import { Abril_Fatface } from 'next/font/google';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router'

export const abrilFatFace = Abril_Fatface({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const style = {
    my: 'auto',
    color: 'white',
    '&:hover': { bgcolor: '#3c3c3c' }
}
const activeStyle = {
    my: 'auto',
    color: 'background.beiger',
    '&:hover': { bgcolor: '#3c3c3c' }
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

    const router = useRouter();
    return (
        <Container maxWidth="xl" sx={{ bgcolor: 'black' }}>
            <Toolbar disableGutters>
                <Typography
                    fontFamily={abrilFatFace.style.fontFamily}
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 7,
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >   BACK
                    <LocalPizzaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: .5 }} />
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
                    fontFamily={abrilFatFace.style.fontFamily}
                    noWrap
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    BACK OFFICE
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>
                    <Tooltip title={'Store Front'} >
                        <Button
                            component={NextLinkComposed}
                            onClick={() => { handleCloseNavMenu(''); }}
                            to='/'
                            sx={style}
                        >
                            <CottageIcon fontSize='small' sx={{mr:1}} />
                            Home
                        </Button>
                    </Tooltip>
                    <Tooltip title={'Manage Orders'} >
                        <Button
                            component={NextLinkComposed}

                            onClick={handleCloseNavMenu}
                            to='/backoffice/manage'
                            sx={router.asPath.endsWith('manage') ? activeStyle : style}
                        >
                            <ReceiptIcon fontSize='small' sx={{mr:1}} />
                            Manage
                        </Button>
                    </Tooltip>
                    <Tooltip title={'Edit Site'} >
                        <Button
                            component={NextLinkComposed}
                            onClick={handleCloseNavMenu}
                            to='/backoffice/editSite'
                            sx={router.asPath.endsWith('editSite') ? activeStyle : style}
                        >
                            <ModeEditIcon fontSize='small' sx={{mr:1}} />
                            Edit Site
                        </Button>
                    </Tooltip>
                    <Tooltip title={'Sales'} >
                        <Button
                            component={NextLinkComposed}
                            onClick={handleCloseNavMenu}
                            to='/backoffice/sales'
                            sx={router.asPath.endsWith('sales') ? activeStyle : style}
                        >
                            <BarChartIcon fontSize='small' sx={{mr:1}} />
                            Sales
                        </Button>
                    </Tooltip>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    {isLoggedIn ?
                        <>
                            <Tooltip title="Open settings">
                                <Button
                                    sx={Boolean(anchorElUser) ? { color: 'background.beiger' } : { color: 'white' }}
                                    onClick={handleOpenUserMenu}
                                >
                                    <AccountCircleIcon sx={{ml: {xs: 0, md: 7}}} />
                                    <Typography sx={{ my: 'auto', ml: 1, maxWidth: 175, fontWeight: 500, fontSize: '.75rem', display: { xs: 'none', sm: 'inherit' } }}>
                                        {userName}
                                    </Typography>
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