/* eslint-disable react/prop-types */
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export function CustomizeAutocomplete({customizeOption, handleChange}) {  

    //Get any defaults if they exist or there is a specified default option set it
    const defaultValue = () => {
            //If there is only one item set 
                // console.log('defaultValue hit. option items amount : ' + customizeOption.optionItems.length);
                // console.log('defaultValue hit. is default option : ' + customizeOption.isDefaultOption);
            if ((customizeOption.optionItems.length === 1 || customizeOption.isDefaultOption)) {
                // console.log('default found. : ' + JSON.stringify(customizeOption))
                handleChange({optionItems: [customizeOption.optionItems[0]], optionID: customizeOption.optionItems[0].optionID})
                return customizeOption.optionItems[0].customizeOptionItem
            }
            console.log('NO default found. : ' + JSON.stringify(customizeOption));
            return ''
    }
    const [value, setValue] = useState(defaultValue)

    //console.log('# optionItems: ' + customizeOption.optionItems.length)
    //console.log('option item 1: ' + JSON.stringify(customizeOption.optionItems[0]))
    //console.log('option item 1 name: ' + JSON.stringify(customizeOption.optionItems[0].customizeOptionItem))

    if (customizeOption.optionItems.length === 1) {
    }

    return (
        <Autocomplete
            disablePortal
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
                handleChange({optionItems: (newValue ? [newValue] : []), optionID: customizeOption.optionID})
            }}
            onInputChange={(event, newValue) => {
                if (customizeOption.optionItems.length === 1 && customizeOption.optionItems[0].customizeOptionItem === newValue)
                {
                    handleChange({optionItems: [customizeOption.optionItems[0]], optionID: customizeOption.optionItems[0].optionID})
                }
            }}
            options={customizeOption.optionItems}
            getOptionLabel={(option) =>
                typeof option === 'string' ? option : option.customizeOptionItem
                }
            sx={ customizeOption.optionItems.length === 1 ? { display: 'none' } : { width: 300, mx: 'auto', display: 'block', pt: 2 }}
            key={customizeOption.optionID}
            isOptionEqualToValue={(option, value) => option.optionItemID === value.optionItemID}
            renderInput={(params) => <TextField {...params} placeholder={customizeOption.optionName} label={customizeOption.optionName} />}
            renderOption={(props, option) => {
                return (
                        <ListItem {...props} key={option.customizeOptionItemID} sx={{backgroundColor: 'background.paper'}} secondaryAction={option.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}>
                                <ListItemText 
                                    primary={option.customizeOptionItem} 
                                />
                        </ListItem>
                )
            }}
        />
    );
}