/* eslint-disable react/prop-types */
import Link from 'next/link'
import { Cart } from '../components/cart';
import { Login } from '../components/login';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie'

export function Navbar(props) {

    const [hasCookie, setHasCookie] = useState(false)
    console.log('Navbar code start. hasCookie: ' + hasCookie)
    
    const { asPath } = useRouter()
    useEffect(() => {
        console.log('useEffect start. cookie value: ' + document.cookie)
        if (!document.cookie || document.cookie == "token="){
            console.log('useEffect. no token found. hasCookie before set false: ' + hasCookie)
            setHasCookie(false)
        } 
        else {
            console.log('useEffect. token found. hasCookie before set true: ' + hasCookie)
            setHasCookie(true)
        }
        return () => console.log('cleanup code hit')
    }, [hasCookie])

    function logOut() {
        console.log('logout hit! ');
        console.log('logout state of hasCookie: ' + hasCookie)
        document.cookie = "token=";
        setHasCookie(false)
        props.setIsLoggedIn(false)
    }
    const pages = [
        {Name:'Home', Path:'/', IsActive: function() { return asPath == this.Path ? true : false }},
        {Name:'Menu', Path:'/menu', IsActive: function() { return asPath == this.Path ? true : false }},
        {Name:'Order', Path:'/order', IsActive: function() { return asPath == this.Path ? true : false }}
    ]
    
    return(
        <div className='navigate-center'>
            <div className='navigate-link-container'>
                {pages.map(pages => (
                <Link key={pages.Name} href={pages.Path} className={'navigate-link ' + (pages.IsActive() ? 'navigate-active' : '')}>{pages.Name}</Link>
                ))}
            </div>
            <div className='navigate-cart-container navigate-dropdown'>
                { hasCookie ? 
                    <>
                        <Link 
                            className={'navigate-link-account ' + (asPath == '/account' ? 'navigate-active' : '')} 
                            href='' 
                        > Account
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
                
                <Link className={'navigate-link ' + (props.isActive.cart ? 'navigate-active' : '')} href='' onClick={() => props.setIsActive({...props.isActive, cart: !props.isActive.cart})}>Cart</Link>
            </div>
            {props.isActive.cart && 
            <Cart 
                currentCartItems={props.currentCartItems} 
                removeItem={(foodItem) => props.removeItem(foodItem)} 
                customizeData={props.customizeData}
            />}
            {props.isActive.login && 
            <Login 
                isLoggedIn={props.isLoggedIn}
                setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                isActive={props.isActive}
                setIsActive={(data) => props.setIsActive(data)}
                handleAccountInfo={(data) => props.handleAccountInfo(data)}
                setHasCookie={(data) => setHasCookie(data)}
            />}
        </div>
    )
    
}

