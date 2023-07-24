import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Popper from '@mui/material/Popper';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
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
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElCart, setAnchorElCart] = useState(null);
  const [hasCookie, setHasCookie] = useState(false)
  const [isCreate, setIsCreate] = useState(false)
  const [isStep2, setIsStep2] = useState(false)

  //const ref = useRef(0)

  const open = Boolean(anchorElCart);
  const id = open ? 'simple-popper' : undefined;
  const router = useRouter();
  console.log('current path: ' + router.asPath)
  console.log('isBackOffice: ' + props.isBackOffice)
  //console.log('ref: ' + ref.current)

  useEffect(() => {
    console.log('appbar useeffect hit. isloggedIn: ' + props.isLoggedIn)
    console.log('appbar useeffect hit. userName: ' + props.userName)
    const firstNameToken = getCookie('firstName')
    const loginToken = getCookie('LoggedIn')
    props.setRole(getCookie('role'))
    props.setUserName(getCookie('firstName'))

    if (loginToken) {
      if (loginToken === 'true') {
        console.log('appbar useeffect setting role and username.')
        if (!props.userName) {
          if (!firstNameToken) {
            console.log('refreshing with firstname cookie: ' + getCookie('firstName'))
            router.reload()
          }
        }
        console.log('appbar useeffect setting role and username.' + props.userName)
        props.setIsLoggedIn(true)
      } else if (loginToken === 'create') {
        //router.reload()
        props.setIsLoggedIn(true)
        //maybe open step2 create modal?
      } else {
        console.log('logout should be false now. checking path: ' + router.asPath)
        if (router.asPath !== '/' && !router.asPath.startsWith('/menu')) {
          console.log('redirecting to index')
          router.push('/')
        }
        console.log('appbar -> no firstname or login token or login is false')
        props.setIsLoggedIn(false)
      }
      console.log('backoffice set: ' + props.isBackOffice)
    }
    if (router.isReady && router.asPath.startsWith('/order')) {
      if (props.hasOrder === false) {
        router.push('/')
      }
    }

  }, [props.userName, props.role, props.isLoggedIn, props.isBackOffice])
  function logOut() {
    console.log('logout hit. state of isLoggedIn: ' + props.isLoggedIn)
    document.cookie = "LoggedIn=false"
    router.reload()
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
        return;
      }
    }
    setAnchorElUser(null);
  };

  console.log('appBar username: ' + props.userName)
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
            isLoggedIn={props.isLoggedIn}
            open={open}
            hasCookie={hasCookie}
            userName={props.userName}
            role={props.role}
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
              userName={props.userName}
              role={props.role}
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
              setIsCreate={(data) => setIsCreate(data)}
              setIsStep2={(data) => setIsStep2(data)}
              handleCartClick={(e) => handleCartClick(e)}
              setIsBackOffice={(data) => props.setIsBackOffice(data)}
              setTest={(data) => setLoginButton(data)}
              isBackOffice={props.isBackOffice}
              isLoggedIn={props.isLoggedIn}
              open={open}
              hasCookie={hasCookie}
              userName={props.userName}
              role={props.role}
              cartHasItems={props.currentCartItems.length > 0}
              //riffRef={ref}
            />
        }
      </AppBar>

      {!props.hasOrder &&
        <Popper id={id} open={open} anchorEl={anchorElCart} placement='bottom-end' transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={300}>
              <Box sx={{}}>
                <Cart
                  open={props.openLogin}
                  currentCartItems={props.currentCartItems}
                  setOpenLogin={(data) => props.setOpen(data)}
                  removeItem={(foodItem) => props.removeItem(foodItem)}
                  handleAddOrderClick={() => props.handleAddOrderClick()}
                  setUserName={(data) => props.setUserName(data)}
                  setIsCreate={(data) => setIsCreate(data)}
                  setIsStep2={(data) => setIsStep2(data)}
                  setAnchorElCart={(data) => setAnchorElCart(data)}
                  isLoggedIn={props.isLoggedIn}
                  userName={props.userName}
                />
              </Box>
            </Fade>
          )}
        </Popper>}
      <Modal
        open={props.open}
        onClose={(e) => { props.setOpen(false) }} //; setLoginButton(true)
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
            setUserName={(data) => props.setUserName(data)}
            setRole={(data) => props.setRole(data)}
            closeLogin={() => closeLogin()}
          />
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;