import { useState } from 'react'
function Header({ title }) {
    return <h5 className='padding customize-header'>{title ? title : 'Default title'}</h5>;
  }
export function Customize(props) {
    const [categoryCustomize, setCategoryCustomize] = useState(null)
    const [optionSelected, setOptionSelected] = useState(false)
    const [optionsValidated, setOptionsValidated] = useState(false)
    const [currentCartItem, setCurrentCartItem] = useState(null)
    let updatedChecked = props.checked
    let customizeOptions
    console.log('props:' + JSON.stringify(props))
    console.log('cust food to customize:' + JSON.stringify(props))
    if (props.customizeFood.customizeOptions){
        customizeOptions = props.customizeFood.customizeOptions
        console.log('hey!')
    }
    //console.log('data: ' + JSON.stringify(data))

    function handleChange(newCustomizeID) {
        let filterChecked = props.checked.filter(customize => (customize.customizeID == newCustomizeID)).pop()
        filterChecked.isChecked = !filterChecked.isChecked
        updatedChecked = props.checked.map((checked) => 
            (checked.customizeID == newCustomizeID) ? filterChecked : checked)
        console.log('cust updatedchecked: ' + JSON.stringify(updatedChecked))
      }
    function validateOptions(newFoodToCustomize) {
        // Validate toppings
        console.log('validate newFoodToCustomize: ' + JSON.stringify(newFoodToCustomize))
        let validator = []
        props.customizeFood.customizeOptions.map(menuOption => {
            validator.push({optionName: menuOption.optionName, isValid: false})
        })
        newFoodToCustomize.customizeOptions.map(newOption => {
            validator.map(valOption => {
                if (valOption.optionName == newOption.optionName) {
                    valOption.isValid = true;
                }
            })
        })
        console.log('Validator: ' + JSON.stringify(validator))
        setOptionsValidated(validator.every(validation => validation.isValid == true) ? true : false)

        // props.customizeFood.customizeOptions.map(menuOption => {
        //     console.log('Validating for: ' + JSON.stringify(newFoodToCustomize.customizeOptions.find(newOption => newOption.optionName == menuOption.optionName)));
        //     if (!newFoodToCustomize.customizeOptions.find(newOption => newOption.optionName == menuOption.optionName)) {
        //         console.log('Validate Failed for: ' + JSON.stringify(newFoodToCustomize.customizeOptions.find(newOption => newOption.optionName == menuOption.optionName)));
        //         setOptionsValidated(false)
        //         return
        //     }
        //     console.log('Validate passed for: ' + JSON.stringify(newFoodToCustomize.customizeOptions.find(newOption => newOption.optionName == menuOption.optionName)))
        //     setOptionsValidated(true)                
        // })
    }
    function handleSetCurrentCartItem(optionItem) {
        console.log('Current Cart Item: ' + JSON.stringify(props.foodToCustomize))
        let newFoodToCustomize = props.foodToCustomize
        let newCustomizeOption
        //Do any options exist
        if (newFoodToCustomize.customizeOptions) {
            console.log('Some kind of options exist')
            if (currentCartItem){
                newCustomizeOption = currentCartItem.customizeOptions.find(option => option.optionName == optionItem.customizeOption)
            }
            console.log('find result: ' + JSON.stringify(newCustomizeOption))
            // Does a specific option exist
            if (newCustomizeOption) { 
                console.log('Specific option exists: '+ JSON.stringify(newCustomizeOption) +'. assigning option item')
                //If selected option item is part of a multiselect
                if (optionItem.isMultiSelect == 1) {
                    // If any current option items exist
                    if (newCustomizeOption.optionItems) {
                        // If any current option items are the new one, then remove
                        if (newCustomizeOption.optionItems.find(custOptionItem => custOptionItem.customizeOptionItem == optionItem.customizeOptionItem)){
                            newCustomizeOption.optionItems =
                            newCustomizeOption.optionItems.filter(custOptionItem => custOptionItem.customizeOptionItem != optionItem.customizeOptionItem)
                            setCategoryCustomize(categoryCustomize.map(ccOptionItem => ccOptionItem.customizeOptionItem == optionItem.customizeOptionItem ? {...ccOptionItem, isActive: 1} : ccOptionItem))
                        } else { // If not, then add and activate
                            console.log('Adding and activating. new categorycustomize: ' + JSON.stringify(categoryCustomize.find(ccOptionItem => ccOptionItem.customizeOptionItem == optionItem.customizeOptionItem).isActive = 1))
                            newCustomizeOption.optionItems.push({...optionItem, isActive: 1})
                            categoryCustomize.map(ccOptionItem => ccOptionItem.customizeOptionItem == optionItem.customizeOptionItem ? {...ccOptionItem, isActive: 1} : ccOptionItem)
                            setCategoryCustomize(categoryCustomize.map(ccOptionItem => ccOptionItem.customizeOptionItem == optionItem.customizeOptionItem ? {...ccOptionItem, isActive: 1} : ccOptionItem))
                        }
                    } else { // If no options items exist then add as new option item
                        newCustomizeOption.optionItems = [{...optionItem, isActive: 1}]
                        setCategoryCustomize(categoryCustomize.map(ccOptionItem => ccOptionItem.customizeOptionItem == optionItem.customizeOptionItem ? {...ccOptionItem, isActive: 1} : ccOptionItem))
                    }
                } else { // if not multiselect remap
                    newCustomizeOption.optionItems = [{...optionItem, isActive: 1}]
                }
            } else {
                console.log('At least one option exists but not optionitem ' + JSON.stringify(optionItem.customizeOption) + ', pushing to customize options:')
                    newFoodToCustomize.customizeOptions.push({optionName: optionItem.customizeOption, optionItems: [{...optionItem, isActive: 1}]})
            }
        } else { //Else add new Customize Options
            console.log('No options exist. assigning options')
            newFoodToCustomize.customizeOptions = [{optionName: optionItem.customizeOption, optionItems: [{...optionItem, isActive: 1}]}]
        }
        console.log('customizeFood: ' + JSON.stringify(props.customizeFood))
        if (customizeOptions.includes(food => food.foodID == props.foodToCustomize.foodID).customizeOptions)
        console.log('new food: ' + JSON.stringify(newFoodToCustomize))
        setCurrentCartItem(newFoodToCustomize) 
        if (optionItem.isMultiSelect == 0) {
            console.log('about to set option selected to false')
            setOptionSelected(false);
        }
        validateOptions(newFoodToCustomize)
    }
     if (categoryCustomize){
        console.log('Category Customize: ' + JSON.stringify(categoryCustomize))
    }
    if (currentCartItem){
        console.log('Current Cart Item: ' + JSON.stringify(currentCartItem))
    }
    return (
        <div className='customize-wrapper'>
            <div className='customize-title'>
                <Header title='Customize'/>
                <button className='customize-close-button' onClick={() => props.setOpenModal({...props.openModal, customize: false})}>X</button>
            </div>
            <h6>{props.foodToCustomize.foodName}</h6>

            <div className='customize-body'>
                {customizeOptions.map(option => 
                <div key={option.optionName}>
                    <div className='customize-option' key={option.optionName} onClick={() => { setCategoryCustomize(option.optionItems.map(optionitem => ({...optionitem, isActive: 0}))); setOptionSelected(!optionSelected); console.log('options selected: ' + JSON.stringify(option.optionItems) + '\n customize option: ' + option.optionItems[0].customizeOption + '\n option name: ' + option.optionName)}}>
                        <div className='customize-option-value'>{option.optionName}</div>
                        <div className='customize-option-type'>
                        {
                            (currentCartItem &&
                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName)) &&
                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems &&
                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                            .find(optionItem => optionItem.customizeOptionItem) &&

                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                            .find(optionItem => optionItem.customizeOptionItem).isMultiSelect == 1
                                ?
                                    currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName) &&  

                                        currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                                        .find(optionItem => optionItem.customizeOptionItem) &&
                                        currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems.length + ' Items: '
                                :
                            currentCartItem &&
                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName) &&
                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems &&
                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                            .find(optionItem => optionItem.customizeOptionItem) &&
                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                            .find(optionItem => optionItem.customizeOptionItem).customizeOptionItem + ': '
                        }
                        
                        {
                            (currentCartItem &&
                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName)) &&
                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems &&

                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                            .find(optionItem => optionItem.customizeOptionItem) &&
                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                            .find(optionItem => optionItem.customizeOptionItem).isMultiSelect == 1 
                                ?
                                    currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName) &&  

                                    currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                                    .find(optionItem => optionItem.customizeOptionItem) ?
                                    currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                                    .filter(optionItem => optionItem.customizeOptionItem).reduce((a, b) => (a + b.price), 0)
                                    .toLocaleString('us-US', { style: 'currency', currency: 'USD' })
                                    :
                                    '(Select)'
                                :
                                    (currentCartItem &&
                                        currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName)) &&  
                                        
                                        currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                                        .find(optionItem => optionItem.customizeOptionItem) 
                                        ?
                                            currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == option.optionName).optionItems
                                            .find(optionItem => optionItem.customizeOptionItem).price.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) 
                                        : 
                                            '(Select)'
                        }
                        </div>
                    </div>
                    <div>
                        {optionSelected && categoryCustomize[0].customizeOption == option.optionName &&
                        categoryCustomize.map(optionItem => 
                        <div key={optionItem.customizeOptionItem}
                            className={currentCartItem && 
                                currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == optionItem.customizeOption) && 
                                currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == optionItem.customizeOption).optionItems
                                .find(cartOptionItem => cartOptionItem.customizeOptionItem == optionItem.customizeOptionItem) &&
                                currentCartItem.customizeOptions.find(cartOption => cartOption.optionName == optionItem.customizeOption).optionItems
                                .find(cartOptionItem => cartOptionItem.customizeOptionItem == optionItem.customizeOptionItem).isActive == 1 ? 'customize-option-item-active' : 'customize-option-item' } 
                                onClick={() => {handleSetCurrentCartItem(optionItem);}}
                            >
                            {optionItem.customizeOptionItem} {optionItem.price && optionItem.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}
                        </div>)}  
                    
                    </div>
                </div>
                )}
                {optionsValidated &&
                <button onClick={() => props.addCustomItem(currentCartItem)}>Add to Cart</button>}
            </div>

        </div>
    )
}