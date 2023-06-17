export function FoodItemWithPrice(props) {
    console.log('fooditemwithprice foodItem: ' + JSON.stringify(props))
    const price =  props.FoodItem.customizeOptions.map(cartOption => cartOption.optionItems.reduce((a, b) => (a + b.price), 0)).reduce((a, b) => (a + b), 0)
    return props.FoodItem.foodName + ' ' + price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })
}
export function OrderMap( props ) {
    let isOrderPage = false;
    if (props.isOrderPage) {
        isOrderPage = true;
    }
    console.log('cart current cart items: ' + JSON.stringify(props.currentCartItems))

    if (props.currentCartItems.length > 0){
        return(
            <ul className='cart-list'>
                {props.currentCartItems.map(
                    foodItem => (
                        <div className='cart-item-wrapper' key={foodItem.cartItemID}>
                        <div className='cart-item'>
                            <FoodItemWithPrice FoodItem={foodItem}/>
                            {!isOrderPage && <button onClick={() => props.removeItem(foodItem)}>x</button>}
                        </div>
                            <li className='cart-item'>
                                <ul>
                                    {foodItem.customizeOptions.map((cartItemCustomize) => (
                                        <li className='cart-item' key={cartItemCustomize.optionName}>
                                            {cartItemCustomize.optionItems.map((customizeOptionItem) => customizeOptionItem.customizeOptionItem).join(', ')}
                                        </li>
                                        ))}
                                </ul>
                            </li>
                        </div>
                    )
                )}
            </ul>
        )
    }
}