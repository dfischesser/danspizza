/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link'
import { useState } from 'react'
import { fetchy } from '../components/fetchy'

function Header({ title }) {
    return <h5 className='padding login-header'>{title ? title : 'Default title'}</h5>;
  }

  export function CreateStatus(props) {
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(props.login.password, salt);
    console.log('salt: ' + salt);
    console.log('hash: ' + hash);

    const headers = {'Content-Type': 'application/json'}
    fetchy('http://localhost:5753/api/User/Create', {email: props.login.email, password: hash, salt: salt}, headers)
        .then((data) => {
            console.log('handleFetch data: ' + JSON.stringify(data)) 
            document.cookie = "token=" + data.userToken + "; max-age=" + 60*60*24 + ";"
            props.setIsLoggedIn(true)
            props.setCreatePosted(false)
            props.setIsStep2(true)
            
        })
        .catch((error) => {
            console.log('handleFetch error: ' + JSON.stringify(error.message))
            props.setError(error)
            props.setCreatePosted(false)
        })
}

export function CreateAccount(props) {    

    const [isEmailValid, setIsEmailValid] = useState('')
    const [isPwMinLength, setIsPwMinLength] = useState('')
    const [isPwMaxLength, setIsPwMaxLength] = useState('')
    const [isPwNumber, setIsPwNumber] = useState('')
    const [isPwChar, setIsPwChar] = useState('')
    
    const [login, setLogin] = useState({email: '', password: ''})
    const [createPosted, setCreatePosted] = useState(false)
    const [error, setError] = useState(null)

    function validateEmail(email) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        email.toString().match(regex) ? setIsEmailValid('') : setIsEmailValid('Email is Invalid')
    }        
    

    function validatePw(pw) {
        const numRegex = /[0-9]/
        const charRegex = /[a-zA-Z0-9!@#$%^&*]+/
        if (pw.length < 8) {
            setIsPwMinLength('Password must be at least 8 characters in length.')
        } else {
            setIsPwMinLength('')
        }
        if (pw.length > 24) {
            setIsPwMaxLength('Password must not exceed 24 characters in length.')
        } else {
            setIsPwMaxLength('')
        }
        if (!pw.match(numRegex)) {
            setIsPwNumber('Password must include at least one number.')
        } else {
            setIsPwNumber('')
        }
        if (pw.match(charRegex) && pw.match(charRegex).toString().length < pw.length) {
            setIsPwChar('Password may only include letters, numbers, and special characters: !@#$%^&*')
        } else {
            setIsPwChar('')
        }
    }

    function handleClick() {
        if (isPwMinLength == '' && isPwMaxLength == '' && isPwNumber == '' && isPwChar == '' && isEmailValid == '') {
            console.log(JSON.stringify(login))
            setCreatePosted(true)
        } 
    }

    return (
        <div className='login-wrapper'>
            <div className='login-body'>
                <div className='login-segment'>
                    <div className='login-title'>
                        <Header title='Create Account'/>
                    </div>
                    <div className='login-body'>
                        <form>
                            <label htmlFor='email'>Email Address</label>
                            <input type='text' id='email' name='email' className={!isEmailValid ? 'create-input' : 'create-input-invalid'} onChange={(e) => {validateEmail(e.target.value); setLogin({...login, email: e.target.value})}}></input>
                            {isEmailValid && <div className='create-label-invalid'>{isEmailValid}</div> }
                            <label htmlFor='pw'>Password</label>
                            <input type='text' id='pw' name='pw' className={!isPwMinLength && !isPwMaxLength && !isPwNumber & !isPwChar ? 'create-input' : 'create-input-invalid'} onChange={(e) => {validatePw(e.target.value); setLogin({...login, password: e.target.value})}}></input>
                            <ul className='create-label-invalid'>
                                {isPwMinLength && <li>{isPwMinLength}</li> }
                                {isPwMaxLength && <li>{isPwMaxLength}</li> }
                                {isPwNumber && <li>{isPwNumber}</li> }
                                {isPwChar && <li>{isPwChar}</li> }
                            </ul>
                        </form>
                        {error && <div>{error}</div>}
                        <button 
                        className='login-button' onClick={() => handleClick()} >Create</button>
                    </div>
                </div>
                {createPosted && 
                    <CreateStatus 
                        login={login} 
                        setIsStep2 = {(data) => props.setIsStep2(data)}
                        setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                        setError={(error) => setError(error)} 
                        setCreatePosted={(data) => setCreatePosted(data)} />}
                <div className='login-segment'>
                    <div>
                        <Link href='' onClick={() => props.setIsCreate(false)}>Back to Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}