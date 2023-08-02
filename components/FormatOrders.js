import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { getCookie } from '../components/getCookie';
import { fetchy } from '../components/fetchy';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { CleaningServices } from '@mui/icons-material';


function getOrderDate(order) {
    //console.log('getorderdate orderID: ' + order.orderID)
    let getOrderDate = order.created
    //console.log('getorderdate created: ' + order.created)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    let date = new Date(getOrderDate + 'Z')
    let dateDiff = new Date(Date.now())
    //console.log('datediff: ' + dateDiff)
    dateDiff = dateDiff - date
    let days = Math.floor((dateDiff / (1000 * 60 * 60 * 24)))
    //console.log('days: ' + days)
    let hours = Math.floor((dateDiff / (1000 * 60 * 60)))
    //console.log('hours: ' + hours)
    let minutes = Math.floor((dateDiff / (1000 * 60)))
    //console.log('minutes: ' + minutes)
    if (days > 7) {
        return date.toLocaleDateString('us-US', options)
    } else if (days > 0) {
        return days === 1 ? days + ' day ago' : days + ' days ago'
    } else if (hours > 0) {
        return hours === 1 ? hours + ' hour ago' : hours + ' hours ago'
    } else if (minutes > 0) {
        return minutes === 1 ? minutes + ' minute ago' : minutes + ' minutes ago'
    }
    return 'seconds ago'
}

export function OrderPageStatus(props) {
    console.log('page: ' + props.page)
    console.log('manage: ' + props.manage)
    let url
    if (props.manage) {
        url = process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/Order/OrderPage' : 'https://www.danspizza.dev/api/Order/OrderPage'
    } else {
        url = process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/User/OrderPage' : 'https://www.danspizza.dev/api/Order/OrderPage'
    }
    const headers = { 'Content-Type': 'application/json' }
    fetchy(url, 'POST', props.page, headers)
        .catch((error) => {
            console.log('API error: ' + error.message)
            //console.log('API error: ' + JSON.parse(error.message).message)
            //props.setError('API error: ' + JSON.parse(error.message).message)
            props.setOrderPagePosted(false)
        })
        .then((data) => {
            console.log('data: ' + JSON.stringify(data))
            props.setOrders(data)
            console.log('data end: ' + JSON.stringify(data))
            props.setOpen(data.map((order) => ({ isOpen: false, orderID: order.orderID })))
            props.setOrderPagePosted(false)
        })
        .catch((error) => {
            console.log('React fetch error: ' + error)
            props.setError('React fetch error: ' + error.message)
            props.setOrderPagePosted(false)
        })
}

