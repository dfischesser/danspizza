// pages/_app.js
import { useState } from 'react';
import '../css/styles.css'
import '../css/navbar.css'
import '../css/index.css'
import '../css/menu.css'
import '../css/cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar } from './navbar';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const { asPath } = useRouter();

  return (
    <Container className="main">
      <Navbar 
        isActive={openCart} 
        onCartClick={() => setOpenCart(!openCart)} 
        currentCartItems={cartItems}
      />
      { asPath == '/menu' && <Component onAddItem={(food) => setCartItems([food, ...cartItems])} currentCartItems={cartItems} {...pageProps} /> }
      { asPath == '/' && <Component {...pageProps} /> }
      
    </Container>
  )
}