// pages/_app.js
import { useState, useEffect, useReducer } from 'react';
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

export default function MyApp({ Component, pageProps }) {
  const customizeData = {"customizePizzaID":"","size":"","style":"","customize":[{"customizeID":1,"customizeName":"Pepperoni","price":2.5},{"customizeID":2,"customizeName":"Sausage","price":2.5},{"customizeID":3,"customizeName":"Ham","price":2.5},{"customizeID":4,"customizeName":"Olives","price":2.5},{"customizeID":5,"customizeName":"Mushrooms","price":2.5},{"customizeID":6,"customizeName":"Pineapple","price":2.5}]}
  const router = useRouter();


  console.log('myapp rendered.')
  //initial topping list
  const initialIsChecked = customizeData.customize.map((newCustomize) => ({customizeID: newCustomize.customizeID, isChecked: false}))

  //set states
  const [openModal, setOpenModal] = useState({cart: false, customize: false, login: false})
  const [cartItems, dispatch] = useReducer(cartItemsReducer, [])
  const [cartID, setCartID] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [hasOrder, setHasOrder] = useState(false)

  //customize    
  const [foodToCustomize, setfoodToCustomize] = useState({foodID: 0, menuCategoryID: 0, foodName: ''});
  const [checked, setChecked] = useState(initialIsChecked) 

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
    let checkedToppings = checked.filter(customize => customize.isChecked)
    let checkedcustomizeIDs = checkedToppings.map(customize => customize.customizeID)
    selectedFoodItem = {...selectedFoodItem, customize: checkedcustomizeIDs}
    setfoodToCustomize(selectedFoodItem)
    setOpenModal({...openModal, customize: false, cart: true})
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
          handleAddOrderClick={() => handleAddOrderClick()}
          handleCartClick={() => handleCartClick()}
          hasOrder={hasOrder}
        />
        { asPath == '/menu' && 
          <Component {...pageProps} 
            currentCartItems={cartItems} 
            customizeData={customizeData}
            handleOpenCustomize={(foodItem) => handleOpenCustomize(foodItem)}
            openModal={openModal}
            setOpenModal={(data) => setOpenModal(data)}
            foodToCustomize={foodToCustomize}
            updateCheckedToppings={(updatedChecked) => setChecked(updatedChecked)}
            addCustomItem={(foodItem) => addCustomItem(foodItem)}
            checked={checked}
          /> 
        }
        { asPath == '/' && 
          <Component {...pageProps}
          /> 
        }
        { asPath == '/order' && 
          <Component {...pageProps}
          currentCartItems={cartItems} 
          removeAllItems={() => handleRemoveAllItems()}
          removeItem={(foodItem) => handleRemoveItem(foodItem)} 
          customizeData={customizeData}
          openModal={openModal}
          setHasOrder={(data) => setHasOrder(data)}
          setOpenModal={(data) => setOpenModal(data)}
          /> 
        }
        { asPath == '/account' &&
          <Component {...pageProps} 
          isLoggedIn={isLoggedIn}
          /> 
        }
        { asPath == '/manage' &&
          <Component {...pageProps} 
          isLoggedIn={isLoggedIn}
          /> 
        }
        
      </Container>
  )
}