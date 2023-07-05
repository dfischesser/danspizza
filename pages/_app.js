// pages/_app.js
import { useState, useReducer, useEffect } from 'react';
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
import { Navbar } from '../components/navbar';
import { Router, useRouter } from 'next/router';
import Layout from '../components/layout'
import theme from '../components/theme';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Container from '@mui/material/Container';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {

  const router = useRouter()
  //set states
  const [openModal, setOpenModal] = useState({cart: false, customize: false, login: false})
  const [cartItems, dispatch] = useReducer(cartItemsReducer, [])
  const [cartID, setCartID] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [hasOrder, setHasOrder] = useState(false)
  const [isBackOffice, setIsBackOffice] = useState(false)
  const [loading, setLoading] = useState(false)
  const [logLoad, setLogLoad] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
    }
    function start() {
      console.log("start. logload: " + logLoad);
      if (!logLoad) {
        setLoading(true);
        setLogLoad(false)
      }
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
    

    return() => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    }

  }, [router, loading])

  //customize    
  const [foodToCustomize, setfoodToCustomize] = useState({foodID: 0, menuCategoryID: 0, foodName: ''});
  //const [checked, setChecked] = useState(initialIsChecked) 
  const [open, setOpen] = useState(false);
  console.log('myapp rendered. isBackOffice: ' + isBackOffice)

  //handle functions
  function handleCartClick() {
    if (hasOrder){
      //router.push('/order')
    } else {
      setOpenModal({...openModal, cart: !openModal.cart})
    }
  }
  function handleAddOrderClick() {
    console.log('hasorder set')
    setHasOrder(true)
    setOpenModal({...openModal, cart: false})
  }

  function handleOpenCustomize(selectedFoodItem) {
    console.log('customize modal open. selected food item: ' + JSON.stringify(selectedFoodItem))
      setfoodToCustomize({...selectedFoodItem, customizeOptions: null})
      setOpenModal({...openModal, customize: !openModal.customize})
  }

  function handleAccountInfo(datums) {
    console.log('handleSetAccountInfo data: ' + JSON.stringify(datums))
    setAccountInfo(datums)
  }

  function addCustomItem(selectedFoodItem) {
    console.log('app add cust selectedFoodItem: ' + JSON.stringify(selectedFoodItem))
    console.log('app add cust cartitems: ' + JSON.stringify(cartItems))

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
        foodItem: selectedFood
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
    console.log('app reducer foodItem: ' + JSON.stringify(action.foodItem))
    switch (action.type) {
      case 'added': {
        action.foodItem = {...action.foodItem, cartItemID: action.id}
        return [
          ...cartItems, 
          action.foodItem
        ]
      }
      case 'removed': {
        console.log('removing id: ' + action.id)
        console.log('removing cartItems: ' + JSON.stringify(cartItems))
        console.log('removing fooditem: ' + JSON.stringify(action.foodItem))
        return cartItems.filter(item => item.cartItemID != action.id)      
      }
      case 'removedAll': {
        console.log('Removing all items')
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
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  //Check Login Status
  return (    
  <CacheProvider value={emotionCache}>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <Layout>
      {loading && (
        <Backdrop
        transitionDuration={3000}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      )}
        <Container className="main">
          <Navbar 
            isActive={openModal} 
            setIsActive={(data) => setOpenModal(data)}
            removeItem={(foodItem) => handleRemoveItem(foodItem)} 
            currentCartItems={cartItems}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={(data) => setIsLoggedIn(data)}
            handleAccountInfo={(data) => handleAccountInfo(data)}
            handleAddOrderClick={() => handleAddOrderClick()}
            handleCartClick={() => handleCartClick()}
            hasOrder={hasOrder}
            isBackOffice={isBackOffice}
            setIsBackOffice={(data) => setIsBackOffice(data)}
            setLogLoad={(data) => setLogLoad(data)}
            setOpen={(data) => setOpenLogin(data)}
            open={openLogin}
          />        
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            { router.asPath == '/menu' && 
              <Component {...pageProps} 
                currentCartItems={cartItems} 
                handleOpenCustomize={(foodItem) => handleOpenCustomize(foodItem)}
                openModal={openModal}
                setOpenModal={(data) => setOpenModal(data)}
                foodToCustomize={foodToCustomize}
                addCustomItem={(foodItem) => addCustomItem(foodItem)}
              /> 
            }
            { router.asPath == '/' && 
              <Component {...pageProps}
              /> 
            }
            { router.asPath == '/order' && 
              <Component {...pageProps}
              currentCartItems={cartItems} 
              removeAllItems={() => handleRemoveAllItems()}
              removeItem={(foodItem) => handleRemoveItem(foodItem)} 
              openModal={openModal}
              setHasOrder={(data) => setHasOrder(data)}
              setOpenModal={(data) => setOpenModal(data)}
              /> 
            }
            { router.asPath == '/account' &&
              <Component {...pageProps} 
              isLoggedIn={isLoggedIn}
              /> 
            }
            { router.asPath == '/backoffice/manage' &&
              <Component {...pageProps} 
              isLoggedIn={isLoggedIn}
              /> 
            }
            { router.asPath == '/backoffice/editMenu' &&
              <Component {...pageProps} 
              isLoggedIn={isLoggedIn}
              /> 
            }           
            
          <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Added to Cart
            </Alert>
          </Snackbar>
          </ThemeProvider>
        </Container>
      </Layout>
    </CacheProvider>
)
}

 