import Link from 'next/link'
import { OrderMap } from '../components/orderMap'
import { GetPrice } from '../components/getPrice'

function Header({ title }) {
    return <h3 className='cart-title'>{title ? title : 'Default title'}</h3>;
  }

export function Cart(props) {
    console.log('cart currentCartItems: ' + props.currentCartItems)
    return (
        <div className='cart-wrapper'>
            <div className='cart-body'>
                <Header title='Cart'/>
                <ul className='cart-list'>
                    <OrderMap currentCartItems={props.currentCartItems} removeItem={(foodItem) => props.removeItem(foodItem)} customize={props.customizeData.customize} />
                </ul>
                {props.currentCartItems.length > 0 && <GetPrice currentCartItems={props.currentCartItems} customizeData={props.customizeData} />}
            </div>
            {!props.isLoggedIn ? <p>Create Account to Place Order </p> :
                !props.userName ? <div>Complete account creation to place order <br/> {!props.isActive.login  && <button onClick={() => {props.setIsCreate(true); props.setIsStep2(true); props.setIsActive({...props.isActive, login: true})}}>Step 2</button>}</div> : 
                    props.currentCartItems.length > 0 ? <Link href='/order' passHref>
                    <button onClick={() => props.handleAddOrderClick()}>Add to Order</button></Link> : 
                        <p>No items added</p>}
        </div>
    )
}