/* eslint-disable react/prop-types */
import Box from '@mui/material/Box'
import { FormatOrders } from '../../components/FormatOrders'

function Header({ title }) {
  return <h1 className="header-styles">{title ? title : 'Default title'}</h1>;
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

export const getServerSideProps = async (context) => {
    //console.log('server token:' + context.req.cookies.token)
    try {
        const res = await fetch('http://localhost:5753/api/Order/Latest', { headers: {'Authorization': 'Bearer ' + context.req.cookies.token}})
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const orders = await res.json()
        console.log('active orders: ' + JSON.stringify(orders))
        return {props: {orders}}
    }
    catch (error) {
        console.log('Error: ' + error.message)
    }

}


export default function Manage(props) {  
    console.log('manage orders rendered.')
    return (
    <div>
        <Header title="Manage Orders"/>
        <Box sx={{ mx: 'auto', width: '100%' }}>
            <FormatOrders userOrders={props.orders.activeOrders} orderCount={props.orders.orderCount} manage={true} />
        </Box>
    </div>
  );
}