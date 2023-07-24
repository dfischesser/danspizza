/* eslint-disable react/prop-types */
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { getCookie } from './getCookie';
import { useState } from 'react';
import { fetchy } from './fetchy';

function Header({ title }) {
  return <h1 className="header-styles">{title ? title : 'Default title'}</h1>;
}

export const getServerSideProps = async (context) => {
  //console.log('server token:' + context.req.cookies.token)
  try {
    const res = await fetch(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/EditMenu/Food/Get' : 'danspizza-api.azurewebsites.net/api/EditMenu/Food/Get', { headers: { 'Authorization': 'Bearer ' + context.req.cookies.token } })
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const items = await res.json()
    console.log('food items: ' + JSON.stringify(items))
    return { props: { items: items } }
  }
  catch (error) {
    console.log('Error: ' + error.message)
  }

}

export function SelectCustomize(props) {
  console.log('select food props: ' + JSON.stringify(props))

  return (
    <Box sx={{ minWidth: 120 }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.foodItems.map(foodItem => ({ foodID: foodItem.foodID, foodName: foodItem.foodName }))}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Customize Options" />}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.foodName
        }
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(event, foodItem) => {
          props.setSelectedFoodItem(foodItem)
          props.setOptionItemsPosted(true)
          console.log('handlechange target value: ' + JSON.stringify(foodItem))
        }}
      />
    </Box>
  );
}

export function SelectFood(props) {
  console.log('select food props: ' + JSON.stringify(props))

  return (
    <Box sx={{ minWidth: 120 }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.foodItems.map(foodItem => ({ foodID: foodItem.foodID, foodName: foodItem.foodName }))}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Food Items" />}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.foodName
        }
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(event, foodItem) => {
          props.setSelectedFoodItem(foodItem)
          props.setOptionItemsPosted(true)
          console.log('handlechange target value: ' + JSON.stringify(foodItem))
        }}
      />
    </Box>
  );
}

export function SelectCategory(props) {
  console.log('select food props: ' + JSON.stringify(props))

  return (
    <Box sx={{ minWidth: 120 }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.foodItems.map(foodItem => ({ foodID: foodItem.foodID, foodName: foodItem.foodName }))}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Menu Categories" />}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.foodName
        }
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(event, foodItem) => {
          props.setSelectedFoodItem(foodItem)
          props.setOptionItemsPosted(true)
          console.log('handlechange target value: ' + JSON.stringify(foodItem))
        }}
      />
    </Box>
  );
}

export function OptionItemsForFood(props) {
  console.log('fetching food item: ' + props.foodID)
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + getCookie('token') }
  fetchy(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/EditMenu/OptionItems/Get' : 'danspizza-api.azurewebsites.net/api/EditMenu/OptionItems/Get', 'POST', props.foodID, headers)
    .catch((error) => {
      console.log('API error: ' + error)
      console.log('API error: ' + error.message)
      console.log('API error: ' + JSON.parse(error))
      console.log('API error: ' + JSON.parse(error.message))
      console.log('API error: ' + JSON.parse(error.message).message)
      props.setError('API error: ' + JSON.parse(error.message).message)
      props.setOptionItemsPosted(false)
    })
    .then((optionItems) => {
      console.log('option items: ' + JSON.stringify(optionItems))

      props.setFoodOptionItems(optionItems);
      const allFoodOptionItems = [];
      new Set(optionItems.map(optionItem => optionItem.customizeOption)).forEach(item => allFoodOptionItems.push(item))
      props.setFoodOptions(allFoodOptionItems)
      props.setOptionItemsPosted(false)
    })
    .catch((error) => {
      console.log('React fetch error: ' + error)
      props.setError('React fetch error: ' + error.message)
      props.setOptionItemsPosted(false)
    })
}

