/* eslint-disable react/prop-types */
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box'
import jwtDecode from 'jwt-decode';
import { useState, useEffect } from 'react';
import { getCookie } from '../components/getCookie';

function Header({ title }) {
  return <h1 className="header-styles">{title ? title : 'Default title'}</h1>;
}

function Coupons(props) {

  return (
    <div>
      <h3>Coupons</h3>
      <div className='coupon-container'>
        <div className='box'>
          {props.data.couponList.map((data) => (
            <p key={data.couponID} className='coupon'>{data.couponText}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

function Blurb() {
  return (
    <p className='blurb'> Welcome! Check out our menu!</p>
  )
}

export default function HomePage(props) {
  console.log('index rendered. all props: ' + JSON.stringify(props))
  return (
    <Box sx={{ minHeight: 450 }}>
      <Grid container rowSpacing={1} columnSpacing={2} alignItems={'center'} sx={{ mx: 'auto', textAlign: 'center' }}>
        <Grid xs={12} >
          <Header title="Dan's Pizza" />
        </Grid>
        <Grid xs={12} >
          <Blurb />
        </Grid>
      </Grid>
    </Box>
  );
}