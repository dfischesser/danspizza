// index.html
import { useState } from 'react';
import useSWR from 'swr';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Profile() {
  const {data, error } = useSWR('https://localhost:44302/WeatherForecast', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  return (
    <div>
      <p>Date: {data[0].date}</p>
      <p>Weather: {data[0].summary}</p>
    </div>
  )
}

// // This function gets called at build time
// export async function getServerSideProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://api.publicapis.org/entries')
//   //const res = await fetch('https://localhost:44302/WeatherForecast')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

function jsAJAX() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {

    let response = JSON.parse(this.responseText);
    document.getElementById("data").innerHTML = this.responseText;
    //response = response.entries[0];

    //document.getElementById("data").innerHTML = "API: " + response.API + "<br>Description: " + response.Description;
    }
  xhttp.open("GET", "https://localhost:44302/WeatherForecast", true);
  xhttp.send();
}

export default function HomePage({posts}) {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Pizza Shop" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      {/* <p id="data">{posts.count}</p> */}
      <Profile />
      <button onClick={handleClick}>Like ({likes})</button>
      <button onClick={jsAJAX}>AJAX BABY</button>
    </div>
  );
}