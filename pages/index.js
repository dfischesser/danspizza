import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Navbar } from './navbar';
import Container from 'react-bootstrap/Container';

function Header({ title }) {
  return <h1 className="padding">{title ? title : 'Default title'}</h1>;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Coupons() {
  const { data, error } = useSWR('https://localhost:44302/Coupon', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  return (
    <div>
      <h3>Coupons</h3>
      <div className='coupon-container'>
        <div className='box'>
          {console.log(data)}
          {data.map((data) => (
            <p key={data.CouponID} className='coupon'>{data.couponText}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomePage({ posts }) {

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
    <Container className="main">
      <Navbar activePage="/"/>
      <Header title="Dan's Pizza"/>
      <Coupons />
      <button onClick={handleClick}>Like ({likes})</button>
      </Container>
    </>
  );
}