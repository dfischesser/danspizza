/* eslint-disable react/prop-types */
import React from 'react';
import { useState, useEffect } from 'react';
import useSWR from 'swr'
import jwt_decode from 'jwt-decode'
import {fetchy} from '../components/fetchy'

function Header({ title }) {
    return <h5 className='padding login-header'>{title ? title : 'Default title'}</h5>;
  }
  
export function LoginStatus(props) {
    fetchy('http://localhost:5753/api/Login', props.login)
        .then((data) => {
            console.log('handleFetch data: ' + JSON.stringify(data)) 
            document.cookie = "token=" + data.userToken + "; max-age=" + 15*60 + ";"
            props.setLoginPosted(false)
            props.setHasCookie(true)
            props.setIsActive(false)})
        .catch((error) => {
            console.log('handleFetch error: ' + error.message)
            props.setError(error.message)
            props.setLoginPosted(false)
        })
}

export function Login(props) {    
    const [login, setLogin] = useState({email: '', password: ''})
    const [loginPosted, setLoginPosted] = useState(false)
    const [error, setError] = useState(null)

    return (
        <div className='login-wrapper'>
            <div className='login-title'>
                <Header title='Login'/>
            </div>
            <div className='login-body'>
                <label htmlFor='email'>Email Address</label>
                <input type='text' id='email' name='email' value={login.email} onChange={ e => setLogin({...login, email: e.target.value})}></input>
                <label htmlFor='pw'>Password</label>
                <input type='text' id='pw' name='pw' value={login.password} onChange={ e => setLogin({...login, password: e.target.value})}></input>
            </div>
            <div>
                <button 
                className='login-button' 
                onClick={() => {
                    setLoginPosted(true)
                }}>Login</button>
                 {loginPosted && 
                    <LoginStatus 
                        login={login} 
                        setIsActive={(modal) => props.setIsActive(modal)}
                        setHasCookie={(data) => props.setHasCookie(data)}
                        setError={(error) => setError(error)} 
                        setLoginPosted={(data) => setLoginPosted(data)} />}
            </div>
            <div>Error: {error}</div>
        </div>
    )
}

    //fetchy('http://localhost:5753/api/Login').then(json => setData(json));
    // useEffect(() => {
    //     console.log('useEffect data: ' + JSON.stringify(data))
    //     console.log('useEffect jwt-decode: ' + JSON.stringify(jwt_decode(data)))
    //     props.setIsLoggedIn(data)
    //     console.log('useEffect loginSuccess: ' + JSON.stringify(isLoggedIn))
    //     //console.log('useEffect accountData: ' + JSON.stringify(user))
    //     if (data) {
    //         //props.handleAccountInfo(user)
    //         props.setIsActive({...isActive, login: false})
    //     }
    //   },[data, isLoggedIn, isActive, props]);