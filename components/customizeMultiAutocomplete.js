import * as React from 'react';
import { useState } from 'react'
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';

export function CustomizeMultiAutocomplete({customizeOption, handleChange}) {
    
    //console.log('CustomizeMultiAutocomplete rendered. custOption: ' + JSON.stringify(customizeOption))
    const [value, setValue] = useState([])
    //console.log('value: ' + JSON.stringify(value))
  return (
      <Autocomplete
        multiple
        disablePortal
        limitTags={2}
        options={customizeOption.optionItems}
        disableCloseOnSelect
        value={value}
        onChange={(event, newValue) => {
          if (event.currentTarget) {
            console.log('change hit. target: ' + event.currentTarget.innerText)
            console.log('newValue: ' + JSON.stringify(newValue))
          }
          if (newValue.find(x => x.customizeOptionItem === 'Cheese')) {
            console.log('found cheese in array')
              if (event.currentTarget.innerText.startsWith('Cheese')) {
                console.log('current target starts with cheese. setting only cheese')
                setValue(newValue.filter(x => x.customizeOptionItem === 'Cheese'));
              } else {
                setValue(newValue.filter(x => x.customizeOptionItem !== 'Cheese'));
              }
          }
         else {
            setValue(newValue);
          }
          handleChange({optionItems: newValue, optionID: customizeOption.optionID})
        }}
        sx={{ minWidth: 300, mx: 'auto', display: 'block', pt: 2 }}
        getOptionLabel={(option) => option.customizeOptionItem}
        size='small'
        renderInput={(params) => <TextField {...params} size='small' multiline maxRows={2} label={customizeOption.optionName} variant='filled' />}
        renderOption={(props, option, { selected }) => {
            return (
                    <ListItem {...props} key={option.customizeOptionItemID} sx={{backgroundColor: 'background.paper'}} secondaryAction={option.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}>
                            
                            <ListItemText 
                                primary={
                                  <>
                                  <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                  />
                                  {option.customizeOptionItem}
                                  </>
                                } 
                            />
                    </ListItem>
            )
        }}
      />
  );
}