export function SelectCustomizeOptions(props) {
  console.log('options: ' + JSON.stringify(props.customizeOptions))

  return (
    <Box sx={{ minWidth: 120 }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.customizeOptions.map(option => ({ optionID: option.optionID, optionName: option.optionName }))}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Options" />}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.optionName
        }
        onChange={(event, option) => {
          props.setSelectedOption(option)
          console.log('handlechange target value: ' + JSON.stringify(option))
        }}
      />
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log('index: ' + index)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component='div'>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const focusStyle = {
  boxShadow: 1,
  borderRadius: 1,
  my: 1,
  opacity: 1
}
const blurStyle = {
  boxShadow: 3,
  borderRadius: 1,
  my: 1,
  opacity: .75
}

export function EditMenu(props) {
  const [selectedFoodItem, setSelectedFoodItem] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [foodOptions, setFoodOptions] = useState([]);
  const [foodOptionItems, setFoodOptionItems] = useState([{}]);
  const [optionItemsPosted, setOptionItemsPosted] = useState(false);
  const [error, setError] = useState(null)
  const [homeButtonValue, setHomeButtonValue] = useState(0);

  const [menuTabValue, setMenuTabValue] = useState(0);

  const handleMenuTabChange = (event, newValue) => {
    setMenuTabValue(newValue);
  };

  console.log('selectedFoodItem is: ' + JSON.stringify(selectedFoodItem) + '. optionItemsPosted is ' + optionItemsPosted)
  console.log('food items: ' + JSON.stringify(props.foodItems))
  console.log('options: ' + JSON.stringify(props.customizeOptions))
  return (


    <Grid container>
      <Grid xs={2} sx={{ borderRight: 1, borderColor: 'divider' }}>
        <List sx={{ pr: 2 }}>
          <ListItemButton sx={homeButtonValue === 4 ? focusStyle : blurStyle} selected={homeButtonValue === 4} onClick={(e) => setHomeButtonValue(4)} >
            <ListItemText primary={'Batch'} sx={{ textAlign: 'center' }} />
          </ListItemButton>
          <ListItemButton sx={homeButtonValue === 1 ? focusStyle : blurStyle} selected={homeButtonValue === 1} onClick={(e) => setHomeButtonValue(1)} >
            <ListItemText primary={'Categories'} sx={{ textAlign: 'center' }} />
          </ListItemButton>
          <ListItemButton sx={homeButtonValue === 2 ? focusStyle : blurStyle} selected={homeButtonValue === 2} onClick={(e) => setHomeButtonValue(2)} >
            <ListItemText primary={'Food'} sx={{ textAlign: 'center' }} />
          </ListItemButton>
          <ListItemButton sx={homeButtonValue === 3 ? focusStyle : blurStyle} selected={homeButtonValue === 3} onClick={(e) => setHomeButtonValue(3)} >
            <ListItemText primary={'Customize'} sx={{ textAlign: 'center' }} />
          </ListItemButton>
        </List>
      </Grid>
      <Grid xs={10} sx={{ pl: 2 }}>
        {homeButtonValue == 1 &&
          <Box sx={{ mx: 'auto', width: '50%' }}>
            <SelectCategory setOptionItemsPosted={(data) => setOptionItemsPosted(data)} foodItems={props.foodItems} setSelectedFoodItem={(foodItem) => setSelectedFoodItem(foodItem)}></SelectCategory>
            {selectedFoodItem &&
              <Box>
                Food Item set to {selectedFoodItem.foodName}
              </Box>}
          </Box>
        }
        {homeButtonValue == 2 &&
          <Box sx={{ mx: 'auto', width: '50%' }}>
            <SelectFood setOptionItemsPosted={(data) => setOptionItemsPosted(data)} foodItems={props.foodItems} setSelectedFoodItem={(foodItem) => setSelectedFoodItem(foodItem)}></SelectFood>
            {selectedFoodItem &&
              <Box sx={{ mx: 'auto', width: '100%' }}>
                {/* <SelectCustomizeOptions 
                      customizeOptions={props.items.customizeOptions} 
                      setSelectedOption={(option) => setSelectedOption(option)}
                      setOptionItemsPosted={(data) => setOptionItemsPosted(data)} 
                  /> */}
                <Box>
                  {foodOptionItems && foodOptions.map((option, index) => <div key={index}>{option}</div>)}
                </Box>
                {error && <Box>{error}</Box>}
                {optionItemsPosted && selectedFoodItem &&
                  <OptionItemsForFood
                    foodID={selectedFoodItem.foodID}
                    foodOptions={foodOptions}
                    setOptionItemsPosted={(data) => setOptionItemsPosted(data)}
                    setFoodOptionItems={(data) => setFoodOptionItems(data)}
                    setFoodOptions={(data) => setFoodOptions(data)}
                    setError={(data) => setError(data)}
                  />
                }
              </Box>}
          </Box>
        }
        {homeButtonValue == 3 &&
          <Box sx={{ mx: 'auto', width: '50%' }}>
            <SelectCustomize setOptionItemsPosted={(data) => setOptionItemsPosted(data)} foodItems={props.foodItems} setSelectedFoodItem={(foodItem) => setSelectedFoodItem(foodItem)}></SelectCustomize>
          </Box>
        }
        {homeButtonValue == 4 &&
          <Typography sx={{ my: 'auto' }}>Batch Upload</Typography>
        }
      </Grid>
    </Grid>
  );
}