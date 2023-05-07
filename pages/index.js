import { useState } from 'react';
//import useSWR, { preload } from 'swr';

function Header({ title }) {
  return <h1 className="header-styles">{title ? title : 'Default title'}</h1>;
}

// const fetcher = (...args) => fetch(...args).then((res) => res.json())
// preload('https://localhost:443/Coupon/Get', fetcher)
export async function getStaticProps() {
  const res = await fetch('https://localhost:443/Coupon/Get');
  const data = await res.json();
  console.log('Hi it\'s me, the server!')
  console.log('Here is your data: ' + JSON.stringify(data))
 
  return {
    props: {
      data
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

function Coupons({ data }) {
  // const { data, error } = useSWR('https://localhost:443/Coupon/Get', fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  //console.log('Here is your props data: ' + JSON.stringify(data))
  //console.log('Here is your props data: ' + JSON.stringify(props.data))
  console.log('(Index) Hey it\'s me, the client!')
  console.log('(Index) Here is your data: ' + JSON.stringify(data))

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

export default function HomePage({ data }) {
  console.log('Hey it\'s me, the client!')
  console.log('Here is your data: ' + JSON.stringify(data))

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header title="Dan's Pizza"/>
      <Blurb />
      <Coupons data={data} />
      <button onClick={handleClick}>Like ({likes})</button>
    </>
  );
}