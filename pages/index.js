/* eslint-disable react/prop-types */
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

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

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5753/api/Coupon/Get')
  const coupons = await res.json()
  //const coupons = {"couponList":[{"couponID":1,"couponText":"Large Pizza and 2-Liter Coke for $20"},{"couponID":2,"couponText":"Two Calzones for $15"}]}
  return {props: {coupons}}
}


export default function HomePage(props) {  


  console.log('index rendered.')
  return (
    <Grid container rowSpacing={1} columnSpacing={2} alignItems={'center'} sx={{mx: 'auto', textAlign:'center'}}>
      <Grid xs={12} >
        <Header title="Dan's Pizza"/>
      </Grid>
      <Grid xs={12} >
        <Blurb />
      </Grid>
    </Grid>
  );
}