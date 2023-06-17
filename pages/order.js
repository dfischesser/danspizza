/* eslint-disable react/prop-types */
import { OrderMap } from '../components/orderMap'
import { GetPrice } from '../components/getPrice'
import { useState } from 'react';
import { fetchy } from '../components/fetchy'
import Link from 'next/link'

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

export function PostOrder(props) {
    const formatData = {orderItems: props.currentCartItems.map(item => ({orderItem: item}))}
    const test = props.currentCartItems
    console.log('formatted order data: ' + JSON.stringify(test) + '. cookie: ' + getCookie('token'))
    const token = getCookie('token')
    const headers = {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}
    console.log('headers: ' + JSON.stringify(headers))
    fetchy('http://localhost:5753/api/Order/Post', test, headers)
        .then((data) => {
            console.log('handleFetch data: ' + JSON.stringify(data)) 
            props.setOrderPosted(false)
            props.setOrderPlaced(true)
            props.setHasOrder(false)
            props.removeAllItems()
        })
        .catch((error) => {
            //console.log('handleFetch error: ' + JSON.stringify(JSON.parse(error.message).errors))
            //console.log('handleFetch error: ' + JSON.parse(error.message).errors)
            console.log('handleFetch error: ' + error)
            props.setOrderPosted(false)
            //props.setError(JSON.stringify(JSON.parse(error.message).errors))
        })
}

// export const getServerSideProps = async (context) => {
//     console.log('server token:' + context.req.cookies.token)
//     try {
//         const res = await fetch('http://localhost:5753/api/User/Account', { headers: {'Authorization': 'Bearer ' + context.req.cookies.token}})
//         if (!res.ok) {
//             throw new Error(res.statusText);
//         }
//         const user = await res.json()
//         console.log(user)
//         return {props: {user}}
//     }
//     catch (error) {
//         console.log('Error: ' + error.message)
//     }

// }

export default function Order(props) {
    
    const [orderPosted, setOrderPosted] = useState(false)
    const [error, setError] = useState(false)
    const [orderPlaced, setOrderPlaced] = useState(false)


    return (
        <>
            <Header title="Order"/>
            <OrderMap 
                currentCartItems={props.currentCartItems} 
                removeItem={(foodItem) => props.removeItem(foodItem)} 
                customize={props.customizeData.customize} 
                isOrderPage={true}
            />
            <GetPrice currentCartItems={props.currentCartItems} customizeData={props.customizeData} isOrderPage={true} />
            {!orderPlaced && <div>
                <button onClick={() => setOrderPosted(true)}>Place Order</button>
                <Link href='/menu'><button onClick={() => {props.setHasOrder(false); props.setOpenModal({...props.openModal, cart: true})}}>Back to Cart</button></Link>
            </div>}
            {orderPosted && 
                <PostOrder 
                    currentCartItems={props.currentCartItems} 
                    setError={(error) => setError(error)} 
                    setOrderPosted={(data) => setOrderPosted(data)} 
                    setOrderPlaced={(data) => setOrderPlaced(data)}
                    setHasOrder={(data) => props.setHasOrder(data)}
                    removeAllItems={() => props.removeAllItems()}
                />}
            {error && <div>{error}</div>}
            {orderPlaced && 
                <div>
                    <p>Order Placed!</p>
                    <p>Thank you for your order!</p>
                    <p>You can view your order status on your account page.</p>
                </div>}
        </> 
    )
}