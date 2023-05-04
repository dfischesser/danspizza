function Header({ title }) {
    return <h3 className='cart-title'>{title ? title : 'Default title'}</h3>;
  }

function ItemList( props ) {

    console.log('cart current cart items: ' + JSON.stringify(props.currentCartItems))

    if (props.currentCartItems.length > 0){
        return(
            props.currentCartItems.map(
                foodItem => (
                <div className='cart-item-wrapper' key={foodItem.cartItemID}>
                <div className='cart-item'>
                    {foodItem.foodName}
                    <button onClick={() => props.removeItem(foodItem)}>x</button>
                </div>
                    <li className='cart-item'>
                        <ul>
                            {foodItem.toppings.map((cartItemTopping) => (
                            <li key={cartItemTopping}>
                                {props.toppings.find(toppingListItem => toppingListItem.toppingID == cartItemTopping).toppingName}
                            </li>
                            ))}
                        </ul>
                    </li>
                </div>)
            )
        )
    }
}

export function Cart(props) {
    return (
        <div className='cart-wrapper'>
            <div className='cart-body'>
                <Header title='Cart'/>
                <ul className='cart-list'>
                    <ItemList currentCartItems={props.currentCartItems} removeItem={(foodItem) => props.removeItem(foodItem)} toppings={props.customizeData.toppings} />
                </ul>
                <button>Add to Order</button>
            </div>
        </div>
    )
}