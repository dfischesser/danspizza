import Link from 'next/link'
import { OrderMap } from '../components/orderMap'
import { GetPrice } from '../components/getPrice'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import jwt_decode from 'jwt-decode';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/CloseRounded';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { getCookie } from './getCookie';
import { NextLinkComposed } from './Link';

const CartItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 1,
    boxShadow: 3,
}));

const Submit = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fafaf5',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
}));

function FoodItemWithPrice(props) {
    //console.log('fooditemwithprice foodItem: ' + JSON.stringify(props))
    const price = props.foodItem.customizeOptions.map(cartOption => cartOption.optionItems.reduce((a, b) => (a + b.price), 0)).reduce((a, b) => (a + b), 0)
    return price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })
}

function OptionsWithPrice(props) {
    //console.log('fooditemwithprice foodItem: ' + JSON.stringify(props))
    const price = props.option.optionItems.reduce((a, b) => (a + b.price), 0)
    if (price !== 0) {
        return price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })
    }
}


export function Cart(props) {
    const [expandItem, setExpandItem] = useState(0)
    const [token, setToken] = useState(getCookie('token'))
    console.log('cart props: ' + JSON.stringify(props)) //jwt_decode(getCookie('token'))
    console.log('token: ' + token)
    if (token) {
        console.log('decoded: ' + JSON.stringify(jwt_decode(getCookie('token'))))
    }
    const handleExpand = (cartItemID) => {
        console.log('handling expand. id: ' + JSON.stringify(cartItemID))
        if (cartItemID === expandItem) {
            setExpandItem(0)
        } else {
            setExpandItem(cartItemID)
        }
    }

    let defaultOption
    if (props.currentCartItems.flatMap(item => item.customizeOptions).find(option => (option.isDefaultOption))) {
        defaultOption = props.currentCartItems.flatMap(item => item.customizeOptions).find(option => (option.isDefaultOption)).optionID
    } else {
        defaultOption = ''
    }
    console.log('defaultOption: ' + JSON.stringify(defaultOption))
    console.log('expandItem: ' + JSON.stringify(expandItem))
    console.log('cart items: ' + JSON.stringify(props.currentCartItems))

    return (
        <Submit elevation={3} sx={{ width: 300, width: '100%', pb: 2, boxShadow: 5 }}>
            <Stack spacing={1} justifyContent={'space-between'} sx={{ minHeight: 300, minWidth: 300 }}>
                <Box>
                    <List sx={{ p: 1 }}>
                        <Stack spacing={1}>
                            {(props.currentCartItems.length === 0) &&
                                <CartItem>
                                    <Typography component={'div'} textAlign={'center'} fontWeight={500} sx={{ mt: 2 }} >{'No items added'}
                                    </Typography>
                                    <Button component={NextLinkComposed} variant='contained' to='/menu' onClick={() => props.setAnchorElCart(false)} sx={{ m: 2 }}>Go To Menu</Button>
                                </CartItem>
                            }
                            {props.currentCartItems.map(
                                foodItem => <Box key={foodItem.cartItemID}>
                                    <CartItem
                                        onClick={() => handleExpand(foodItem.cartItemID)}>
                                        <Grid container width={300} spacing={1} alignItems={'center'} sx={{ margin: '0 auto' }}>
                                            <Grid xs={10} >
                                                <Typography component={'div'} textAlign={'left'} fontWeight={500} >
                                                    {foodItem.foodName} {foodItem.customizeOptions
                                                        .find((cartItemCustomize) => (defaultOption === cartItemCustomize.optionID)) && '(' + foodItem.customizeOptions
                                                            .find((cartItemCustomize) => ((defaultOption === cartItemCustomize.optionID))).optionItems
                                                            .find(x => x).customizeOptionItem + ')'}
                                                </Typography>
                                            </Grid>
                                            <Grid xs={2}>
                                                <IconButton sx={{ border: '1px solid', boxShadow: 3, fontSize: '15px', p: 0.25 }} variant='contained' onClick={() => props.removeItem(foodItem)}>
                                                    <CloseIcon fontSize='1px' />
                                                </IconButton>
                                            </Grid>
                                            <Grid xs={12} >
                                                <ListItem disablePadding
                                                    key={foodItem.cartItemID}
                                                >
                                                    <ListItemText
                                                        primary={
                                                            (expandItem !== foodItem.cartItemID) &&
                                                            <Grid spacing={1} container>
                                                                <Grid xs={9}>
                                                                    <Typography noWrap>{
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
                                                                <Grid xs={2}>
                                                                    <Typography><FoodItemWithPrice foodItem={foodItem} /></Typography>
                                                                </Grid>
                                                            </Grid>
                                                        }
                                                    />
                                                </ListItem>
                                                <Collapse in={expandItem === foodItem.cartItemID} timeout="auto" unmountOnExit>
                                                    {foodItem.customizeOptions.map((option) => (
                                                        <List key={option.optionID} disablePadding dense>
                                                            <ListItem sx={{ bgcolor: 'background.light', boxShadow: 3, mb: 1, borderRadius: .5 }}>
                                                                <ListItemText primary={
                                                                    <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
                                                                        <Typography component={'div'} fontSize={'.75rem'} >
                                                                            <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
                                                                                <Box minWidth={75}>
                                                                                    <b>{option.optionName === foodItem.foodName ? 'Base Item: ' : option.optionName + ': '}</b>
                                                                                </Box>
                                                                                <Box fontSize={'.75rem'}>
                                                                                    {option.optionItems.map(x => x.customizeOptionItem).join(', ')}
                                                                                </Box>
                                                                            </Stack>
                                                                        </Typography>
                                                                        <Typography component={'div'} fontSize={'.75rem'}>
                                                                            <OptionsWithPrice option={option} />
                                                                            {/* {item.price !== 0 && item.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })} */}
                                                                        </Typography>
                                                                    </Stack>
                                                                } />
                                                            </ListItem>
                                                        </List>
                                                    ))}
                                                </Collapse>
                                            </Grid>
                                        </Grid>
                                    </CartItem>
                                </Box>)
                            }
                        </Stack>
                    </List>
                    {props.currentCartItems.length > 0 &&
                        <Typography component={'div'} textAlign={'center'}>
                            <GetPrice currentCartItems={props.currentCartItems} />
                        </Typography>}
                </Box>
                <Box>
                    <Typography component={'div'} textAlign={'center'} sx={{ minWidth: 200 }} >
                        {(!props.isLoggedIn && props.currentCartItems.length > 0) ?
                            <Box sx={{ pt: 3, mx: 3 }}>
                                <Typography>Create Account to Place Order</Typography>
                                <Button sx={{ mt: 1 }} variant='contained' onClick={() => { props.setIsCreate(true); props.setOpenLogin(true) }}>
                                    Create Account
                                </Button>
                            </Box>
                            :
                            (!props.userName) ?
                                <Box sx={{ width: '90%', mx: 'auto' }}>
                                    <Box>
                                        <Button variant='contained' onClick={() => { props.setIsCreate(true); props.setIsStep2(true); props.setOpenLogin(true) }}>
                                            Complete Account Creation
                                        </Button></Box>
                                </Box> :
                                props.currentCartItems.length > 0 &&
                                <Button
                                    component={NextLinkComposed}
                                    sx={{ mx: 'auto', width: '150px', display: 'block', textAlign: 'center' }}
                                    variant='contained'
                                    color='secondary'
                                    to='/order'
                                    onClick={() => { props.setAnchorElCart(null); props.handleAddOrderClick() }}>
                                    Prepare Order
                                </Button>
                        }
                    </Typography>
                </Box>
            </Stack>
        </Submit>
    )
}


{/* {foodItem.customizeOptions
                                                                //.filter((cartItemCustomize) => ((defaultOption !== cartItemCustomize.optionID)))
                                                                .map(optioner => ( //console.log(t.customizeOption + ', ' + option.optionName)
                                                                    optioner.optionItems.map(t => 
                                                                         ((t.customizeOption == optioner.optionName) ?
                                                                        <ListItem key={t.customizeOptionItemID}>
                                                                            <ListItemIcon sx={{ p: 0, m: 0 }}>
                                                                                <KebabDiningIcon fontSize='10' />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary={optioner.optionName + ' ' + t.customizeOption + ': ' + t.customizeOptionItem} sx={{ textDecorationStyle: 'solid' }} />
                                                                        </ListItem> :
                                                                        <ListItem key={t.customizeOptionItemID}>
                                                                            <ListItemIcon sx={{ p: 0, m: 0 }}>
                                                                                <KebabDiningIcon fontSize='10' />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary='hey' sx={{ textDecorationStyle: 'solid' }} />
                                                                        </ListItem>)
                                                                    
                                                                    ))
                                                                )
                                                            } */}
{/* <Stack direction={'row'}>
<Box sx={{ width: '85%' }}>
    <Typography component={'div'} textAlign={'left'} fontWeight={500} >
        {foodItem.foodName} {foodItem.customizeOptions
            .find((cartItemCustomize) => (defaultOption === cartItemCustomize.optionID)) && '(' + foodItem.customizeOptions
                .find((cartItemCustomize) => ((defaultOption === cartItemCustomize.optionID))).optionItems
                .find(x => x).customizeOptionItem + ')'}
    </Typography>
</Box>
<Box sx={{ textAlign: 'right', p: 0, fontSize: '10px', width: '15%' }}>
<IconButton sx={{ border: '1px solid', boxShadow: 3, fontSize: '15px', p: 0.25 }} variant='contained' onClick={() => props.removeItem(foodItem)}>
        <CloseIcon fontSize='1px' />
    </IconButton>
</Box>
</Stack>
<Stack direction={'row'}>
<Box>
    <ListItem disablePadding
        key={foodItem.cartItemID}
    >
        {/* <ListItemIcon>
        <KebabDiningIcon/>
        </ListItemIcon> 
        <ListItemText
            primary={
                !expandItem &&
                <Grid container width={300} spacing={1} alignItems={'center'} sx={{ margin: '0 auto' }}>
                    <Grid xs={10} >
                        <Typography >{
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
                    <Grid xs={2}>
                        <Typography sx={{mx: 'auto'}}><FoodItemWithPrice foodItem={foodItem} /></Typography>
                    </Grid>
                    
                </Grid>
            }
        />
    </ListItem>
    <Collapse in={expandItem === foodItem.cartItemID} timeout="auto" unmountOnExit>
    <List>
        {foodItem.customizeOptions
            .filter((cartItemCustomize) => ((defaultOption !== cartItemCustomize.optionID)))
            .flatMap(option => option.optionItems
                .filter((customizeOptionItem) =>
                    ((customizeOptionItem.customizeOptionItem !== option.optionName) && customizeOptionItem.customizeOptionItem)
                )
                .map(x => <ListItem disablePadding><ListItemText>{x.customizeOptionItem}</ListItemText></ListItem>))}
    </List>
    </Collapse>
</Box>
<Box>

</Box>
</Stack> */}