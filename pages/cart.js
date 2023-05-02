function Header({ title }) {
    return <h3 className='padding'>{title ? title : 'Default title'}</h3>;
  }

function ItemList( props ) {

    console.log('cart current cart items: ' + JSON.stringify(props.currentCartItems))

    if (props.currentCartItems.length > 0){
        return(
            props.currentCartItems.map(
                foodItem => (
                <li key={foodItem.cartItemID} className='list-item'>
                    {foodItem.foodName}
                    <button onClick={() => props.onRemoveItem(foodItem)}>X</button>
                </li>
                )
            )
        )
    }
}

export function Cart(props) {
    return (
        <div className='cart-body'>
            <Header title='Cart'/>
            <ul className='menu-list'>
                <ItemList currentCartItems={props.currentCartItems} onRemoveItem={props.onRemoveItem} />
            </ul>
        </div>
    )
}