import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import Link from 'next/link'
import jwt_decode from 'jwt-decode';
import Modal from '@mui/material/Modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Popper from '@mui/material/Popper';
import { useState, useEffect } from 'react';
import { getCookie } from './getCookie';
import { Login } from '../components/login';
import { Cart } from '../components/cart';
import Fade from '@mui/material/Fade';
import theme from '../components/theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MainToolbar } from '../components/toolbars/main';
import { OrderToolbar } from '../components/toolbars/order';
import { BackOfficeToolbar } from '../components/toolbars/backOffice';
import { useRouter } from 'next/router'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  aspectRatio: '1/1.618',
  width: {
    xs: '80vw', // theme.breakpoints.up('xs')
    sm: '55vw', // theme.breakpoints.up('sm')
    md: '30vw', // theme.breakpoints.up('md')
    lg: '20vw', // theme.breakpoints.up('lg')
    xl: '15vw', // theme.breakpoints.up('xl')
  },
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  px: 4,
  pt: 2,
  pb: 1
};

export function ResponsiveAppBar(props) {
  console.log('props:' + JSON.stringify(props))
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElCart, setAnchorElCart] = useState(null);
  const [hasCookie, setHasCookie] = useState(false)
  const [userName, setUserName] = useState(false)
  const [role, setRole] = useState(false)
  const [isCreate, setIsCreate] = useState(false)
  const [isStep2, setIsStep2] = useState(false)

  const open = Boolean(anchorElCart);
  const id = open ? 'simple-popper' : undefined;
  const router = useRouter();
  console.log('current path: ' + router.asPath)

  useEffect(() => {
    if (!document.cookie || document.cookie == "token=") {
      console.log('appbar useeffect hit')
      setHasCookie(false)
      props.setIsLoggedIn(false)
      if (router.asPath !== '/' || '/menu') {
        props.setIsBackOffice(false)
        router.push('/')
      }
    }
    else {
      let token = getCookie('token')
      console.log('Decoded Token: ' + JSON.stringify(jwt_decode(token)))
      setUserName(jwt_decode(token).firstName)
      setRole(jwt_decode(token).role)
      setHasCookie(true)
      props.setIsLoggedIn(true)

    }
    return () => console.log('cleanup code hit')
  }, [hasCookie, props.isLoggedIn, userName, props.isBackOffice])

  function logOut() {
    console.log('logout hit! ');
    console.log('logout state of hasCookie: ' + hasCookie)
    document.cookie = "token=";
    setHasCookie(false)
    props.setIsLoggedIn(false)
    setIsCreate(false)
    setIsStep2(false)
  }

  const handleCartClick = (event) => {
    console.log('Navbar handleClick: ' + event.currentTarget)
    setAnchorElCart(anchorElCart ? null : event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseNavMenu = (page) => {
    console.log('page:' + page)
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    switch (setting) {
      case 'Logout': {
        logOut()
      }
      case 'Account': {
        props.setIsBackOffice(false)
      }
    }
    setAnchorElUser(null);
  };

  console.log('anchoreluser: ' + anchorElUser)
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
          {props.isBackOffice ?
            <BackOfficeToolbar
            anchorElNav={anchorElNav}
            anchorElUser={anchorElUser}
            handleOpenNavMenu={(page) => handleOpenNavMenu(page)}
            handleCloseNavMenu={(page) => handleCloseNavMenu(page)}
            handleOpenUserMenu={(setting) => handleOpenUserMenu(setting)}
            handleCloseUserMenu={(setting) => handleCloseUserMenu(setting)}
            setOpen={(data) => setOpen(data)}
            setHasOrder={(data) => props.setHasOrder(data)}
            handleCartClick={(e) => handleCartClick(e)}
            setIsBackOffice={(data) => props.setIsBackOffice(data)}
            open={open}
            hasCookie={hasCookie}
            userName={userName}
            role={role}
            cartHasItems={props.currentCartItems.length > 0}
          /> :
          props.hasOrder ?
            <OrderToolbar
              anchorElNav={anchorElNav}
              anchorElUser={anchorElUser}
              handleOpenNavMenu={(page) => handleOpenNavMenu(page)}
              handleCloseNavMenu={(page) => handleCloseNavMenu(page)}
              handleOpenUserMenu={(setting) => handleOpenUserMenu(setting)}
              handleCloseUserMenu={(setting) => handleCloseUserMenu(setting)}
              setOpen={(data) => setOpen(data)}
              setHasOrder={(data) => props.setHasOrder(data)}
              handleCartClick={(e) => handleCartClick(e)}
              open={open}
              hasCookie={hasCookie}
              userName={userName}
              role={role}
              cartHasItems={props.currentCartItems.length > 0}
            /> :
            <MainToolbar
              anchorElNav={anchorElNav}
              anchorElUser={anchorElUser}
              handleOpenNavMenu={(page) => handleOpenNavMenu(page)}
              handleCloseNavMenu={(page) => handleCloseNavMenu(page)}
              handleOpenUserMenu={(setting) => handleOpenUserMenu(setting)}
              handleCloseUserMenu={(setting) => handleCloseUserMenu(setting)}
              setOpen={(data) => props.setOpen(data)}
              handleCartClick={(e) => handleCartClick(e)}
              setIsBackOffice={(data) => props.setIsBackOffice(data)}
              setTest={(data) => setLoginButton(data)}
              isBackOffice={props.isBackOffice}
              open={open}
              hasCookie={hasCookie}
              userName={userName}
              role={role}
              cartHasItems={props.currentCartItems.length > 0}
            />
          }
          </AppBar>
          
        {!props.hasOrder &&
          <Popper id={id} open={open} anchorEl={anchorElCart} placement='bottom-end' transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={300}>
                <Box>
                  <Cart
                    open={props.openLogin}
                    currentCartItems={props.currentCartItems}
                    setOpenLogin={(data) => props.setOpen(data)}
                    removeItem={(foodItem) => props.removeItem(foodItem)}
                    handleAddOrderClick={() => props.handleAddOrderClick()}
                    setUserName={(data) => setUserName(data)}
                    setIsCreate={(data) => setIsCreate(data)}
                    setIsStep2={(data) => setIsStep2(data)}
                    setAnchorElCart={(data) => setAnchorElCart(data)}
                    isLoggedIn={props.isLoggedIn}
                    userName={userName}
                  />
                </Box>
              </Fade>
            )}
          </Popper>}
        <Modal
          open={props.open}
          onClose={(e) => {props.setOpen(false); setLoginButton(true)}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Login
              isLoggedIn={props.isLoggedIn}
              open={props.open}
              isCreate={isCreate}
              isStep2={isStep2}
              setOpen={(data) => props.setOpen(data)}
              setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
              setHasCookie={(data) => setHasCookie(data)}
              setIsCreate={(data) => setIsCreate(data)}
              setIsStep2={(data) => setIsStep2(data)}
              setUserName={(data) => setUserName(data)}
            />
          </Box>
        </Modal>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;

{/* <Toolbar disableGutters>
          <Link href='/' onClick={(e) => {props.hasOrder && e.preventDefault();}} style={{all: 'unset', cursor: 'revert'}}>
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
            >
              DAN'S<br />PIZZA
            </Typography>
          </Link>
          <LocalPizzaIcon sx={{ fontSize: '40px', mr: 2 }} />

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
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {!props.hasOrder && pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link prefetch style={{ all: 'unset' }} href={page === 'Home' ? '/' : page.toLowerCase()}>{page}</Link>
                </Button>))}
            {props.hasOrder && 
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link prefetch style={{ all: 'unset' }} href='/order' onClick={(e) => {e.preventDefault()}}>Order</Link>
            </Button>
            }
          </Box>
          {!props.hasOrder && (hasCookie ? 
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                  sx={{ color: 'white' }}
                  onClick={handleOpenUserMenu}
                >
                {userName ? userName : 'Account'}
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
              {settings.map((setting) => ( 
                <MenuItem key={setting.option} onClick={() => handleCloseUserMenu(setting.option)}>
                  <Link href={setting.url} style={{all:'unset'}}>
                    <Typography textAlign="center">{setting.option}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {role == 'Employee' && 
                <MenuItem onClick={() => handleCloseUserMenu('Back Office')} href={'/backoffice/manage'}>
                    <Typography textAlign="center">Back Office</Typography>
                </MenuItem>
              }
            </Menu>
            </Box> : 
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                  sx={{ color: 'white' }}
                  onClick={() => props.setOpen(true)}
                >
                {'Login'}
              </Button>
            </Tooltip>
          </Box>
          )}
          
          {(!props.isBackOffice && !props.hasOrder) &&
                <IconButton onClick={handleCartClick}> 
                  {(props.currentCartItems.length > 0) ?
                  open ?
                    <ShoppingCartIcon/>
                    : 
                    <ShoppingCartIcon sx={{color:'#8d762b' }}/> :
                    <ShoppingCartIcon sx={{color:'white'}}/>
                  }
                </IconButton>
            }
        </Toolbar> */}