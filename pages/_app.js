// pages/_app.js
import { useState, useReducer } from 'react';
import '../css/styles.css'
import '../css/navbar.css'
import '../css/index.css'
import '../css/menu.css'
import '../css/cart.css'
import '../css/customize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar } from './navbar';
import { useRouter } from 'next/router';
//import useSWR, { preload } from 'swr';

//const fetcher = (...args) => fetch(...args).then((res) => res.json())
//preload('https://localhost:44302/Menu/Get', fetcher)

export default function MyApp({ Component, pageProps }) {
  //const { data, error } = useSWR('https://localhost:44302/Menu/Get', fetcher)

  const data = {"menuCategoryList":[{"menuCategoryID":1,"foodType":"Pizza","foodList":[{"foodID":2,"menuCategoryID":1,"foodName":"Hand-Tossed","price":17.99},{"foodID":3,"menuCategoryID":1,"foodName":"Thin-Crust","price":18.99},{"foodID":4,"menuCategoryID":1,"foodName":"Sicilian","price":19.99}]},{"menuCategoryID":2,"foodType":"Pasta","foodList":[{"foodID":5,"menuCategoryID":2,"foodName":"Francese","price":14.99},{"foodID":6,"menuCategoryID":2,"foodName":"Marsala","price":14.99},{"foodID":7,"menuCategoryID":2,"foodName":"Alfredo","price":14.99}]},{"menuCategoryID":3,"foodType":"Salad","foodList":[]},{"menuCategoryID":4,"foodType":"Soup","foodList":[]},{"menuCategoryID":5,"foodType":"Sides","foodList":[]},{"menuCategoryID":6,"foodType":"Drinks","foodList":[]},{"menuCategoryID":7,"foodType":"Dessert","foodList":[]}]}
  const customizeData = {"customizePizzaID":"","size":"","style":"","toppings":[{"toppingID":1,"toppingName":"Pepperoni","price":2.5},{"toppingID":2,"toppingName":"Sausage","price":2.5},{"toppingID":3,"toppingName":"Ham","price":2.5},{"toppingID":4,"toppingName":"Olives","price":2.5},{"toppingID":5,"toppingName":"Mushrooms","price":2.5},{"toppingID":6,"toppingName":"Pineapple","price":2.5}]}
  
  //load static menu
  const menu = data.menuCategoryList.slice()

  //initial topping list
  const initialIsChecked = customizeData.toppings.map((newTopping) => ({toppingID: newTopping.toppingID, isChecked: false}))

  //set states
  const [openCart, setOpenCart] = useState(false)
  const [cartItems, dispatch] = useReducer(cartItemsReducer, [])
  const [cartID, setCartID] = useState(1)

  //customize    
  const [foodToCustomize, setfoodToCustomize] = useState({foodID: 0, menuCategoryID: 0, foodName: ''});
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [checked, setChecked] = useState(initialIsChecked) 

  function handleOpenModal(selectedFoodItem) {
      setfoodToCustomize(selectedFoodItem)
      setIsModalOpen(true)
  }

  function handleCloseCustomize() {
    setIsModalOpen(false)
}

  function addCustomItem(selectedFoodItem) {
    console.log('app add cust selectedFoodItem: ' + JSON.stringify(selectedFoodItem))
    console.log('app add cust cartitems: ' + JSON.stringify(cartItems))
    let checkedToppings = checked.filter(topping => topping.isChecked)
    let checkedToppingIDs = checkedToppings.map(topping => topping.toppingID)
    selectedFoodItem = {...selectedFoodItem, toppings: checkedToppingIDs}
    setfoodToCustomize(selectedFoodItem)
    setOpenCart(true)
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

  return (
    <Container className="main">
      <Navbar 
        isActive={openCart} 
        onCartClick={() => setOpenCart(!openCart)} 
        removeItem={(foodItem) => handleRemoveItem(foodItem)} 
        currentCartItems={cartItems}
        addCartCustomize = {checked}
        customizeData={customizeData}
      />
      { asPath == '/menu' && 
        <Component 
          currentCartItems={cartItems} 
          menu={menu} 
          customizeData={customizeData}
          openModal={(foodItem) => handleOpenModal(foodItem)}
          closeCustomize={() => handleCloseCustomize()}
          isModalOpen={isModalOpen}
          foodToCustomize={foodToCustomize}
          updateCheckedToppings={(updatedChecked) => setChecked(updatedChecked)}
          addCustomItem={(foodItem) => addCustomItem(foodItem)}
          checked={checked}
          {...pageProps} 
        /> 
      }
      { asPath == '/order' && <Component {...pageProps} /> }
      { asPath == '/' && <Component {...pageProps} /> }
      
    </Container>
  )
}