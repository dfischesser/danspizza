function Header({ title }) {
    return <h5 className='padding customize-header'>{title ? title : 'Default title'}</h5>;
  }

export function Customize(props) {
    let updatedChecked = props.checked

    function handleChange(newToppingID) {
        let filterChecked = props.checked.filter(topping => (topping.toppingID == newToppingID)).pop()
        filterChecked.isChecked = !filterChecked.isChecked
        updatedChecked = props.checked.map((checked) => 
            (checked.toppingID == newToppingID) ? filterChecked : checked)
        console.log('cust updatedchecked: ' + JSON.stringify(updatedChecked))
      }

    return (
        <div className='customize-wrapper'>
            <div className='customize-title'>
                <Header title='Customize'/>
                <button className='customize-close-button' onClick={() => props.closeCustomize()}>X</button>
            </div>
            <p>{props.foodToCustomize.foodName}</p>
            <div className='customize-body'>
                    {props.customizeData.toppings.map((topping) => (
                    <div className='customize-center' key={topping.toppingID}>
                        <label htmlFor={topping.toppingID} className='customize-label'>{topping.toppingName}: {topping.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</label>
                        <input type='checkbox' 
                            key={topping.toppingID} 
                            id={topping.toppingID} 
                            name={topping.toppingName} 
                            value={props.checked} 
                            onChange={() => handleChange(topping.toppingID)} 
                            className='customize-item'
                        />
                        <br></br>
                    </div>
                    )
                    )}
                    <button onClick={() => props.addCustomItem(props.foodToCustomize)}>Add to Cart</button>
            </div>
        </div>
    )
}