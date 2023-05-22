/* eslint-disable react/prop-types */
import Link from 'next/link'
import React from 'react';

function Header({ title }) {
    return <h3 className='cart-title'>{title ? title : 'Default title'}</h3>;
  }

function ItemList( props ) {
    console.log('cart current cart items: ' + JSON.stringify(props.currentCartItems))

    if (props.currentCartItems.length > 0){
        return(
            props.currentCartItems.map(
                foodItem => (
                    <div className='cart-item-wrapper' key={foodItem.cartItemID}>
                    <div className='cart-item'>
                        {foodItem.foodName}: {foodItem.price}
                        <button onClick={() => props.removeItem(foodItem)}>x</button>
                    </div>
                        <li className='cart-item'>
                            <ul>
                                {foodItem.toppings.map((cartItemTopping) => (
                                    <li key={cartItemTopping}>
                                        {props.toppings.find(
                                            toppingListItem => toppingListItem.toppingID == cartItemTopping).toppingName + ': '}
                                        {props.toppings.find(
                                            toppingListItem => toppingListItem.toppingID == cartItemTopping).price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}
                                    </li>
                                    )
                                )}
                            </ul>
                        </li>
                    </div>
                )
            )
        )
    }
}

export function Cart(props) {

    let subtotal = 0

    function getPrice() { 
        //topping price
        props.currentCartItems.forEach(cartItem => 
            cartItem.toppings.forEach(toppingID =>
                subtotal += props.customizeData.toppings.find(topping => topping.toppingID == toppingID).price
        ))

        //food item price
        subtotal += props.currentCartItems.reduce((a, b) => a + b.price, 0)
        return subtotal
    }

    return (
        <div className='cart-wrapper'>
            <div className='cart-body'>
                <Header title='Cart'/>
                <ul className='cart-list'>
                    <ItemList currentCartItems={props.currentCartItems} removeItem={(foodItem) => props.removeItem(foodItem)} toppings={props.customizeData.toppings} />
                </ul>
                <p>Subtotal: {getPrice().toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</p>
                {(props.currentCartItems.length > 0) ? <Link href='/order' passHref><button>Add to Order</button></Link> : <p>No items added</p>}
            </div>
        </div>
    )
}