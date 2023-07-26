// pages/_app.js
import { useState, useReducer, useEffect, useLayoutEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../components/createEmotionCache';
import '../css/styles.css'
import '../css/navbar.css'
import '../css/index.css'
import '../css/menu.css'
import '../css/cart.css'
import '../css/customize.css'
import '../css/login.css'
import '../css/account.css'
import { Router, useRouter } from 'next/router';
import Layout from '../components/layout'
import theme from '../components/theme';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/appBar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Footer from '../components/footer'
import { getCookie } from '../components/getCookie';
import FloatingActionButtons from '../components/floatyboi';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
//import { ApplicationInsights } from '@microsoft/applicationinsights-web';
//import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
//import { createBrowserHistory } from "history";
//import { AppInsightsErrorBoundary } from "@microsoft/applicationinsights-react-js";
import { WelcomeModalBody } from '../components/welcomeModalBody';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//const browserHistory = createBrowserHistory({ basename: '' });
//var reactPlugin = new ReactPlugin();
// Add the Click Analytics plug-in.
/* var clickPluginInstance = new ClickAnalyticsPlugin();
   var clickPluginConfig = {
     autoCapture: true
}; */
// var appInsights = new ApplicationInsights({
//   config: {
//     connectionString: 'InstrumentationKey=92e06860-77de-4fc0-8aec-702644f32bf1;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/',
//     enableAutoRouteTracking: true,
//     // If you're adding the Click Analytics plug-in, delete the next line.
//     extensions: [reactPlugin],
//     // Add the Click Analytics plug-in.
//     // extensions: [reactPlugin, clickPluginInstance],
//     // extensionConfig: {
//     //   [reactPlugin.identifier]: { history: browserHistory }
//     // Add the Click Analytics plug-in.
//     // [clickPluginInstance.identifier]: clickPluginConfig
//     //}
//   }
// });
// appInsights.loadAppInsights();
// appInsights.trackPageView();

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {

  const router = useRouter()
  //set states
  const [openModal, setOpenModal] = useState({ cart: false, customize: false, login: false })
  const [cartItems, dispatch] = useReducer(cartItemsReducer, [])
  const [cartID, setCartID] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [hasOrder, setHasOrder] = useState(false)
  const [isBackOffice, setIsBackOffice] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [foodToCustomize, setfoodToCustomize] = useState({ foodID: 0, menuCategoryID: 0, foodName: '' });
  const [open, setOpen] = useState(false);
  const [openWelcome, setOpenWelcome] = useState(false);
  const [role, setRole] = useState(false)
  const [userName, setUserName] = useState(false)

  const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    width: { xs: '75vw', md: '25vw', },
    //height: {xs: '80vh', md: '75vh',},
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const handleCloseWelcome = (event, reason) => {
    console.log('welcome handleclose hit. reason: ' + reason)
    if (reason === 'clickaway') {
      console.log('clickaway')
      return;
    }
    if (reason === 'backdropClick') {
      console.log('backdropClick')
      return;
    }
    console.log('setting setOpenWelcome')
    localStorage.setItem('welcomeModalClosed', 'true')
    setOpenWelcome(false);
    return
  };

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${shallow ? 'with' : 'without'
        } shallow routing`
      )
    }

    let welcomeModalClosed = window.localStorage.getItem('welcomeModalClosed') ?? false
    console.log('welcomeModalClosed: ' + welcomeModalClosed)
    if (!welcomeModalClosed) {
      setOpenWelcome(true)
    }

    if (window.localStorage.getItem("cart") && cartItems.length === 0) {
      console.log('local storage cart: ' + window.localStorage.getItem("cart"))
      console.log('local storage cartID: ' + JSON.parse(window.localStorage.getItem("cart")).findLast(x => x).cartItemID)
      setCartID(JSON.parse(window.localStorage.getItem("cart")).findLast(x => x).cartItemID + 1)
      dispatch(
        {
          type: 'loaded',
          cartItems: JSON.parse(window.localStorage.getItem("cart"))
        }
      )
    } else {
      if (cartItems.length > 0) {
        window.localStorage.setItem("cart", JSON.stringify(cartItems))
      }
    }

    if (router.isReady && router.asPath.startsWith('/backoffice')) {
      console.log('backoffice detected')
      setIsBackOffice(true)
      console.log('backoffice set 1: ' + isBackOffice)
    } else {
      setIsBackOffice(false)
    }

    const firstNameToken = getCookie('firstName')
    const roleToken = getCookie('role')

    console.log('app useeffect role: ' + role)
    console.log('app useeffect userName: ' + userName)

    if (typeof roleToken !== 'undefined') {
      console.log('app useeffect role token: ' + roleToken)
      console.log('app useeffect fName token: ' + firstNameToken)
    }

    if (roleToken) {
      setRole(roleToken)
      setIsLoggedIn(true)
    }

    if (firstNameToken) {
      setUserName(firstNameToken)
    }

    if (router.isReady && router.asPath.startsWith('/order')) {
      console.log('app useeffect hasOrder: ' + hasOrder)
      if (!hasOrder) {
        router.push('/')
      }
    }

    function start() {
      setLoading(true);
      handleRouteChange;
    }
    function end() {
      console.log("end");
      setLoading(false);
      handleRouteChange;
    }
    router.events.on('routeChangeStart', start)
    router.events.on("routeChangeComplete", end)
    router.events.on("routeChangeError", end)


    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    }

  }, [router, loading, cartItems, isBackOffice, openWelcome])

  function handleAddOrderClick() {
    console.log('hasorder set')
    setHasOrder(true)
    //setOpenModal({...openModal, cart: false})
  }

  function handleOpenCustomize(selectedFoodItem) {
    console.log('customize modal open. selected food item: ' + JSON.stringify(selectedFoodItem))
    setfoodToCustomize({ ...selectedFoodItem, customizeOptions: null })
    setOpenModal({ ...openModal, customize: !openModal.customize })
  }


  function addCustomItem(selectedFoodItem) {
    console.log('app add cust selectedFoodItem: ' + JSON.stringify(selectedFoodItem))

    setfoodToCustomize(selectedFoodItem)
    //setOpenModal({...openModal, customize: false, cart: true})
    handleAddItem(selectedFoodItem)
    setOpen(true);
  }

  //handle functions
  function handleAddItem(selectedFood) {
    setCartID(cartID + 1)
    dispatch(
      {
        type: 'added',
        id: cartID,
        foodItem: { ...selectedFood, price: selectedFood.customizeOptions.reduce((a, b) => (a + b.price), 0) }
      }
    )
  }

  function handleRemoveItem(selectedFood) {
    console.log('app handleRemove foodItem: ' + JSON.stringify(selectedFood))
    dispatch(
      {
        type: 'removed',
        id: selectedFood.cartItemID,
        foodItem: selectedFood
      }
    )
  }

  //handleRemoveAllItems
  function handleRemoveAllItems() {
    console.log('handleRemoveAllItems hit')
    dispatch(
      {
        type: 'removedAll'
      }
    )
  }

  function cartItemsReducer(cartItems, action) {
    switch (action.type) {
      case 'added': {
        action.foodItem = { ...action.foodItem, cartItemID: action.id }
        return [
          ...cartItems,
          action.foodItem
        ]
      }
      case 'loaded': {
        return action.cartItems
      }
      case 'removed': {
        console.log('removing id: ' + action.id)
        const cart = cartItems.filter(item => item.cartItemID != action.id)
        if (cart.length === 0) {
          localStorage.setItem('cart', '');
        }
        return cart
      }
      case 'removedAll': {
        console.log('Removing all items')
        localStorage.setItem('cart', '');
        return cartItems = []
      }
      default: {
        throw Error('Unknown Action: ' + action.type)
      }
    }
  }
  const handleClose = (event, reason) => {
    console.log('alert handleclose hit. reason: ' + reason)
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  console.log('asPath: ' + router.asPath)
  console.log('isBackOffice: ' + isBackOffice)
  console.log('_app isLoggedIn: ' + isLoggedIn)
  //Check Login Status
  return (
    <CacheProvider value={emotionCache}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      {/* <AppInsightsErrorBoundary onError={() => <h1>Something went wrong! Report all bugs to report@danspizza.com</h1>} appInsights={reactPlugin}> */}
      <Layout>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth='md' disableGutters>
            <ResponsiveAppBar
              hasOrder={hasOrder}
              isLoggedIn={isLoggedIn}
              open={openLogin}
              currentCartItems={cartItems}
              isBackOffice={isBackOffice}
              role={role}
              userName={userName}
              setUserName={(data) => setUserName(data)}
              setRole={(data) => setRole(data)}
              setIsBackOffice={(data) => setIsBackOffice(data)}
              setIsLoggedIn={(data) => setIsLoggedIn(data)}
              setOpen={(data) => setOpenLogin(data)}
              setHasOrder={(data) => setHasOrder(data)}
              removeItem={(foodItem) => handleRemoveItem(foodItem)}
              handleAddOrderClick={() => handleAddOrderClick()}
            />
            {loading && (
              <Backdrop
                transitionDuration={3000}
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
            <Paper id={'lepapier'} square variant='outlined'>
              {router.asPath == '/menu' &&
                <Component {...pageProps}
                  currentCartItems={cartItems}
                  handleOpenCustomize={(foodItem) => handleOpenCustomize(foodItem)}
                  openModal={openModal}
                  setOpenModal={(data) => setOpenModal(data)}
                  foodToCustomize={foodToCustomize}
                  addCustomItem={(foodItem) => addCustomItem(foodItem)}
                />
              }
              {router.asPath == '/' &&
                <Component {...pageProps}
                  isLoggedIn={isLoggedIn}
                  role={role}
                  userName={userName}
                  setUserName={(data) => setUserName(data)}
                  setIsLoggedIn={(data) => setIsLoggedIn(data)}
                />
              }
              {router.asPath == '/order' &&
                <Component {...pageProps}
                  currentCartItems={cartItems}
                  removeAllItems={() => handleRemoveAllItems()}
                  removeItem={(foodItem) => handleRemoveItem(foodItem)}
                  openModal={openModal}
                  setHasOrder={(data) => setHasOrder(data)}
                  setOpenModal={(data) => setOpenModal(data)}
                />
              }
              {router.asPath == '/account' &&
                <Component {...pageProps}
                  isLoggedIn={isLoggedIn}
                />
              }
              {router.asPath == '/backoffice/manage' &&
                <Component {...pageProps}
                  isLoggedIn={isLoggedIn}
                />
              }
              {router.asPath == '/backoffice/editSite' &&
                <Component {...pageProps}
                  isLoggedIn={isLoggedIn}
                />
              }
              {router.asPath == '/backoffice/sales' &&
                <Component {...pageProps}
                  isLoggedIn={isLoggedIn}
                />
              }
              {router.asPath == '/changelog' &&
                <Component {...pageProps}
                  isLoggedIn={isLoggedIn}
                />
              }

              <Box sx={{ textAlign: 'right', position: 'fixed', right: { xs: '0vw', md: '10vw', lg: '13vw', xl: '27vw' }, bottom: { xs: '0vh', sm: '15vh', md: '15vh', lg: '15vh', xl: '20vh' } }} >
                <FloatingActionButtons setIsLoggedIn={(data) => setIsLoggedIn(data)} />
              </Box>
              <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Added to Cart
                </Alert>
              </Snackbar>
            </Paper>
            <Dialog

              open={openWelcome}
              onClose={handleCloseWelcome}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <WelcomeModalBody handleCloseWelcome={handleCloseWelcome} />
              </Box>
            </Dialog>
            <Footer />
          </Container>
        </ThemeProvider>
      </Layout>
      {/* </AppInsightsErrorBoundary> */}
    </CacheProvider>
  )
} 