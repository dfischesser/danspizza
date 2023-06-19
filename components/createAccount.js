/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link'
import { useState } from 'react'
import { fetchy } from '../components/fetchy'
import { createJWT } from './createJWT';

function Header({ title }) {
    return <h5 className='padding login-header'>{title ? title : 'Default title'}</h5>;
  }

  export function CreateStatus(props) {
    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(props.login.password, salt);
    console.log('salt: ' + salt);
    console.log('hash: ' + hash);

    const headers = {'Content-Type': 'application/json'}
    fetchy('http://localhost:5753/api/User/Create', 'POST', {email: props.login.email, password: hash}, headers)
    .catch((error) => {
            console.log('API error: ' + JSON.parse(error.message).message)
            props.setError('API error: ' + JSON.parse(error.message).message)
            props.setCreatePosted(false)
    })
    .then((userID) => {
        console.log('handleFetch step 2 data: ' + userID) 
        // var date = new Date()
        // var tomorrowUnix = (date.setDate(date.getDate() + 1) / 1000) >> 0
        // console.log('handleFetch iss: ' + tomorrowUnix) 
        // const pload = {
        //     email: props.login.email, 
        //     firstName: '', 
        //     role: 'User', 
        //     userID: userID, 
        //     exp: tomorrowUnix, 
        //     iss: 'danspizza.dev', 
        //     aud: 'danspizza users'}
        //     console.log('handleFetch payload: ' + pload) 

        // const token = jws.sign({
        //     header: {alg: 'HS256', typ: "JWT"}, 
        //     payload: pload,
        //     secret: 'CR2CQohJrsgoYwMU2lGpQ7BKthH2yYAA',
        // })
        const token = createJWT(props.login.email, '', '', userID)
        console.log('handleFetch token: ' + token) 
        document.cookie = "token=" + token + "; max-age=" + 60*60*24 + ";"
        props.setIsLoggedIn(true)
        props.setCreatePosted(false)
        props.setIsStep2(true)
        
    })
    .catch((error) => {
            console.log('React fetch error: ' + error.message)
            props.setError('React fetch error: ' + error.message)
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