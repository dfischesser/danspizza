// pages/_app.js
/* eslint-disable react/prop-types */
import { useState, useReducer } from 'react';
import '../css/styles.css'
import '../css/navbar.css'
import '../css/index.css'
import '../css/menu.css'
import '../css/cart.css'
import '../css/customize.css'
import '../css/login.css'
import '../css/account.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar } from '../components/navbar';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import React from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function MyApp({ Component, pageProps }) {
  //console.log('menu data live: ' + JSON.stringify(data))
  //const data = {"menuCategoryList":[{"menuCategoryID":1,"foodType":"Pizza","foodList":[{"foodID":2,"menuCategoryID":1,"foodName":"Hand-Tossed","price":17.99},{"foodID":3,"menuCategoryID":1,"foodName":"Thin-Crust","price":18.99},{"foodID":4,"menuCategoryID":1,"foodName":"Sicilian","price":19.99}]},{"menuCategoryID":2,"foodType":"Pasta","foodList":[{"foodID":5,"menuCategoryID":2,"foodName":"Francese","price":14.99},{"foodID":6,"menuCategoryID":2,"foodName":"Marsala","price":14.99},{"foodID":7,"menuCategoryID":2,"foodName":"Alfredo","price":14.99}]},{"menuCategoryID":3,"foodType":"Salad","foodList":[]},{"menuCategoryID":4,"foodType":"Soup","foodList":[]},{"menuCategoryID":5,"foodType":"Sides","foodList":[]},{"menuCategoryID":6,"foodType":"Drinks","foodList":[]},{"menuCategoryID":7,"foodType":"Dessert","foodList":[]}]}
  const customizeData = {"customizePizzaID":"","size":"","style":"","toppings":[{"toppingID":1,"toppingName":"Pepperoni","price":2.5},{"toppingID":2,"toppingName":"Sausage","price":2.5},{"toppingID":3,"toppingName":"Ham","price":2.5},{"toppingID":4,"toppingName":"Olives","price":2.5},{"toppingID":5,"toppingName":"Mushrooms","price":2.5},{"toppingID":6,"toppingName":"Pineapple","price":2.5}]}
  //const [menuDataState, setMenuDataState] = useState(null);
  
  //load static menu
  //const menu = data.menuCategoryList.slice()
  //const { data, error } = useSWR('https://localhost:443/Account/Get', fetcher)
  

  // if (error) {
  //   console.log('app fetch error: ' + error.message)
  // }
  // console.log('app  account: ' + JSON.stringify(data))

  //initial topping list
  const initialIsChecked = customizeData.toppings.map((newTopping) => ({toppingID: newTopping.toppingID, isChecked: false}))

  //set states
  const [openModal, setOpenModal] = useState({cart: false, customize: false, login: false})
  const [cartItems, dispatch] = useReducer(cartItemsReducer, [])
  const [cartID, setCartID] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [accountInfo, setAccountInfo] = useState(null)

  //customize    
  const [foodToCustomize, setfoodToCustomize] = useState({foodID: 0, menuCategoryID: 0, foodName: ''});
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [checked, setChecked] = useState(initialIsChecked) 

  function useUser() {
    const { data, error, isLoading } = useSWR(`https://localhost:443/Account/Get`, fetcher)
    if (error) {
      console.log('app fetch error: ' + error.message)
    }
    
    return {
      user: data,
      isLoading,
      isError: error
    }
  }

  //handle functions
  function handleOpenModal(selectedFoodItem) {
      setfoodToCustomize(selectedFoodItem)
      setIsModalOpen(true)
  }

  function handleCloseCustomize() {
    setIsModalOpen(false)
  }

  function handleAccountInfo(datums) {
    console.log('handleSetAccountInfo data: ' + JSON.stringify(datums))
    setAccountInfo(datums)
  }

  function addCustomItem(selectedFoodItem) {
    console.log('app add cust selectedFoodItem: ' + JSON.stringify(selectedFoodItem))
    console.log('app add cust cartitems: ' + JSON.stringify(cartItems))
    let checkedToppings = checked.filter(topping => topping.isChecked)
    let checkedToppingIDs = checkedToppings.map(topping => topping.toppingID)
    selectedFoodItem = {...selectedFoodItem, toppings: checkedToppingIDs}
    setfoodToCustomize(selectedFoodItem)
    setOpenModal({...openModal, cart: true})
    handleCloseCustomize()
    setChecked(initialIsChecked)
    handleAddItem(selectedFoodItem)
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
      default: {
        throw Error('Unknown Action: ' + action.type)
      }
    }
  }

  const { asPath } = useRouter()

  //Check Login Status
  return (
      <Container className="main">
        <Navbar 
          isActive={openModal} 
          setIsActive={(data) => setOpenModal(data)}
          removeItem={(foodItem) => handleRemoveItem(foodItem)} 
          currentCartItems={cartItems}
          addCartCustomize={checked}
          customizeData={customizeData}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={(data) => setIsLoggedIn(data)}
          handleAccountInfo={(data) => handleAccountInfo(data)}
          useUser={() => useUser()}
        />
        { asPath == '/menu' && 
          <Component {...pageProps} 
            currentCartItems={cartItems} 
            customizeData={customizeData}
            openModal={(foodItem) => handleOpenModal(foodItem)}
            closeCustomize={() => handleCloseCustomize()}
            isModalOpen={isModalOpen}
            foodToCustomize={foodToCustomize}
            updateCheckedToppings={(updatedChecked) => setChecked(updatedChecked)}
            addCustomItem={(foodItem) => addCustomItem(foodItem)}
            checked={checked}
            fetcher={fetcher}
          /> 
        }
        { asPath == '/' && 
          <Component {...pageProps}
            fetcher={fetcher}
          /> 
        }
        { asPath == '/order' && 
          <Component {...pageProps}
          /> 
        }
        { asPath == '/account' &&
          <Component {...pageProps} 
          isLoggedIn={isLoggedIn}
          accountInfo={accountInfo}
          useUser={() => useUser()}
          /> 
        }
        
      </Container>
  )
}