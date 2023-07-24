/* eslint-disable react/prop-types */
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { getCookie } from '../../components/getCookie';
import { useState } from 'react';
import { fetchy } from '../../components/fetchy';
import { EditMenu } from '../../components/editMenu';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Tooltip from '@mui/material/Tooltip';

function Header({ title }) {
  return <h1 className="header-styles">{title ? title : 'Default title'}</h1>;
}

export const getServerSideProps = async (context) => {
  console.log('server token:' + JSON.stringify(context.req.cookies))
  try {
    const res = await fetch(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/EditMenu/Food/Get' : 'danspizza-api.azurewebsites.net/api/EditMenu/Food/Get', { headers: { 'Authorization': 'Bearer ' + context.req.cookies.token } })
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const items = await res.json()
    console.log('food items count: ' + items.foodItems.length)
    return { props: { items: [] } }
  }
  catch (error) {
    console.log('Error: ' + error.message)
  }

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

export default function EditSite(props) {
  const [selectedFoodItem, setSelectedFoodItem] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [foodOptions, setFoodOptions] = useState([]);
  const [foodOptionItems, setFoodOptionItems] = useState([{}]);
  const [optionItemsPosted, setOptionItemsPosted] = useState(false);
  const [error, setError] = useState(null)

  const [pageTabValue, setPageTabValue] = useState(0);
  const [homeButtonValue, setHomeButtonValue] = useState(0);
  const handlePageTabChange = (event, newValue) => {
    setPageTabValue(newValue);
  };

  const handleMenuTabChange = (event, newValue) => {
    setPageTabValue(newValue);
  };

  console.log('selectedFoodItem is: ' + JSON.stringify(selectedFoodItem) + '. optionItemsPosted is ' + optionItemsPosted)
  console.log('food items: ' + JSON.stringify(props.items.foodItems))
  console.log('options: ' + JSON.stringify(props.items.customizeOptions))
  return (
    <Box textAlign={'center'}>
      <Header title="Edit Site" />
      <Tooltip title='Edit Site Disabled' followCursor>
        <Box>
        <Grid container textAlign={'center'} sx={{ px: 5, pointerEvents: 'none', opacity: "0.4" } /*pointerEvents: "none",*/} >
          <Grid xs={12}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={pageTabValue} onChange={handlePageTabChange} aria-label="basic tabs example">
                <Tab label="Edit Home" {...a11yProps(0)} sx={{ fontSize: '1rem' }} />
                <Tab label="Edit Menu" {...a11yProps(1)} sx={{ fontSize: '1rem' }} />
              </Tabs>
            </Box>
          </Grid>
          <Grid xs={12}>
            <TabPanel value={pageTabValue} index={0}>
              <Grid container>
                <Grid xs={5} sm={3} md={2} sx={{ borderRight: 1, borderColor: 'divider' }}>
                  <List sx={{ p: 1 }}>
                    <ListItemButton sx={homeButtonValue === 1 ? focusStyle : blurStyle} selected={homeButtonValue === 1} onClick={(e) => setHomeButtonValue(1)} >
                      <ListItemText primary={'Coupons'} sx={{ textAlign: 'center' }} />
                    </ListItemButton>
                    <ListItemButton sx={homeButtonValue === 2 ? focusStyle : blurStyle} selected={homeButtonValue === 2} onClick={(e) => setHomeButtonValue(2)} >
                      <ListItemText primary={'Blurb'} sx={{ textAlign: 'center' }} />
                    </ListItemButton>
                    <ListItemButton sx={homeButtonValue === 3 ? focusStyle : blurStyle} selected={homeButtonValue === 3} onClick={(e) => setHomeButtonValue(3)} >
                      <ListItemText primary={'News'} sx={{ textAlign: 'center' }} />
                    </ListItemButton>
                  </List>
                </Grid>
                <Grid xs={7} sm={9} md={10}>
                  {homeButtonValue == 1 &&
                    <Typography sx={{ my: 'auto' }}>Current Coupons</Typography>
                  }
                  {homeButtonValue == 2 &&
                    <Typography sx={{ my: 'auto' }}>Current Blurb</Typography>
                  }
                  {homeButtonValue == 3 &&
                    <Typography sx={{ my: 'auto' }}>Current News</Typography>
                  }
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
          <Grid xs={12} >
            <TabPanel value={pageTabValue} index={1}>
              <EditMenu foodItems={props.items.foodItems}></EditMenu>
            </TabPanel>
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
          </Grid>

        </Grid>
        </Box>
      </Tooltip>
    </Box>
  );
}