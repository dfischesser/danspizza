import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { CustomizeMultiAutocomplete } from './customizeMultiAutocomplete'
import { CustomizeAutocomplete } from './customizeAutocomplete'

export function Customize(props) {

    const custOptions = props.customizeFood.customizeOptions.map(custOption => ({
    optionID: custOption.optionID,
    optionName: custOption.optionName, 
    isMultiSelect: custOption.isMultiSelect, 
    isDefaultOption: custOption.isDefaultOption, 
    price: 0,
    optionItems: []
    }))

    const [optionsValidated, setOptionsValidated] = useState(false)
    const [customizeOptions, setCustomizeOptions] = useState(custOptions)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        console.log('setting price: ' + customizeOptions.filter(x => (x.price !== null)).reduce((a, b) => (a + b.price), 0))
        setPrice(customizeOptions.filter(x => (x.price !== null)).reduce((a, b) => (a + b.price), 0))
        console.log('valid: ' + customizeOptions.every(x => (x.optionItems.length > 0)))
        
    }, [customizeOptions, price])

    //console.log('currentCartItem: ' + JSON.stringify(props.customizeFood))
    console.log('customizeOptions: ' + JSON.stringify(customizeOptions))
    console.log('current price: ' + price)

    let test = customizeOptions.filter(x => (x.price !== null)).reduce((a, b) => (a + b.price), 0)
    if (test.length > 0) {
        console.log('filtered options: ' + JSON.stringify(test))
        console.log('adding prices: ' + test.reduce((a, b) => (a + b.price), 0))
    }

    function handleChange(newValue) {
        console.log('new value: ' + JSON.stringify(newValue))
        console.log('custOptions value: ' + JSON.stringify(customizeOptions))
        console.log('poop')
        console.log('newValue[0]: ' + (newValue.optionItems.length > 0))
        //here
        if (newValue.optionItems.length > 0) {
            console.log('incoming price: ' + newValue.optionItems.reduce((a, b) => (a + b.price), 0))
            setCustomizeOptions(customizeOptions.map(x => (x.optionID === newValue.optionID) ? {...x, optionItems: newValue.optionItems, price: newValue.optionItems.reduce((a, b) => (a + b.price), 0)} : {...x}))
        } else {
            setCustomizeOptions(customizeOptions.map(x => (x.optionID === newValue.optionID) ? {...x, optionItems: newValue.optionItems} : {...x}))
        }
    }

    function handleClick() {
        console.log('custOptions final value: ' + JSON.stringify(customizeOptions))
        console.log('all optionItems selected: ' + JSON.stringify(customizeOptions.every(x => (x.optionItems.length > 0))))
        props.addCustomItem({...props.customizeFood, customizeOptions: customizeOptions})
        props.collapseCustomizeOnAdd()
    }

    //Get any defaults if they exist or there is a specified default option set it
    const defaultValue = (custOption) => {
        //If there is only one item set 
            // console.log('defaultValue hit. option items amount : ' + customizeOption.optionItems.length);
            // console.log('defaultValue hit. is default option : ' + customizeOption.isDefaultOption);
        if ((custOption.optionItems.length === 1 || custOption.isDefaultOption)) {
            // console.log('default found. : ' + JSON.stringify(customizeOption))
            console.log('returning default: ' + JSON.stringify(custOption.optionItems[0].customizeOptionItem));
            return custOption.optionItems[0].customizeOptionItem
        }
        console.log('NO default found. : ' + JSON.stringify(custOption));
        return ''
    }

    return (
        <Stack sx={{ width: '100%' }}>
            {props.customizeFood.customizeOptions.map(custOption => custOption.isMultiSelect ?
                <CustomizeMultiAutocomplete 
                    key={custOption.optionID} 
                    handleChange={(newValue) => handleChange(newValue)} 
                    customizeOption={custOption} 
                    defaultValue={defaultValue(custOption)}
                /> :
                <CustomizeAutocomplete 
                    key={custOption.optionID} 
                    handleChange={(newValue) => handleChange(newValue)} 
                    customizeOption={custOption} 
                    defaultValue={defaultValue(custOption)} 
                />
            )}
            
            {(customizeOptions.every(x => (x.optionItems.length > 0))) ? <Button onClick={() => handleClick()} variant='contained' sx={{ width: 300, mx: 'auto', display: 'block', my: 2 }}>Add To Cart - {price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</Button>
            : <Button disabled variant='contained' sx={{ width: 300, mx: 'auto', display: 'block', my: 2 }}>Add To Cart</Button>}
            
        </Stack>

    )
}