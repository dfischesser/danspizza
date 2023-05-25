/* eslint-disable react/prop-types */
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

export const getStaticProps = async () => {
  const res = await fetch('https://danspizza.dev/api/Coupon/Get')
  const coupons = await res.json()
  return {props: {coupons}}
}

export default function HomePage(props) {  

  return (
    <>
      <Header title="Dan's Pizza"/>
      <Blurb />
      <Coupons data={props.coupons} />
    </>
  );
}