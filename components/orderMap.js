
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/CloseRounded';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


export function FoodItemWithPrice(props) {
    console.log('fooditemwithprice foodItem: ' + JSON.stringify(props))
    const price =  props.FoodItem.customizeOptions.map(cartOption => cartOption.optionItems.reduce((a, b) => (a + b.price), 0)).reduce((a, b) => (a + b), 0)
    return price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })
}
export function OrderMap( props ) {
    let isOrderPage = false;
    if (props.isOrderPage) {
        isOrderPage = true;
    }
    console.log('cart current cart items: ' + JSON.stringify(props.currentCartItems))

    if (props.currentCartItems.length > 0){
        return(
                <List sx={{p: 1}}>
                {props.currentCartItems.map(
                        foodItem => (
                            <>
                        <ListItem disablePadding
                            key={foodItem.cartItemID} 
                            sx={{
                                textAlign:'center', 
                                borderRadius: 1, 
                                boxShadow: 3,
                                bgcolor: '#fafaf5'
                        }} 
                        >
                            <ListItemText 
                                primary={ 
                                    <Grid container rowSpacing={1} columnSpacing={2} alignItems={'center'} sx={{margin: '0 auto'}}>
                                            <Grid xs={10}>
                                            <Typography noWrap textAlign={'left'}>
                                                {foodItem.foodName}
                                            </Typography>
                                            </Grid>
                                            <Grid xs={2}>
                                                <IconButton sx={{border: '1px solid', boxShadow: 3, color: 'error'}} size='small' disableGutters variant='contained' onClick={() => props.removeItem(foodItem)}>
                                                        <CloseIcon fontSize='small' sx={{bgcolor: '#a2747b', color: 'success', bgcolor: 'black'}} disableGutters disablePadding/>
                                                </IconButton>
                                            </Grid>
                                            <Grid xs={9} xsOffset={1}>
                                                <Box sx={{textAlign:'left'}}>
                                                    <Typography noWrap>{
                                                        foodItem.customizeOptions.map((cartItemCustomize) => (
                                                        cartItemCustomize.optionItems.map((customizeOptionItem) => 
                                                        customizeOptionItem.customizeOptionItem).join(', '))).join(', ')  
                                                    }</Typography>
                                                </Box>
                                            </Grid>
                                    </Grid>
                                }
                                secondary={<Box sx={{textAlign:'right'}}>
                                <Grid container spacing={2}>
                                    <Grid xs={10}>
                                        <Box textAlign={'right'}>
                                            <FoodItemWithPrice FoodItem={foodItem}/>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </Box>}
                            />
                            <Divider/>
                    </ListItem>
                    </>))
                    }
                </List>
        )
    }
}

            {/* <ul className='cart-list'>
                {props.currentCartItems.map(
                    foodItem => (
                        <div className='cart-item-wrapper' key={foodItem.cartItemID}>
                        <div className='cart-item'>
                            <FoodItemWithPrice FoodItem={foodItem}/>
                            {!isOrderPage && <button onClick={() => props.removeItem(foodItem)}>x</button>}
                        </div>
                            <li className='cart-item'>
                                <ul>
                                    {foodItem.customizeOptions.map((cartItemCustomize) => (
                                        <li className='cart-item' key={cartItemCustomize.optionName}>
                                            {cartItemCustomize.optionName}:  {cartItemCustomize.optionItems.map((customizeOptionItem) => customizeOptionItem.customizeOptionItem).join(', ')}
                                        </li>
                                        ))}
                                </ul>
                            </li>
                        </div>
                    )
                )}
            </ul> */}