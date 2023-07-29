
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
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'
import { Abril_Fatface } from 'next/font/google';
import { NextLinkComposed } from '../Link';

export const abrilFatFace = Abril_Fatface({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
  });

export function OrderToolbar({
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleCloseNavMenu,
    handleOpenUserMenu,
    handleCloseUserMenu,
    setOpen,
    hasCookie,
    userName,
    role,
    handleCartClick,
    cartHasItems,
    open,
    setHasOrder }) {


       
    const pages = ['Home', 'Menu'];
    return (
        
        <Container maxWidth="xl">
        <Toolbar disableGutters>
                <Typography
                    fontFamily={abrilFatFace.style.fontFamily}
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
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
                    {pages.map((page) => (
                        <MenuItem key={page}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
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
                    
            </Box>
            
            <Button
                sx={{ color: 'white' }}
                onClick={() => setHasOrder(false)}
                component={NextLinkComposed} 
                to='/menu' 
            >
                    <ExitToAppIcon sx={{mr:1}}/>
                     Back
            </Button>
        </Toolbar>
        </Container>
    )
}