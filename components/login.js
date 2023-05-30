/* eslint-disable react/prop-types */
import React from 'react';
import { useState, useEffect } from 'react';
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
            props.setIsLoggedIn(true)
            props.setToken(data.userToken)
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
                        setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                        setToken={(data) => props.setToken(data)}
                        setError={(error) => setError(error)} 
                        setLoginPosted={(data) => setLoginPosted(data)} />}
            </div>
            {error && <div>Error: {error}</div>}
        </div>
    )
}