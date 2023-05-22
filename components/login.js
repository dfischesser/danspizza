/* eslint-disable react/prop-types */
import React from 'react';
import { useState, useEffect } from 'react';

function Header({ title }) {
    return <h5 className='padding login-header'>{title ? title : 'Default title'}</h5>;
  }
  
export function LoginStatus(props) {
    const { user, isLoading, isError } = props.useUser()
    console.log('loginstatus user: ' + user)

    const [data, setData] = useState(false)
    
    async function fetchy(url) {
        try {
            const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(props.login)
        });
        if (!res.ok){
            throw new Error("Network response was not OK");
        }
        return res.json()
        } catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
        }
      }

    useEffect(() => {
        fetchy('https://localhost:443/Login/Post').then(json => setData(json));
        console.log('useEffect data: ' + data)
        props.setIsLoggedIn(data)
        console.log('useEffect loginSuccess: ' + props.isLoggedIn)
        console.log('useEffect accountData: ' + JSON.stringify(user))
        if (data) {
            props.handleAccountInfo(user)
            props.setIsActive({...props.isActive, login: false})
            console.log('useEffect isActive: ' + JSON.stringify(props.isActive))
        }
      },[data, props.isLoggedIn]);
    
    
    console.log('login post result success: ' + data)
    console.log('login post loginSuccess: ' + props.isLoggedIn)
    
    return <div>Data Retrieved.<br></br> {data ? 'Login success!' : 'Login failed!'} </div>
}


export function Login(props) {    
    const [login, setLogin] = useState({email: '', password: ''})
    const [loginPosted, setLoginPosted] = useState(false)

    return (
        <div className='login-wrapper'>
            <div className='login-title'>
                <Header title='Login'/>
            </div>
            <div className='login-body'>
                <label htmlFor='email'>Email Address</label>
                <input type='text' id='email' name='email' value={login.email} readOnly={loginPosted} onChange={ e => setLogin({...login, email: e.target.value})}></input>
                <label htmlFor='pw'>Password</label>
                <input type='text' id='pw' name='pw' value={login.password} readOnly={loginPosted} onChange={ e => setLogin({...login, password: e.target.value})}></input>
            </div>
            <div>
                <button 
                className='login-button' 
                onClick={() => {
                    setLoginPosted(true)
                    setTimeout(() => {
                        setLoginPosted(false)
                        console.log('timeout!')
                    }, 2000)
                }}>Login</button>
                {loginPosted && 
                    <LoginStatus 
                        login={login} 
                        loginPosted={loginPosted} 
                        isLoggedIn={props.isLoggedIn}
                        setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                        setLoginPosted={() => setLoginPosted()} 
                        handleLoginPost={(data) => props.handleLoginPost(data)}
                        isActive={props.isActive}
                        setIsActive={(data) => props.setIsActive(data)}
                        handleAccountInfo={(data) => props.handleAccountInfo(data)}
                        fetcher={props.fetcher}
                        useUser={() => props.useUser()}
                    />}
            </div>
        </div>
    )
}