export function PostFulfill(props) {
    const headers = { 'Content-Type': 'application/json' }
    fetchy(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/Order/Fulfill' : 'https://www.danspizza.dev/api/Order/Fulfill', 'POST', props.fulfillPosted, headers)
        .catch((error) => {
            console.log('API error: ' + error.message)
            //console.log('API error: ' + JSON.parse(error.message).message)
            //props.setError('API error: ' + JSON.parse(error.message).message)
            props.setFulfillPosted(false)
        })
        .then((newOrders) => {
            console.log('handleFetch order count: ' + JSON.stringify(newOrders))
            props.setOpen(newOrders.activeOrders.map((order) => ({ isOpen: false, orderID: order.orderID })))
            props.setFulfillPosted(false)
            props.setOrders(newOrders.activeOrders)
            props.setOrderCount(newOrders.orderCount)
            console.log('orders length:' + newOrders.orderCount)
            return newOrders
        })
        .catch((error) => {
            console.log('React fetch error: ' + error)
            props.setError('React fetch error: ' + error.message)
            props.setFulfillPosted(false)
        })
}

export function FormatOrders({ userOrders, active, incOrderCount, manage }) {
    //console.log('orders: ' + JSON.stringify(userOrders))
    const [open, setOpen] = useState(userOrders.map((order) => ({ isOpen: false, orderID: order.orderID })))
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [page, setPage] = useState(1);
    const [orderPagePosted, setOrderPagePosted] = useState(false)
    const [error, setError] = useState(null)
    const [orders, setOrders] = useState(userOrders)
    const [fulfillPosted, setFulfillPosted] = useState(false)
    const [orderCount, setOrderCount] = useState(incOrderCount)

    console.log('order count: ' + orderCount)

    function handleFulFill(orderID) {
        setSelectedIndex(orderID)
        setFulfillPosted(orderID)
    }

    function handleClick(e, orderID) {
        console.log('food: ' + orderID)
        console.log('open: ' + JSON.stringify(open)) //
        setSelectedIndex(orderID);
        setOpen(open.map((item) =>
        (item.orderID === orderID ?
            { ...item, isOpen: item.isOpen = !item.isOpen } :
            { ...item, isOpen: item.isOpen = item.isOpen })
        )
        )
    }
    const handlePageChange = (event, value) => {
        setPage(value);
        setOrderPagePosted(true);
    };

    //console.log('formatorder orders: ' + JSON.stringify(orders))

    return (

        <Paper elevation={5} sx={{ mx: {sm: 2, md: 15}, mb:3 }}>
            <List
                sx={{ bgcolor: 'background.beige', p: 2 }}
                component="div"
                aria-labelledby="nested-list-subheader"
                disablePadding
            >
                {(orderPagePosted) ? 
                    <Box sx={{ width: '100%', height: '600px', top: '50%', transform: 'translateY(+50%)' }}>
                        <Box>
                            <CircularProgress />
                        </Box>
                    </Box> :
                            orders.map(order =>
                                <Box key={order.orderID} sx={fulfillPosted ? {pointerEvents: 'none'} : {}}>
                                    {(selectedIndex === order.orderID && fulfillPosted) ?
                                        <Skeleton variant="rounded" width='100%' height='95px' sx={{ mt: 2 }} /> :
                                        <>
                                            <ListItemButton
                                                sx={selectedIndex === order.orderID ? { boxShadow: 1, borderRadius: 1, mt: 2 } : { boxShadow: 3, borderRadius: 1, mt: 2, bgcolor: 'background.lightest' }}
                                                selected={selectedIndex === order.orderID}
                                                onClick={(e) => handleClick(e, order.orderID)}
                                                component="div"
                                            >
                                                <ListItemText
                                                    className='account-item'
                                                    primary={
                                                        <Grid container>
                                                            <Grid xs={9} md={10}>
                                                                <Box sx={{ my: 'auto' }}>
                                                                    {getOrderDate(order)}
                                                                </Box>
                                                            </Grid>
                                                            {manage &&
                                                            <Grid xs={3} md={1}>
                                                                    <Button disabled={fulfillPosted !== false} variant="contained" onClick={(e) => { e.stopPropagation(); handleFulFill(order.orderID) }}>Fulfill</Button>
                                                            </Grid>}
                                                        </Grid>
                                                    }
                                                    secondary={
                                                        <Grid container>
                                                            <Grid xs={9}>
                                                            <Box className='account-item' textAlign={'left'}>
                                                            <b>{order.totalPrice.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</b> - {order.foodItems.map(foodItem => (foodItem.foodName)).join(', ')}
                                                             </Box>
                                                            </Grid>
                                                            <Grid xs={3}>
                                                                 <Box sx={{ my: 'auto', display: {xs: 'none', md: 'block'}}}>
                                                                 <b>{order.account.firstName}</b>: {order.account.phone}
                                                             </Box>
                                                            </Grid>
                                                        </Grid>
                                                    }
                                                    secondaryTypographyProps={{component:'div', mt:1}}
                                                />
                                            </ListItemButton>
                                            <Collapse in={open.find((state) => (state.orderID == order.orderID)).isOpen} timeout="auto" unmountOnExit>
                                                <List component="div">
                                                    {manage &&
                                                    
                                                    <Box
                                                    sx={{ mt: 1, ml: 2, width: '95%', boxShadow: 3, borderRadius: 1, backgroundColor: '#f2f2ed' }}
                                                >
                                                        <ListItem>
                                                            <ListItemText primary={
                                                                <Grid container textAlign={'center'}>
                                                                    <Grid xs={6} md={1}>
                                                                        <Typography sx={{fontWeight: 700}}>ID</Typography>
                                                                        <Typography>{order.account.userID}</Typography>
                                                                    </Grid>
                                                                    <Grid xs={6} md={3}>
                                                                        <Typography sx={{fontWeight: 700}}>Name</Typography>
                                                                        <Typography>{order.account.firstName} {order.account.lastName}</Typography>
                                                                    </Grid>
                                                                    <Grid xs={6} md={4}>
                                                                        <Typography sx={{fontWeight: 700}}>Phone</Typography>
                                                                        <Typography sx={{
                                                                            whiteSpace: 'nowrap',
                                                                            overflow: 'auto hidden',
                                                                            '&::-webkit-scrollbar': { height: 10, WebkitAppearance: 'none' },
                                                                            '&::-webkit-scrollbar-thumb': {
                                                                                borderRadius: 8,
                                                                                border: '2px solid',
                                                                                borderColor: 'background.lightest',
                                                                                backgroundColor: 'background.beige',
                                                                            }
                                                                        }} >
                                                                            {order.account.phone}
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid xs={6} md={4}>
                                                                        <Typography sx={{fontWeight: 700}}>Email</Typography>
                                                                        <Typography sx={{
                                                                            overflow: 'auto hidden',
                                                                            '&::-webkit-scrollbar': { height: 10, WebkitAppearance: 'none' },
                                                                            '&::-webkit-scrollbar-thumb': {
                                                                                borderRadius: 8,
                                                                                border: '2px solid',
                                                                                borderColor: 'background.lightest',
                                                                                backgroundColor: 'background.beige',
                                                                            }
                                                                        }} >
                                                                            {order.account.email}
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            }
                                                            />
                                                        </ListItem>
                                                        </Box>
                                                    }
                                                    {order.foodItems.map((foodItem, index) =>
                                                    (
                                                        <Box
                                                            key={foodItem.orderItemID}
                                                            sx={(index % 2 === 1) ?
                                                                { mt: 1, ml: 2, width: '95%', boxShadow: 3, borderRadius: 1, backgroundColor: '#f2f2ed' } :
                                                                { mt: 1, ml: 2, width: '95%', boxShadow: 3, borderRadius: 1, backgroundColor: '#f0f2e6' }}
                                                        >
                                                            <ListItem
                                                                sx={{ pl: 3, py: 2 }} >
                                                                <ListItemText
                                                                    className='account-item'
                                                                    primary={
                                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                            <div>{foodItem.foodName}</div>
                                                                            <div>{foodItem.price && foodItem.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</div>
                                                                        </Box>
                                                                    }
                                                                    secondary={
                                                                        <Box >
                                                                            {foodItem.customizeOptions.map(option =>
                                                                                <div key={option.orderItemOptionID} className='option-group'>
                                                                                    <div className='option-name'>
                                                                                        {option.optionName + ': '}
                                                                                    </div>
                                                                                    <div className='option-items'>
                                                                                        {option.optionItems.map(x => x.customizeOptionItem).join(', ')}
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </Box>
                                                                    }
                                                                    secondaryTypographyProps={{ component: 'div' }}
                                                                />
                                                            </ListItem>
                                                        </Box>
                                                    )
                                                    )
                                                    }
                                                </List>
                                            </Collapse>
                                        </>
                                    }
                                </Box>

                            )
                }

                {(orders.length === 0 && active) &&
                    <ListItemButton sx={{ boxShadow: 3, borderRadius: 1, mx: 2, my: 2, bgcolor: 'background.lightest' }}>
                        <ListItemText primary={
                            <Typography>
                                {'No Active Orders'}
                            </Typography>
                        } />

                    </ListItemButton>}
                {(orders.length === 0 && !active) &&
                    <ListItemButton sx={{ boxShadow: 3, borderRadius: 1, mx: 2, mt: 2, bgcolor: 'background.lightest' }}>
                        <ListItemText primary={
                            <Typography>
                                {'No Past Orders'}
                            </Typography>
                        } />

                    </ListItemButton>}
                {(!active && orderCount > 5) &&
                    <Pagination sx={{ mt: 1 }} count={Math.ceil(orderCount / 5)} page={page} onChange={handlePageChange} />}

            </List>
            <Box>
                {orderPagePosted &&
                    <OrderPageStatus
                        page={page}
                        setOrders={(data) => setOrders(data)}
                        setOpen={(data) => setOpen(data)}
                        setError={(error) => setError(error)}
                        setOrderPagePosted={(data) => setOrderPagePosted(data)}
                        manage={manage}
                    />}
                {fulfillPosted &&
                    <PostFulfill
                        setError={(error) => setError(error)}
                        setOpen={(data) => setOpen(data)}
                        fulfillPosted={fulfillPosted}
                        setFulfillPosted={(data) => setFulfillPosted(data)}
                        setOrders={(data) => setOrders(data)}
                        setOrderCount = {(data) => setOrderCount(data)}
                    />}
                {error && <div>{error}</div>}
            </Box>
        </Paper>

    )
}