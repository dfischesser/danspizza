import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Popper from '@mui/material/Popper';
import { useState, useEffect, useLayoutEffect, useRef, forwardRef } from 'react';
import { Login } from '../components/login';
import { Cart } from '../components/cart';
import Fade from '@mui/material/Fade';
import theme from '../components/theme';
import Popover from '@mui/material/Popover';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MainToolbar } from '../components/toolbars/main';
import { OrderToolbar } from '../components/toolbars/order';
import { BackOfficeToolbar } from '../components/toolbars/backOffice';
import { useRouter } from 'next/router'
import { fetchy } from '../components/fetchy';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function LogoutStatus(props) {
  const router = useRouter();
  const headers = { 'content-Type': 'application/json' }
  fetchy(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/Login/Logout' : 'https://www.danspizza.dev/api/Login/Logout', 'POST', "", headers)
    .catch((error) => {
      console.log('API error: ' + JSON.stringify(error.message))
      props.setLoginPosted(false)
    })
    .then((data) => {
      console.log('message: ' + data.message)
      console.log('handleFetch login data: ' + JSON.stringify(data))
      if (data.message == "logout success") {
        router.reload();
      }
      props.setLoginPosted(false)
      props.setIsStep2(false)
    })
    .catch((error) => {
      console.log('React fetch error: ' + error.message)
      //console.log('React fetch error: Username/Password combination does not match')
      props.setError('Logout Failed')
      props.setLoginPosted(false)
    })
}


export function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [anchorElCart, setAnchorElCart] = useState(null)
  const [hasCookie, setHasCookie] = useState(false)
  const [openCartAlert, setOpenCartAlert] = useState(false)
  const [isCreate, setIsCreate] = useState(false)
  const [isStep2, setIsStep2] = useState(false)
  const [logoutPosted, setLogoutPosted] = useState(false)
  const [error, setError] = useState(false)

  //const ref = useRef(0)
  const router = useRouter();
  const riffRef = useRef();

  const open = Boolean(anchorElCart);
  const id = open ? 'simple-popper' : undefined;
  console.log('current path: ' + router.asPath)
  console.log('isBackOffice: ' + props.isBackOffice)
  console.log('appbar cart items length: ' + props.currentCartItems.length)

  // const CartyBoi = forwardRef((props, ref) => {
  //   return (
  //     <Cart
  //       {...props}
  //       ref={ref}
  //     />)
  // })

  //console.log('ref: ' + ref.current)

  // useEffect(() => {
  //   console.log('appbar useeffect hit. isloggedIn: ' + props.isLoggedIn)
  //   console.log('appbar useeffect hit. userName: ' + props.userName)
  //   const firstNameToken = getCookie('firstName')
  //   const roleToken = getCookie('role')
  //   const loginToken = getCookie('LoggedIn')
  //   props.setRole(getCookie('role'))
  //   props.setUserName(firstNameToken)

  //   if (roleToken) {
  //     props.setIsLoggedIn(true)
  //     if (loginToken === 'true') {
  //       console.log('logout should be false now. checking path: ' + router.asPath)
  //       if (router.asPath !== '/' && !router.asPath.startsWith('/menu')) {
  //         console.log('redirecting to index')
  //         router.push('/')
  //       }
  //       console.log('appbar -> no firstname or login token or login is false')
  //       props.setIsLoggedIn(false)
  //     }
  //     console.log('backoffice set: ' + props.isBackOffice)
  //   }
  //   if (router.isReady && router.asPath.startsWith('/order')) {
  //     if (props.hasOrder === false) {
  //       router.push('/')
  //     }
  //   }

  // }, [props.userName, props.role, props.isLoggedIn, props.isBackOffice])
  function logOut() {
    console.log('logout hit. state of isLoggedIn: ' + props.isLoggedIn)
    setLogoutPosted(true)
  }

  const handleCartClick = (event) => {
    console.log('appbar cart handleClick: ' + event.currentTarget)
    if (router.asPath === '/menu' && props.currentCartItems.length === 0) {
      setOpenCartAlert(true)
    } else {
      setAnchorElCart(anchorElCart ? null : event.currentTarget);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorElCart(false);
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
    }
    setAnchorElUser(null);
  };

  console.log('appBar username: ' + props.userName)

  const handleCloseCartAlert = (event, reason) => {
    console.log('alert handleclose hit. reason: ' + reason)
    if (reason === 'clickaway') {
      return;
    }
    setOpenCartAlert(false);
  };

  return (
    <>
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
            setOpenCartAlert={(data) => setOpenCartAlert(data)}
            isLoggedIn={props.isLoggedIn}
            open={open}
            hasCookie={hasCookie}
            userName={props.userName}
            role={props.role}
            cartItemCount={props.currentCartItems.length}
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
              setOpenCartAlert={(data) => setOpenCartAlert(data)}
              open={open}
              hasCookie={hasCookie}
              userName={props.userName}
              role={props.role}
              cartItemCount={props.currentCartItems.length}
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
              setOpenCartAlert={(data) => setOpenCartAlert(data)}
              isBackOffice={props.isBackOffice}
              isLoggedIn={props.isLoggedIn}
              open={open}
              hasCookie={hasCookie}
              userName={props.userName}
              role={props.role}
              cartItemCount={props.currentCartItems.length}
            />
        }
      </AppBar>

      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={openCartAlert} autoHideDuration={2000} onClose={handleCloseCartAlert}>
        <Alert onClose={handleCloseCartAlert} severity='info' sx={{ width: '100%' }}>
          Cart is Empty
        </Alert>
      </Snackbar>
      {!props.hasOrder &&
        <Popover id={id} open={open} anchorEl={anchorElCart} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} onClose={handleCartClose} children={riffRef}>
          <Box ref={riffRef}>
            <Cart
              open={props.openLogin}
              currentCartItems={props.currentCartItems}
              setOpenLogin={(data) => props.setOpen(data)}
              removeItem={(foodItem) => props.removeItem(foodItem)}
              removeAllItems={() => props.removeAllItems()}
              handleAddOrderClick={() => props.handleAddOrderClick()}
              setUserName={(data) => props.setUserName(data)}
              setIsCreate={(data) => setIsCreate(data)}
              setIsStep2={(data) => setIsStep2(data)}
              setAnchorElCart={(data) => setAnchorElCart(data)}
              isLoggedIn={props.isLoggedIn}
              userName={props.userName}
              handleCartClose={() => handleCartClose()}
            />
          </Box>
        </Popover>}
      {logoutPosted && <LogoutStatus setLoginPosted={(data) => setLogoutPosted(data)} setError={(data) => setError(data)} />}
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
    </>
  );
}
export default ResponsiveAppBar;