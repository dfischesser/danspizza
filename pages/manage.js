/* eslint-disable react/prop-types */
import { useState } from 'react';
import { fetchy } from '../components/fetchy'

function Header({ title }) {
  return <h1 className="header-styles">{title ? title : 'Default title'}</h1>;
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

export const getServerSideProps = async (context) => {
    console.log('server token:' + context.req.cookies.token)
    try {
        const res = await fetch('http://localhost:5753/api/Order/Latest', { headers: {'Authorization': 'Bearer ' + context.req.cookies.token}})
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const orders = await res.json()
        console.log('active orders: ' + JSON.stringify(orders))
        return {props: {orders}}
    }
    catch (error) {
        console.log('Error: ' + error.message)
    }

}

export function PostFulfill(props) {
    const token = getCookie('token')
    const headers = {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}
    console.log('headers: ' + JSON.stringify(headers))
    fetchy('http://localhost:5753/api/Order/Fulfill', props.fulfillPosted, headers)
        .then((newOrders) => {
            console.log('handleFetch data: ' + JSON.stringify(newOrders)) 
            props.setFulfillPosted(false)
            props.setOrders(newOrders)
            return newOrders
        })
        .catch((error) => {
            //console.log('handleFetch error: ' + JSON.stringify(JSON.parse(error.message).errors))
            //console.log('handleFetch error: ' + JSON.parse(error.message).errors)
            console.log('handleFetch error: ' + error)
            props.setFulfillPosted(false)
            //props.setError(JSON.stringify(JSON.parse(error.message).errors))
        })
}

export default function Manage(props) {  
    
    const [fulfillPosted, setFulfillPosted] = useState(false)
    const [orders, setOrders] = useState(false)
    const [error, setError] = useState(false)
    
    if (!orders){
        setOrders(props.orders)
    }

    function handleFulfill(orderID) {
        setFulfillPosted(orderID)
    }

    console.log('manage orders rendered.')
    return (
    <div>
        <Header title="Manage Orders"/>
        <div>Active Orders</div>
        {console.log('about to map active orders: ' + JSON.stringify(orders))}
        <div className='order-list'>
            {orders && orders.map(order => 
            <div key={order.orderID}>
                <div className='account-order-item'> OrderID: {order.orderID}
                    <div>{order.foodItems.map(foodItem =>
                        <div className='account-item' key={foodItem.foodID}>
                            Food: {foodItem.foodName} 
                            <div>{foodItem.customizeOptions.map(option =>
                                <div className='account-item' key={option.optionName}>
                                    Option: {option.optionName}
                                    {option.optionItems.map(optionItem =>
                                        <div className='account-item' key={optionItem.customizeOptionItem}>
                                            <div>{optionItem.customizeOptionItem} {optionItem.price}</div>
                                        </div>
                                        )}
                                    </div>
                                    )}</div>
                            </div>
                        )}</div>
            </div>
                <div>
                    <button onClick={() => handleFulfill(order.orderID)}>Fulfill Order</button>
                </div>
            </div>
                )}
        </div>
            {fulfillPosted && 
                <PostFulfill 
                    setError={(error) => setError(error)} 
                    fulfillPosted={fulfillPosted}
                    setFulfillPosted={(data) => setFulfillPosted(data)} 
                    setOrders={(data) => setOrders(data)} 
                />}
            {error && <div>{error}</div>}
    </div>
  );
}