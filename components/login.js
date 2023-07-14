/* eslint-disable react/prop-types */
import React from 'react';
import { LoginModal } from './modals/loginModal'
import { CreateModal } from './modals/createModal'
import { CreateStep2Modal } from './modals/createStep2Modal'

export function Login(props) {    

    return (
        !props.isCreate ?
        <LoginModal 
            setIsCreate={(data) => props.setIsCreate(data)} 
            setHasCookie={(data) => props.setHasCookie(data)}
            setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
            setUserName={(data) => props.setUserName(data)}
            setRole={(data) => props.setRole(data)}
            setOpen={(data) => props.setOpen(data)}
            closeLogin={() => props.closeLogin()}
        /> : !props.isStep2 ?
        <CreateModal 
            setIsCreate={(data) => props.setIsCreate(data)} 
            setHasCookie={(data) => props.setHasCookie(data)}
            setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
            setUserName={(data) => props.setUserName(data)}
            setOpen={(data) => props.setOpen(data)}
            setIsStep2={(data) => props.setIsStep2(data)}
        /> :
        <CreateStep2Modal 
            setIsCreate={(data) => props.setIsCreate(data)} 
            setHasCookie={(data) => props.setHasCookie(data)}
            setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
            setUserName={(data) => props.setUserName(data)}
            setOpen={(data) => props.setOpen(data)}
            setIsStep2={(data) => props.setIsStep2(data)}
        />
    )
}