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
import Head from 'next/head';
import Dialog from '@mui/material/Dialog';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
//import { createBrowserHistory } from "history";
import { AppInsightsErrorBoundary } from "@microsoft/applicationinsights-react-js";
import { WelcomeModalBody } from '../components/welcomeModalBody';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//const browserHistory = createBrowserHistory({ basename: '' });
var reactPlugin = new ReactPlugin();
//Add the Click Analytics plug-in.
/* var clickPluginInstance = new ClickAnalyticsPlugin();
   var clickPluginConfig = {
     autoCapture: true
}; */
var appInsights = new ApplicationInsights({
  config: {
    connectionString: 'InstrumentationKey=a30a70a3-608d-416a-9f96-872ec43a621a;IngestionEndpoint=https://centralus-2.in.applicationinsights.azure.com/;LiveEndpoint=https://centralus.livediagnostics.monitor.azure.com/',
    enableAutoRouteTracking: true,
    // If you're adding the Click Analytics plug-in, delete the next line.
    extensions: [reactPlugin],
    // Add the Click Analytics plug-in.
    // extensions: [reactPlugin, clickPluginInstance],
    // extensionConfig: {
    //   [reactPlugin.identifier]: { history: browserHistory }
    // Add the Click Analytics plug-in.
    // [clickPluginInstance.identifier]: clickPluginConfig
    //}
  }
});
appInsights.loadAppInsights();
appInsights.trackPageView();

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
  const [userName, setUserName] = useState('')
  const [id, setId] = useState(0)

  const style = {
    width: { md: '50vw', lg: '40vw', xl: '30vw' },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  if (process.env.NODE_ENV == 'production') {
    console.log = function () { }
  }
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
    sessionStorage.setItem('welcomeModalClosed', 'true')
    setOpenWelcome(false);
    return
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('location: ' + window.location)
      if (!location.toString().startsWith('https://www') && (process.env.NODE_ENV !== 'development')) {
        location.replace(`https://www.danspizza.dev${location.pathname}`);
      }
    }

    const effectCartName = 'cart' + id
    console.log('effect cart name: ' + effectCartName)

    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${shallow ? 'with' : 'without'
        } shallow routing`
      )
    }

    let welcomeModalClosed = sessionStorage.getItem('welcomeModalClosed') ?? false
    console.log('welcomeModalClosed: ' + welcomeModalClosed)
    if (!welcomeModalClosed && location.toString().startsWith('https://www')) {
      setOpenWelcome(true)
    }

    console.log('effect cart name: ' + effectCartName)
    console.log('effect cart length: ' + effectCartName.length)
    if (window.localStorage.getItem(effectCartName) && cartItems.length === 0) {
      setCartID(JSON.parse(window.localStorage.getItem(effectCartName)).findLast(x => x).cartItemID + 1)
      dispatch(
        {
          type: 'loaded',
          cartItems: JSON.parse(window.localStorage.getItem(effectCartName))
        }
      )
    } else {
      if (cartItems.length > 0) {
        window.localStorage.setItem(effectCartName, JSON.stringify(cartItems))
      }
    }

    if (router.isReady && router.asPath.startsWith('/backoffice')) {
      setIsBackOffice(true)
    } else {
      setIsBackOffice(false)
    }

    const firstNameToken = getCookie('firstName')
    const roleToken = getCookie('role')
    const idToken = getCookie('id')

    console.log('id is : ' + idToken)

    if (roleToken) {
      setRole(roleToken)
      setIsLoggedIn(true)
    }

    if (firstNameToken) {
      setUserName(firstNameToken)
    }

    if (idToken) {
      setId(idToken)
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
    setHasOrder(true)
    //setOpenModal({...openModal, cart: false})
  }

  function handleOpenCustomize(selectedFoodItem) {
    //console.log('customize modal open. selected food item: ' + JSON.stringify(selectedFoodItem))
    setfoodToCustomize({ ...selectedFoodItem, customizeOptions: null })
    setOpenModal({ ...openModal, customize: !openModal.customize })
  }


  function addCustomItem(selectedFoodItem) {
    //console.log('app add cust selectedFoodItem: ' + JSON.stringify(selectedFoodItem))

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
        foodItem: selectedFood,
        userID: id
      }
    )
  }

  //handleRemoveAllItems
  function handleRemoveAllItems() {
    console.log('handleRemoveAllItems hit')
    dispatch(
      {
        type: 'removedAll',
        userID: id
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
          localStorage.setItem('cart' + action.userID, '');
          localStorage.setItem('cart0', '');
        }
        return cart
      }
      case 'removedAll': {
        console.log('Removing all items')
        localStorage.setItem('cart' + action.userID, '');
        localStorage.setItem('cart0', '');
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
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppInsightsErrorBoundary onError={() => <h1>Something went wrong! Report all bugs to report@danspizza.com</h1>} appInsights={reactPlugin}>
      <Layout>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container id={'containment'} maxWidth='md' disableGutters>
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
              removeAllItems={() => handleRemoveAllItems()}
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
              <Component {...pageProps}
                currentCartItems={cartItems}
                handleOpenCustomize={(foodItem) => handleOpenCustomize(foodItem)}
                openModal={openModal}
                setOpenModal={(data) => setOpenModal(data)}
                foodToCustomize={foodToCustomize}
                addCustomItem={(foodItem) => addCustomItem(foodItem)}
                isLoggedIn={isLoggedIn}
                role={role}
                userName={userName}
                setUserName={(data) => setUserName(data)}
                setIsLoggedIn={(data) => setIsLoggedIn(data)}
                removeAllItems={() => handleRemoveAllItems()}
                removeItem={(foodItem) => handleRemoveItem(foodItem)}
                setHasOrder={(data) => setHasOrder(data)}
              />
              <Box sx={{ textAlign: 'right', position: 'fixed', right: { xs: '10vw', md: '10vw', lg: '13vw', xl: '27vw' }, bottom: { xs: '5vh', sm: '15vh', md: '15vh', lg: '15vh', xl: '20vh' } }} >
                <FloatingActionButtons
                  setIsLoggedIn={(data) => setIsLoggedIn(data)}
                  setUserName={(data) => setUserName(data)}
                  setRole={(data) => setRole(data)}
                />
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
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Footer />
            </Box>
          </Container>
        </ThemeProvider>
      </Layout>
      </AppInsightsErrorBoundary>
    </CacheProvider>
  )
} 