/* eslint-disable react/prop-types */
import React from 'react';
import useSWR from 'swr'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
  }

export const getServerSideProps = async (context) => {
    console.log('server token:' + context.req.cookies.token)
    try {
        const res = await fetch('http://localhost:5753/api/User/Account', { headers: {'Authorization': 'Bearer ' + context.req.cookies.token}})
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const user = await res.json()
        console.log(user)
        return {props: {user}}
    }
    catch (error) {
        console.log('Error: ' + error.message)
        
    }

}


export default function Account(props) {
    const user = props.user
    console.log('user: ' + JSON.stringify(user))
    
    return (
        <>
            <Header title="Account"/>
            <div className='account-info'>
                <table className='account-table'>
                    <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{user.firstName} {user.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{user.address1}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{user.address2}</td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>{user.city}</td>
                    </tr>
                    <tr>
                        <td>State:</td>
                        <td>{user.state}</td>
                    </tr>
                    <tr>
                        <td>Zip:</td>
                        <td>{user.zip}</td>
                    </tr>
                    </tbody>
                </table> 
            </div> 
            <div>'Active'</div>
            <div className='order-list'>
                {user.activeOrders.map(order => 
                <div className='account-order-item' key={order.orderID}> OrderID: {order.orderID}
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
                    )}
            </div>
            <div>'Past'</div>
            <div className='order-list'>
                {user.pastOrders.map(order => 
                <div className='account-order-item' key={order.orderID}> OrderID: {order.orderID}
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
                    )}
            </div>
        </> 
    )
    
}