// pages/_app.js
import { useState, useReducer } from 'react';
import '../css/styles.css'
import '../css/navbar.css'
import '../css/index.css'
import '../css/menu.css'
import '../css/cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar } from './navbar';
import { useRouter } from 'next/router';
//import useSWR, { preload } from 'swr';

//const fetcher = (...args) => fetch(...args).then((res) => res.json())
//preload('https://localhost:44302/Menu/Get', fetcher)

export default function MyApp({ Component, pageProps }) {
  //const { data, error } = useSWR('https://localhost:44302/Menu/Get', fetcher)

  //console.log('first category id: ' + JSON.stringify(data.menuCategoryList[0].menuCategoryID))

  const data = {"menuCategoryList":[{"menuCategoryID":1,"foodType":"Pizza","foodList":[{"foodID":1,"menuCategoryID":1,"foodName":"Hand-Tossed"},{"foodID":2,"menuCategoryID":1,"foodName":"Thin-Crust"},{"foodID":3,"menuCategoryID":1,"foodName":"Sicilian"}]},{"menuCategoryID":2,"foodType":"Pasta","foodList":[{"foodID":4,"menuCategoryID":2,"foodName":"Francese"},{"foodID":5,"menuCategoryID":2,"foodName":"Marsala"},{"foodID":6,"menuCategoryID":2,"foodName":"Alfredo"}]},{"menuCategoryID":3,"foodType":"Salad","foodList":[]},{"menuCategoryID":4,"foodType":"Soup","foodList":[]},{"menuCategoryID":5,"foodType":"Sides","foodList":[]},{"menuCategoryID":6,"foodType":"Drinks","foodList":[]},{"menuCategoryID":7,"foodType":"Dessert","foodList":[]}]}
  
  //load static menu
  const menu = data.menuCategoryList
  
  //set states
  const [openCart, setOpenCart] = useState(false)
  const [cartItems, dispatch] = useReducer(cartItemsReducer, [])
  const [cartID, setCartID] = useState(1)

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
    dispatch(
      {
        type: 'removed',
        id: selectedFood.cartItemID,
        foodItem: selectedFood
      }
    )
  }

  function cartItemsReducer(cartItems, action) {
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
      default: {
        throw Error('Unknown Action: ' + action.type)
      }
    }
  }

  const { asPath } = useRouter()

  return (
    <Container className="main">
      <Navbar 
        isActive={openCart} 
        onCartClick={() => setOpenCart(!openCart)} 
        onRemoveItem={(foodItem) => handleRemoveItem(foodItem)} 
        currentCartItems={cartItems}
      />
      { asPath == '/menu' && 
        <Component 
          onAddItem={(foodItem) => handleAddItem(foodItem)} 
          currentCartItems={cartItems} 
          menu={menu} 
          {...pageProps} 
        /> 
      }
      { asPath == '/' && <Component {...pageProps} /> }
      
    </Container>
  )
}