import Link from 'next/link'
import { Cart } from './cart';
import { useRouter } from 'next/router';

export function Navbar(props) {
    const { asPath } = useRouter();
    
    const pages = [
        {Name:'Home', Path:'/', IsActive: function() { return asPath == this.Path ? true : false }},
        {Name:'Menu', Path:'/menu', IsActive: function() { return asPath == this.Path ? true : false }},
        {Name:'Order', Path:'/order', IsActive: function() { return asPath == this.Path ? true : false }}
    ]
    
    function BuildCartLink() {
        return (
            <Link className={'navigate-link ' + (props.isActive ? 'navigate-active' : '')} href='' onClick={() => props.onCartClick()}>Cart</Link>
        )
    }
    
    return(
        <div className='navigate-center'>
            <div className='navigate-link-container'>
                {pages.map(pages => (
                <Link key={pages.Name} href={pages.Path} className={'navigate-link ' + (pages.IsActive() ? 'navigate-active' : '')}>{pages.Name}</Link>
                ))}
            </div>
            <div className='navigate-cart-container'>
                <BuildCartLink/>
            </div>
            {props.isActive && <Cart currentCartItems={props.currentCartItems} removeItem={(foodItem) => props.removeItem(foodItem)} customizeData={props.customizeData}/>}
        </div>
    )
    
}

