import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { getCookie } from '../components/getCookie';
import { fetchy } from '../components/fetchy';
import Button from '@mui/material/Button';


function getOrderDate(order) {
    //console.log('getorderdate orderID: ' + order.orderID)
    let getOrderDate = order.created
    //console.log('getorderdate created: ' + order.created)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    let date = new Date(getOrderDate + 'Z')
    //console.log('input date: ' + getOrderDate)
    // console.log('js date string: ' + getOrderDate)
    // console.log('js date string UTC: ' + getOrderDate + 'Z')
    // console.log('js date: ' + new Date(getOrderDate))
    // console.log('js date UTC: ' + new Date(getOrderDate + 'Z'))
    // console.log('js date to utc string: ' + date.toUTCString())
    // console.log('utc string to local: ' + (new Date(date.toUTCString())))
    let dateDiff = new Date(Date.now())
    //console.log('datediff: ' + dateDiff)
    dateDiff = dateDiff - date
    let days = Math.floor((dateDiff / (1000*60*60*24)))
    //console.log('days: ' + days)
    let hours = Math.floor((dateDiff / (1000*60*60)))
    //console.log('hours: ' + hours)
    let minutes = Math.floor((dateDiff / (1000*60)))
    //console.log('minutes: ' + minutes)
    if (days > 7) {
        return date.toLocaleDateString('us-US', options)
    } else if (days > 0) {
        return days === 1 ? days + ' day ago' :  days + ' days ago'
    } else if (hours > 0) {
        return hours === 1 ? hours + 'hour ago' : hours + ' hours ago'
    } else if (minutes > 0) {
        return minutes === 1 ? minutes + 'minute ago' : minutes + ' minutes ago'
    }
    return 'seconds ago'
  }

  export function OrderPageStatus(props) {
    console.log('page: ' + props.page)
    console.log('manage: ' + props.manage)
    let url
    if (props.manage) {
        url = 'http://localhost:5753/api/Order/OrderPage'
    } else {
        url = 'http://localhost:5753/api/User/OrderPage'
    }
    const headers = {'Content-Type': 'application/json','Authorization': 'Bearer ' + getCookie('token')}
        fetchy(url, 'POST', props.page, headers)
        .catch((error) => {
                console.log('API error: ' + error.message)
                console.log('API error: ' + JSON.parse(error.message).message)
                props.setError('API error: ' + JSON.parse(error.message).message)
                props.setOrderPagePosted(false)
        })
        .then((data) => {
                console.log('data') 
                console.log('data: ' + JSON.stringify(data)) 
                props.setOrders(data)
                console.log('data end: ' + JSON.stringify(data)) 
                props.setOpen(data.map((order) => ({isOpen: false, orderID: order.orderID})))
                props.setOrderPagePosted(false)
                console.log('data end: ' + JSON.stringify(data)) 
        })
        .catch((error) => {
            console.log('React fetch error: ' + error)
            props.setError('React fetch error: ' + error.message)
            props.setOrderPagePosted(false)
        })
}

export function PostFulfill(props) {
    const headers = {'Content-Type': 'application/json','Authorization': 'Bearer ' + getCookie('token')}
    fetchy('http://localhost:5753/api/Order/Fulfill', 'POST', props.fulfillPosted, headers)
    .catch((error) => {
            console.log('API error: ' + error.message)
            console.log('API error: ' + JSON.parse(error.message).message)
            props.setError('API error: ' + JSON.parse(error.message).message)
            props.setFulfillPosted(false)
    })
        .then((newOrders) => {
            console.log('handleFetch data: ' + JSON.stringify(newOrders)) 
            props.setOpen(newOrders.map((order) => ({isOpen: false, orderID: order.orderID})))
            props.setFulfillPosted(false)
            props.setOrders(newOrders)
            return newOrders
        })
        .catch((error) => {
            console.log('React fetch error: ' + error)
            props.setError('React fetch error: ' + error.message)
            props.setFulfillPosted(false)
        })
}

