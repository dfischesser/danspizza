import { useState } from 'react';
import useSWR, { preload } from 'swr';

function Header({ title }) {
  return <h1 className="header-styles">{title ? title : 'Default title'}</h1>;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())
preload('https://localhost:44302/Coupon/Get', fetcher)

function Coupons() {
  const { data, error } = useSWR('https://localhost:44302/Coupon/Get', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  return (
    <div>
      <h3>Coupons</h3>
      <div className='coupon-container'>
        <div className='box'>
          {data.couponList.map((data) => (
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

export default function HomePage({ posts }) {

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header title="Dan's Pizza"/>
      <Blurb />
      <Coupons />
      <button onClick={handleClick}>Like ({likes})</button>
    </>
  );
}