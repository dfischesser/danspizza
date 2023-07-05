import Link from 'next/link'
import { OrderMap } from '../components/orderMap'
import { GetPrice } from '../components/getPrice'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const CartItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fafaf5',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 1, 
    boxShadow: 3,
  }));

  const Submit = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f0f5f5',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    bgcolor: '#f0f5f5',
    boxShadow: 'none'
  }));

export function FoodItemWithPrice(props) {
    console.log('fooditemwithprice foodItem: ' + JSON.stringify(props))
    const price =  props.FoodItem.customizeOptions.map(cartOption => cartOption.optionItems.reduce((a, b) => (a + b.price), 0)).reduce((a, b) => (a + b), 0)
    return price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })
}

export function Cart(props) {
    console.log('cart props: ' + JSON.stringify(props))

    let defaultOption
    if (props.currentCartItems.flatMap(item => item.customizeOptions).find(option => (option.isDefaultOption))) {
        defaultOption = props.currentCartItems.flatMap(item => item.customizeOptions).find(option => (option.isDefaultOption)).optionID
    } else {
        defaultOption = ''
    }
    console.log('defaultOption: ' + JSON.stringify(defaultOption))

    return (
            <Paper elevation={3} sx={{width: 300, bgcolor: '#f0f5f5'}}>
                <Stack spacing={1} justifyContent={'space-between'} sx={{minHeight: 300,}}>
                    <Submit>
                        <List sx={{p: 1}}>
                        <Stack spacing={1}>
                        {props.currentCartItems.map(
                                foodItem => <Box key={foodItem.cartItemID}>
                                <CartItem>
                                    <Stack direction={'row'}>
                                        <Box sx={{width: '85%'}}>
                                            <Typography textAlign={'left'} fontWeight={500} >
                                                {foodItem.foodName} {foodItem.customizeOptions
                                                                    .find((cartItemCustomize) => (defaultOption === cartItemCustomize.optionID)) && '(' + foodItem.customizeOptions
                                                                    .find((cartItemCustomize) => ((defaultOption === cartItemCustomize.optionID))).optionItems
                                                                    .find(x=>x).customizeOptionItem + ')'}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ textAlign:'right', p: 0, fontSize:'10px', width: '15%' }}>
                                            <IconButton sx={{border: '1px solid', boxShadow: 3, fontSize:'15px', p:0.25}} variant='contained' onClick={() => props.removeItem(foodItem)}>
                                                    <CloseIcon fontSize='1px'/>
                                            </IconButton>
                                        </Box>
                                    </Stack>
                                    <ListItem disablePadding
                                        key={foodItem.cartItemID} 
                                    >
                                        <ListItemText 
                                            primary={ 
                                                    <Grid container rowSpacing={1} columnSpacing={2} alignItems={'center'} sx={{margin: '0 auto'}}>
                                                        <Grid xs={10} >
                                                            <Typography component={'div'} noWrap>{
                                                                // console.log('test: ' + JSON.stringify(foodItem.customizeOptions
                                                                //     .filter((cartItemCustomize) => ((defaultOption !== cartItemCustomize.optionID)))
                                                                //     .flatMap(option => option.optionItems
                                                                //     .filter((customizeOptionItem) =>
                                                                //         ((customizeOptionItem.customizeOptionItem !== option.optionName) && customizeOptionItem.customizeOptionItem)
                                                                //         )
                                                                //     .map(x => x.customizeOptionItem).join(', '))))}
                                                                //
                                                                // Get all option items that are (A) not part of the default option and (B) not equal to the default option name 
                                                                
                                                                foodItem.customizeOptions
                                                                .filter((cartItemCustomize) => ((defaultOption !== cartItemCustomize.optionID)))
                                                                .flatMap(option => option.optionItems
                                                                .filter((customizeOptionItem) =>
                                                                    ((customizeOptionItem.customizeOptionItem !== option.optionName) && customizeOptionItem.customizeOptionItem)
                                                                    )
                                                                .map(x => x.customizeOptionItem)).join(', ')
                                                                }
                                                            </Typography>
                                                    </Grid>
                                                    </Grid>
                                            }
                                            secondary={<Box sx={{textAlign:'right'}}>
                                            <Grid container spacing={2}>
                                                <Grid xs={12} textAlign={'right'}>
                                                        <FoodItemWithPrice FoodItem={foodItem}/>
                                                </Grid>
                                            </Grid>
                                            </Box>}
                                        />
                                    </ListItem>
                                </CartItem>
                            </Box>)
                            }
                            </Stack>
                        </List>
                        {props.currentCartItems.length > 0 && 
                        <Typography textAlign={'center'}>
                            <GetPrice currentCartItems={props.currentCartItems} customizeData={props.customizeData} />
                        </Typography>}
                    </Submit>
                    <Submit sx={{width: '100%', pb: 2}}>
                        <Typography textAlign={'center'}>
                            {(props.currentCartItems.length === 0) && 'No items added'}
                            {!props.isLoggedIn ? 
                                <Box sx={{pt: 3}}>Create Account to Place Order
                                    <Button sx={{mt: 1}} variant='contained' onClick={() => {props.setIsCreate(true); props.setOpenLogin(true)}}>
                                        Create Account
                                    </Button>
                                </Box>
                            :
                            !props.userName ? 
                                <Box sx={{width:'90%', mx: 'auto'}}>
                                    <Box>
                                    <Button variant='contained' onClick={() => {props.setIsCreate(true); props.setIsStep2(true); props.setOpenLogin(true)}}>
                                    Complete Account Creation
                                    </Button></Box>
                                </Box> : 
                            props.currentCartItems.length > 0 &&                             
                                <Button sx={{mx: 'auto', width: '150px', display: 'block', textAlign:'center'}} variant='contained' href='/order' onClick={() => props.handleAddOrderClick()}>Prepare Order</Button>
                            }
                        </Typography>
                    </Submit>
                </Stack>
            </Paper>
        )
}