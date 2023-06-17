/* eslint-disable react/prop-types */
import Link from 'next/link'
import { CreateAccount } from '../components/createAccount';
import { CreateAccountStep } from '../components/createAccountStep';
import { Cart } from '../components/cart';
import { Login } from '../components/login';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

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

export function Navbar(props) {

    const [hasCookie, setHasCookie] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const [isStep2, setIsStep2] = useState(false)
    const [userName, setUserName] = useState(false)
    console.log('Navbar code start. hasCookie: ' + hasCookie)
    
    const { asPath } = useRouter()
    useEffect(() => {
        if (!document.cookie || document.cookie == "token="){
            setHasCookie(false)
            props.setIsLoggedIn(false)
        } 
        else {
            console.log('Decoded Token: ' + JSON.stringify(jwt_decode(getCookie('token'))))
            setUserName(jwt_decode(getCookie('token')).firstName)
            setHasCookie(true)
            props.setIsLoggedIn(true)

        }
        return () => console.log('cleanup code hit')
    }, [hasCookie, props.isLoggedIn, userName])

    function logOut() {
        console.log('logout hit! ');
        console.log('logout state of hasCookie: ' + hasCookie)
        document.cookie = "token=";
        setHasCookie(false)
        props.setIsLoggedIn(false)
    }

    function isActive(path) { 
        return asPath == path ? true : false 
    }

    const pages = [
        {Name:'Home', Path:'/'},
        {Name:'Menu', Path:'/menu'}
    ]
    
    return(
        <div className='navigate-center'>
            <div className='navigate-link-container'>
                {pages.map(pages => (
                <Link key={pages.Name} href={pages.Path} className={'navigate-link ' + (isActive(pages.Path) ? 'navigate-active' : '')}>{pages.Name}</Link>
                ))}
                {props.hasOrder && <Link href='/order' className={'navigate-link ' + (isActive('/order') ? 'navigate-active' : '')}>Order</Link>}
            </div>
            <div className='navigate-cart-container'>
            <div className='navigate-cart-container navigate-dropdown'>
                { hasCookie ? 
                    <>
                        <Link 
                            className={'navigate-link-account ' + (asPath == '/account' ? 'navigate-active' : '')} 
                            href='' 
                        > {userName ? userName : 'Account'}
                        </Link> 
                    <div className="navigate-dropdown-content">
                        <Link 
                            className='navigate-link'
                            href='/account' 
                        > Profile
                        </Link>
                        <Link 
                            className='navigate-link'
                            href='' 
                            onClick={() => logOut()}
                        > Logout
                        </Link>
                    </div>
                </> :
                    <Link 
                        className={'navigate-link ' + (props.isActive.login ? 'navigate-active' : '')} 
                        href='' 
                        onClick={() => !props.isLoggedIn ? props.setIsActive({...props.isActive, login: !props.isActive.login}) : props.setIsLoggedIn(false)}
                    > Login
                    </Link>
                }
            </div>
            <Link className={'navigate-link ' + (props.isActive.cart ? 'navigate-active' : '')} href='' onClick={() => props.handleCartClick()}>Cart</Link></div>
            {props.isActive.cart && !props.hasOrder &&
            <Cart 
                currentCartItems={props.currentCartItems} 
                removeItem={(foodItem) => props.removeItem(foodItem)} 
                customizeData={props.customizeData}
                handleAddOrderClick={() => props.handleAddOrderClick()}
                setUserName={(data) => setUserName(data)}
                setIsCreate={(data) => setIsCreate(data)} 
                setIsStep2={(data) => setIsStep2(data)} 
                isLoggedIn={props.isLoggedIn}
                userName={userName}
                setIsActive={(data) => props.setIsActive(data)} 
                isActive={props.isActive}
            />}
            {props.isActive.login && (isCreate ? isStep2 ?
            <CreateAccountStep 
                setIsCreate={(data) => setIsCreate(data)} 
                setIsStep2={(data) => setIsStep2(data)} 
                setIsActive={(data) => props.setIsActive(data)} 
                isActive={props.isActive}
                setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                setUserName={(data) => setUserName(data)}
            /> :
            <CreateAccount 
                setIsCreate={(data) => setIsCreate(data)} 
                setIsStep2={(data) => setIsStep2(data)} 
                setIsLoggedIn={(data) => props.setIsLoggedIn(data)} 
            /> :
            <Login 
                isLoggedIn={props.isLoggedIn}
                setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                isActive={props.isActive}
                setIsActive={(data) => props.setIsActive(data)}
                handleAccountInfo={(data) => props.handleAccountInfo(data)}
                setHasCookie={(data) => setHasCookie(data)}
                setIsCreate={(data) => setIsCreate(data)}
                setUserName={(data) => setUserName(data)}
            />)}
        </div>
    )
    
}

