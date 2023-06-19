/* eslint-disable react/prop-types */
import React from 'react';
import { useState, useEffect } from 'react'
import { fetchy } from '../components/fetchy'
import Link from 'next/link'
import { createJWT } from './createJWT';

function Header({ title }) {
    return <h5 className='padding login-header'>{title ? title : 'Default title'}</h5>;
  }
  
export function LoginStatus(props) {
    const headers = {'Content-Type': 'application/json'}
        fetchy('http://localhost:5753/api/User/Hash', 'POST', props.login.email, headers)
        .catch((error) => {
                console.log('API error: ' + error.message)
                console.log('API error: ' + JSON.parse(error.message).message)
                props.setError('API error: ' + JSON.parse(error.message).message)
                props.setLoginPosted(false)
        })
        .then((data) => {
            //console.log('handleFetch login data: ' + JSON.stringify(data)) 
            const bcrypt = require('bcryptjs');
            bcrypt.compare(props.login.password, data.hash)
            .then((res) => {
                if (res === true) {
                    console.log('handleFetch password: ' + props.login.password) 
                    console.log('handleFetch hash: ' + data.hash) 
                    console.log('handleFetch isValid: ' + res) 
                    const token = createJWT(props.login.email, data.firstName, data.role, data.userID)
                    document.cookie = "token=" + token + "; max-age=" + 60*60*24 + ";"
                    props.setLoginPosted(false)
                    props.setHasCookie(true)
                    props.setIsLoggedIn(true)
                    props.setUserName(data.firstName)
                    props.setIsActive({...props.isActive, login: false})
                } else {
                    console.log('React fetch error: Username/Password combination does not match')
                    props.setError('Username/Password combination does not match')
                    props.setLoginPosted(false)
                }
            })
            .catch((error) => {
            })
        })
        .catch((error) => {
            console.log('React fetch error: ' + error.message)
            props.setError('React fetch error: ' + error.message)
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
                <div>
                    <Link href='' onClick={() => props.setIsCreate(true)}>Create Account</Link>
                </div>
                 {loginPosted && 
                    <LoginStatus 
                        login={login} 
                        setIsActive={(modal) => props.setIsActive(modal)}
                        isActive={props.isActive}
                        setHasCookie={(data) => props.setHasCookie(data)}
                        setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                        setError={(error) => setError(error)} 
                        setLoginPosted={(data) => setLoginPosted(data)}
                        setUserName={(data) => props.setUserName(data)} />}
            </div>
            {error && <div>{error}</div>}
        </div>
    )
}