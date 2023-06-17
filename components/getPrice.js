export function GetPrice(props) { 
    let isOrderPage = false;
    if (props.isOrderPage) {
        isOrderPage = true;
    }
    let subtotal = 0
    props.currentCartItems.map(foodItem => {
        subtotal += foodItem.customizeOptions.map(cartOption => cartOption.optionItems.reduce((a, b) => (a + b.price), 0)).reduce((a, b) => (a + b), 0)
        console.log('stotal: ' + foodItem.customizeOptions.map(cartOption => cartOption.optionItems.reduce((a, b) => (a + b.price), 0)).reduce((a, b) => (a + b), 0))
    })

    //food item price
    const tax = subtotal * .0725
    const total = subtotal + tax
    return (
        <div>
            <div>Subtotal:  {subtotal.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</div>
            {isOrderPage && <div>Tax (7.25%): {tax.toLocaleString('us-US', { style: 'currency', currency: 'USD' })} </div>}
            {isOrderPage && <div>Total: {total.toLocaleString('us-US', { style: 'currency', currency: 'USD' })} </div>}
        </div>

    )
}