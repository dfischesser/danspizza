/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
  }

export default function Account(props) {

    const { user, isLoading, isError } = props.useUser()
 
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>{isError.message}</div>

    console.log('account props: ' + JSON.stringify(props))
    //const user = props.accountInfo

    if (props.isLoggedIn) {        
        return (
            <>
                <Header title="Account"/>
                <div className='account-info'>
                    <table className='account-table'>
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
                    </table>
                </div>
            </> 
        )
    }
}