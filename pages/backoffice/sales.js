/* eslint-disable react/prop-types */
import Box from '@mui/material/Box'
import BarSales from '../../components/barSales';
import Head from 'next/head';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Typography } from '@mui/material';

export const getServerSideProps = async (context) => {
    if (!context.req.cookies.serverToken) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    try {
        const res = await fetch(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/Sales/Daily' : 'https://www.danspizza.dev/api/Sales/Daily', { headers: { 'Authorization': 'Bearer ' + context.req.cookies.serverToken } })
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const data = await res.json()
        console.log(data)
        return { props: { data } }
    }
    catch (error) {
        console.log('Error: ' + error.message)

    }

}

export default function Sales(props) {

    const data = props.data.sales
    console.log('manage orders rendered.')
    return (
        <Box textAlign={'center'}>
            <Head>
                <title>Sales - Dans Pizza - Order Your Virtual Pie Today!</title>
            </Head>
            <BarSales data={data} />
        </Box>
    );
}