/* eslint-disable react/prop-types */
import { OrderMap } from '../components/orderMap'
import { GetPrice } from '../components/getPrice'
import { useState } from 'react';
import { fetchy } from '../components/fetchy'
import Link from 'next/link'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

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
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fafaf5',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  }));

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

export function PostOrder(props) {
    const formatData = {orderItems: props.currentCartItems.map(item => ({orderItem: item}))}
    const test = props.currentCartItems
    console.log('formatted order data: ' + JSON.stringify(test) + '. cookie: ' + getCookie('token'))
    const token = getCookie('token')
    const headers = {'Content-Type': 'application/json'}
    console.log('headers: ' + JSON.stringify(headers))
    fetchy('http://localhost:18080/api/Order/Post', 'POST', test, headers)
        .then((data) => {
            console.log('handleFetch data: ' + JSON.stringify(data)) 
            props.setOrderPosted(false)
            props.setOrderPlaced(true)
            props.setHasOrder(false)
            props.removeAllItems()
        })
        .catch((error) => {
            //console.log('handleFetch error: ' + JSON.stringify(JSON.parse(error.message).errors))
            //console.log('handleFetch error: ' + JSON.parse(error.message).errors)
            console.log('handleFetch error: ' + error)
            props.setOrderPosted(false)
            //props.setError(JSON.stringify(JSON.parse(error.message).errors))
        })
}

export const getServerSideProps = async (context) => {
    console.log('server token:' + context.req.cookies.token)
    try {
        const res = await fetch('http://localhost:18080/api/User/Account', { headers: {'Authorization': 'Bearer ' + context.req.cookies.token}})
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const user = await res.json()
        console.log('user: ' + JSON.stringify(user))
        return {props: {user}}
    }
    catch (error) {
        console.log('Error: ' + error.message)
    }

}

function FoodItemWithPrice(props) {
    console.log('fooditemwithprice foodItem: ' + JSON.stringify(props))
    const price =  props.FoodItem.customizeOptions.map(cartOption => cartOption.optionItems.reduce((a, b) => (a + b.price), 0)).reduce((a, b) => (a + b), 0)
    return price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })
}

export default function Order(props) {
    
    const [orderPosted, setOrderPosted] = useState(false)
    const [error, setError] = useState(false)
    const [orderPlaced, setOrderPlaced] = useState(false)
    const [expandItem, setExpandItem] = useState(false)
    console.log('orderPlaced: ' + orderPlaced)
    console.log('order cart items: ' + JSON.stringify(props.currentCartItems))
    console.log('user: ' + JSON.stringify(props.user))

    let defaultOption
    if (props.currentCartItems.flatMap(item => item.customizeOptions).find(option => (option.isDefaultOption))) {
        defaultOption = props.currentCartItems.flatMap(item => item.customizeOptions).find(option => (option.isDefaultOption)).optionID
    } else {
        defaultOption = ''
    }

    return (
        <Grid container rowSpacing={1} columnSpacing={2} alignItems={'center'}>
            <Grid xs={12} textAlign={'center'}>
            <Header title={orderPlaced ? 'Order Placed' : 'Order'}/>
            </Grid>
            <Grid xs={12} textAlign={'center'}>
            <TableContainer component={Paper} sx={{width: '100%', mx: 'auto', mb: 5, maxWidth: 400, bgcolor: '#fafaf5'}}>
                <Table size='small'>
                    <TableBody>
                    <TableRow>
                        <TableCell>Name:</TableCell>
                        <TableCell>{props.user.firstName} {props.user.lastName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email:</TableCell>
                        <TableCell>{props.user.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Phone:</TableCell>
                        <TableCell>{props.user.phone}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Address:</TableCell>
                        <TableCell>{props.user.address1} {props.user.address2}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Locale:</TableCell>
                        <TableCell>{props.user.city}, {props.user.state} {props.user.zip}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table> 
                </TableContainer>
            </Grid>
            <Grid xs={12} sm={6} sx={{mx: 'auto'}}>
            <Stack spacing={1} justifyContent={'space-between'}>
                    <Box>
                        <List sx={{p: 1}}>
                        <Stack spacing={1}>
                        {props.currentCartItems.map(
                                foodItem => <Box key={foodItem.cartItemID}>
                                <CartItem
                                    onClick={() => setExpandItem(!expandItem)}>
                                        <Box>
                                            <Typography component={'div'} textAlign={'center'} fontWeight={500} >
                                                {foodItem.foodName} {foodItem.customizeOptions
                                                                    .find((cartItemCustomize) => (defaultOption === cartItemCustomize.optionID)) && '(' + foodItem.customizeOptions
                                                                    .find((cartItemCustomize) => ((defaultOption === cartItemCustomize.optionID))).optionItems
                                                                    .find(x=>x).customizeOptionItem + ')'}
                                            </Typography>
                                        </Box>
                                    <ListItem disablePadding
                                        key={foodItem.cartItemID} 
                                    >
                                        <ListItemText  
                                            primary={ 
                                                    <Grid container rowSpacing={1} columnSpacing={2} alignItems={'center'} sx={{margin: '0 auto'}}>
                                                        <Grid xs={10} >
                                                            <Typography noWrap={expandItem}>{
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
                                            secondaryTypographyProps={{component: 'div'}}
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
                    </Box>
                </Stack>
            </Grid>
            
            <Grid xs={12} textAlign={'center'}>
                {!orderPlaced && <GetPrice currentCartItems={props.currentCartItems} customizeData={props.customizeData} isOrderPage={true} />}
                {!orderPlaced && (orderPosted ?
                    <Typography textAlign={'center'} sx={{minWidth: 200, my: 3}} >
                        <Button disabled sx={{mx: 1}} variant='contained'>
                        Place Order
                        </Button>
                    </Typography> :
                    <Typography textAlign={'center'} sx={{minWidth: 200, my: 3}} >
                        <Button onClick={() => setOrderPosted(true)} sx={{mx: 1}} variant='contained'>
                        Place Order
                        </Button>
                    </Typography>)}
                {orderPosted &&
                    <PostOrder 
                        currentCartItems={props.currentCartItems} 
                        setError={(error) => setError(error)} 
                        setOrderPosted={(data) => setOrderPosted(data)} 
                        setOrderPlaced={(data) => setOrderPlaced(data)}
                        setHasOrder={(data) => props.setHasOrder(data)}
                        removeAllItems={() => props.removeAllItems()}
                    />}
                {error && <div>{error}</div>}
                {orderPlaced && 
                    <Box sx={{my: 3}}>
                        <Typography>
                            Thank you for your order, {props.user.firstName}!<br/>
                            You can view your order status on your <Link href='/account' >account</Link> page.
                        </Typography>
                    </Box>}
            </Grid>
        </Grid> 
    )
}