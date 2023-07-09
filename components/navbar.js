/* eslint-disable react/prop-types */
import Link from 'next/link'
import { CreateAccount } from '../components/createAccount';
import { CreateAccountStep } from '../components/createAccountStep';
import { Cart } from '../components/cart';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Box from '@mui/material/Box';
import { Login } from '../components/login';
import Modal from '@mui/material/Modal';
import { getCookie } from './getCookie';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Collapse from '@mui/material/Collapse';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  };

export function Navbar(props) {

    const [hasCookie, setHasCookie] = useState(false)
    const [userName, setUserName] = useState(false)
    const [role, setRole] = useState(false)
    const [openCreate, setOpenCreate] = useState(false);
    const [isCreate, setIsCreate] = useState(false)
    const [isStep2, setIsStep2] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        console.log('Navbar handleClick: ' + event.currentTarget)
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const collapsePopper = () => (
        <Fade {...TransitionProps} timeout={350}>
          <div className={classes.paper}>The content of the Popper.</div>
        </Fade>
      )

    console.log('Navbar code start. hasCookie: ' + hasCookie + '. isBackOffice: ' + props.isBackOffice)

    
    const { asPath } = useRouter()
    useEffect(() => {
        if (!document.cookie || document.cookie == "token="){
            setHasCookie(false)
            props.setIsLoggedIn(false)
        } 
        else {
            let token = getCookie('token')
            console.log('Decoded Token: ' + JSON.stringify(jwt_decode(token)))
            setUserName(jwt_decode(token).firstName)
            setRole(jwt_decode(token).role)
            setHasCookie(true)
            props.setIsLoggedIn(true)

        }
        return () => console.log('cleanup code hit')
    }, [hasCookie, props.isLoggedIn, userName, props.isBackOffice])

    function logOut() {
        console.log('logout hit! ');
        console.log('logout state of hasCookie: ' + hasCookie)
        document.cookie = "token=";
        setHasCookie(false)
        props.setIsLoggedIn(false)
        setIsCreate(false)
        setIsStep2(false)
    }

    function isActive(path) { 
        return asPath == path ? true : false 
    }
    const handleCloseModal = () => props.setOpen(false);
    
    console.log('isCreate is : ' + isCreate)
    return(
        <div className='navigate-center'>
            <div className='navigate-link-container'>
                
                {!props.isBackOffice ?
                <>
                    <Link 
                        href='/' 
                        onClick={() => props.setIsBackOffice(false)} 
                        className={'navigate-link ' + (isActive('/') ? 'navigate-active' : '')}
                    >
                        Home
                    </Link>
                    <Link href='/menu' className={'navigate-link ' + (isActive('/menu') ? 'navigate-active' : '')}>Menu</Link>
                    {props.hasOrder && <Link href='/order' className={'navigate-link ' + (isActive('/order') ? 'navigate-active' : '')}>Order</Link>}
                </> 
                :
                <>
                <Box sx={{bgcolor: '#ff9898', fontSize: 'larger', paddingLeft: '10px', paddingRight: '10px', marginRight: '10px', borderRadius: 5}}>Back Office</Box>
                
                <Link 
                        href='/' 
                        onClick={() => props.setIsBackOffice(false)} 
                        className={'navigate-link ' + (isActive('/') ? 'navigate-active' : '')}
                    >
                        Home
                </Link> 
                <Link href='/backoffice/manage' 
                    className={'navigate-link ' + (isActive('/backoffice/manage') ? 'navigate-active' : '')}>
                        Manage
                </Link>
                <Link href='/backoffice/editMenu' 
                    className={'navigate-link ' + (isActive('/backoffice/editMenu') ? 'navigate-active' : '')}>
                        Edit Menu
                </Link>
                </>
                }
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
                        {role == 'Employee' && 
                        <Link 
                            className='navigate-link'
                            href='/backoffice/manage'  
                            onClick={() => props.setIsBackOffice(true)}
                        > 
                            Manage
                        </Link>}
                        
                    </div>
                </> :
                    <Link 
                        className={'navigate-link ' + (props.isActive.login ? 'navigate-active' : '')} 
                        href='' 
                        onClick={() => props.setOpen(true)}
                    > Login
                    </Link>
                }
            </div>
            {!props.isBackOffice && 
                <IconButton onClick={handleClick /*() => props.handleCartClick(); */}> 
                
                    <ShoppingCartIcon sx={props.isActive.cart ? {color:'#82a8a6'} : (props.currentCartItems.length > 0) ? {color:'#a2747b'} : {color:'black'}}/>
                </IconButton>
            }
            </div>
            {!props.hasOrder &&
            <Popper id={id} open={open} anchorEl={anchorEl} placement='bottom-end' transition>
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={150}>
                    <Box>
                        <Cart 
                            open={props.openLogin}
                            setOpenLogin={(data) => props.setOpen(data)}
                            currentCartItems={props.currentCartItems} 
                            removeItem={(foodItem) => props.removeItem(foodItem)} 
                            customizeData={props.customizeData}
                            handleAddOrderClick={() => props.handleAddOrderClick()}
                            setUserName={(data) => setUserName(data)}
                            setIsCreate={(data) => setIsCreate(data)} 
                            setIsStep2={(data) => setIsStep2(data)} 
                            isLoggedIn={props.isLoggedIn}
                            userName={userName}
                            isActive={props.isActive}
                        />
                    </Box>
                </Fade>
                )}
            </Popper>}
            
            
            <Modal
                open={props.open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Login 
                    isLoggedIn={props.isLoggedIn}
                    open={props.open}
                    isCreate={isCreate}
                    isStep2={isStep2}
                    setOpen={(data) => props.setOpen(data)}
                    setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                    handleAccountInfo={(data) => props.handleAccountInfo(data)}
                    setHasCookie={(data) => setHasCookie(data)}
                    setIsCreate={(data) => setIsCreate(data)}
                    setIsStep2={(data) => setIsStep2(data)}
                    setUserName={(data) => setUserName(data)}
                /> 
                </Box>
          </Modal>
        </div>
    )
    
}

// isCreate ? isStep2 ?
//             <CreateAccountStep 
//                 open={openLogin}
//                 setIsCreate={(data) => setIsCreate(data)} 
//                 setIsStep2={(data) => setIsStep2(data)} 
//                 setIsActive={(data) => props.setIsActive(data)} 
//                 isActive={props.isActive}
//                 setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
//                 setUserName={(data) => setUserName(data)}
//             /> :
//             <CreateAccount 
//                 setIsCreate={(data) => setIsCreate(data)} 
//                 setIsStep2={(data) => setIsStep2(data)} 
//                 setIsLoggedIn={(data) => props.setIsLoggedIn(data)} 
//             /> :

