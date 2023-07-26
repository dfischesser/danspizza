/* eslint-disable react/prop-types */
import { useRouter } from 'next/navigation';
import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FormatOrders } from '../components/FormatOrders'


function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
  }

export const getServerSideProps = async (context) => {
    if (!context.req.cookies.token) {
        return {
            redirect: {
              destination: '/',
              permanent: false,
            },
          }
    }

    try {
        const res = await fetch(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/User/Account' : 'https://danspizza-api.azurewebsites.net/api/User/Account', { headers: {'Authorization': 'Bearer ' + context.req.cookies.token}})
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const user = await res.json()
        console.log(user)
        return {props: {user}}
    }
    catch (error) {
        console.log('Error: ' + error.message)
        
    }

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
          <Box sx={{ p: 3}}>
            {children}
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

export default function Account(props) {
    const user = props.user
    //console.log('user: ' + JSON.stringify(user))
    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    console.log('account orderCount: ' + user.orderCount)

    return (
        <Box sx={{textAlign: 'center'}}>
            <Header title="Account"/>
                <TableContainer component={Paper} sx={{width: '100%', mx: 'auto', mb: 5, maxWidth: 400}}>
                <Table size='small' sx={{bgcolor: 'background.lightest'}}>
                    <TableBody>
                    <TableRow>
                        <TableCell>Name:</TableCell>
                        <TableCell>{user.firstName} {user.lastName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email:</TableCell>
                        <TableCell>{user.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Phone:</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Address:</TableCell>
                        <TableCell>{user.address1} {user.address2}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Locale:</TableCell>
                        <TableCell>{user.city}, {user.state} {user.zip}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table> 
                </TableContainer>
            <div>
            <Box sx={{ width: '100%', mx: 'auto', px:5}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Active Orders" {...a11yProps(0)} />
                    <Tab label="Past Orders" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <Box sx={{ mx: 'auto', width: '100%' }}>
                    <TabPanel value={value} index={0}>
                        <FormatOrders userOrders={user.activeOrders} active={true} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <FormatOrders userOrders={user.pastOrders} active={false} orderCount={user.orderCount} />
                    </TabPanel>
                </Box>
            </Box>
            </div>
        </Box> 
    )
    {/* <div className='order-list'>
                            {user.activeOrders.map(order => 
                            <div className='account-order-item' key={order.orderID}> OrderID: {order.orderID} Date: {getOrderDate(order.created)}
                                    <div>Food: {order.foodItems.map(foodItem =>
                                        <div className='account-item' key={foodItem.orderItemID}>
                                            {foodItem.foodName} 
                                            <div>{foodItem.customizeOptions.map(option =>
                                                <div className='account-item' key={option.optionName}>
                                                    Option: {option.optionName}
                                                    {option.optionItems.map((optionItem) =>
                                                        <div className='account-item' key={optionItem.customizeOptionItem}>
                                                            <div>{optionItem.customizeOptionItem} {optionItem.price}</div>
                                                        </div>
                                                        )}
                                                </div>
                                            )}</div>
                                        </div>
                                    )}</div>
                            </div>
                                )}
        </div> */}
}

