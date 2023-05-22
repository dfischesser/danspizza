/* eslint-disable react/prop-types */
import useSWR from 'swr';
import React from 'react';

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
  const { data, error } = useSWR('https://danspizza-api.azurewebsites.net/api/Coupon/Get', props.fetcher)

  if (error) {return <div>Failed to load</div>}
  if (!data) return <div>Loading...</div>


  return (
    <>
      <Header title="Dan's Pizza"/>
      <Blurb />
      <Coupons data={data} />
    </>
  );
}