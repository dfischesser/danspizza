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
        options={customizeOption.optionItems}
        disableCloseOnSelect
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleChange({optionItems: newValue, optionID: customizeOption.optionID})
        }}
        sx={{ width: 300, mx: 'auto', display: 'block', pt: 2 }}
        getOptionLabel={(option) => option.customizeOptionItem}
        renderInput={(params) => <TextField {...params} placeholder={customizeOption.optionName} label={customizeOption.optionName} />}
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