export function FormatOrders({userOrders, active, orderCount, manage}) {
    //console.log('orders: ' + JSON.stringify(userOrders))
    const [open, setOpen] = useState(userOrders.map((order) => ({isOpen: false, orderID: order.orderID})))
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [page, setPage] = useState(1);
    const [orderPagePosted, setOrderPagePosted] = useState(false)
    const [error, setError] = useState(null)
    const [orders, setOrders] = useState(userOrders)
    const [fulfillPosted, setFulfillPosted] = useState(false)

    function handleFulfill(orderID) {
        setFulfillPosted(orderID)
    }

    function handleClick(e, orderID) {
        console.log('food: ' + orderID)
        console.log('open: ' + JSON.stringify(open))
        console.log('selected: ' + JSON.stringify(selectedIndex))
        setSelectedIndex(orderID);
        setOpen(open.map((item) => 
            (item.orderID === orderID ? 
                {...item, isOpen: item.isOpen = !item.isOpen} : 
                {...item, isOpen: item.isOpen = item.isOpen})
            )
        )
    }
    const handlePageChange = (event, value) => {
        setPage(value);
        setOrderPagePosted(true);
      };
    
    //console.log('formatorder orders: ' + JSON.stringify(orders))

return (
    <>
    <List
    sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', mx: 'auto' }}
    component="div"
    aria-labelledby="nested-list-subheader"
    >
        {orders && orders.map(order => 
            <Box key={order.orderID}>
                <ListItem 
                 component="div" 
                disablePadding
                secondaryAction={
                    manage && 
                        <Box>
                            <Button onClick={() => setFulfillPosted(order.orderID)} variant="contained">Fulfill</Button>
                        </Box>
                    
                }
                >
                <ListItemButton sx={{ height: '100%', boxShadow: 3, borderRadius: 2, mt: 2 }} selected={selectedIndex === order.orderID} onClick={(e) => handleClick(e, order.orderID)}>
                    <ListItemText
                    className='account-item' 
                    primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', pr: 3 }}>
                            <div>
                                {getOrderDate(order)}
                            </div>
                            <div>
                                {order.totalPrice.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}
                            </div>
                        </Box>
                    } 
                    secondary={
                        <>
                            <div className='account-item'>
                                {order.foodItems.map(foodItem => (foodItem.foodName)).join(', ')}
                            </div>
                            
                        </>
                    } 
                    primaryTypographyProps={{sx:{display: 'flex', justifyContent: 'space-between', mr: 2}}}
                    secondaryTypographyProps={{sx:{display: 'flex', justifyContent: 'space-between', mr: 2}, component: 'div'}} 
                    />
                    {open.find((state) => (state.orderID == order.orderID)).isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                </ListItem>
                <Collapse in={open.find((state) => (state.orderID == order.orderID)).isOpen} timeout="auto" unmountOnExit>
                    <List component="div">
                        {order.foodItems.map((foodItem, index) =>  
                            (
                                <Box 
                                    key={foodItem.orderItemID} 
                                    sx={(index % 2 === 1) ? 
                                        { mt: 1, ml: 2, width: '95%', boxShadow: 3, borderRadius: 2, backgroundColor: '#f2f2ed'} : 
                                        { mt: 1, ml: 2, width: '95%', boxShadow: 3, borderRadius: 2, backgroundColor: '#f0f2e6'}} 
                                >
                                    <ListItem
                                        sx={{ pl: 3, py: 2 }} >
                                    <ListItemText 
                                        className='account-item' 
                                        primary={
                                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
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
                                        secondaryTypographyProps={{component: 'div'}} 
                                    />
                                </ListItem>
                            </Box>
                            )
                        )
                        }
                    </List>
                </Collapse>
            </Box>
        )}
        {!active &&
            <Pagination count={Math.ceil(orderCount/5)} page={page} onChange={handlePageChange} />
        }
    </List>
    <div>
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
            />}
        {error && <div>{error}</div>}
    </div>
    {error && <div>{error}</div>}
    </>
    )
}