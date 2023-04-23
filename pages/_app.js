// pages/_app.js
import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} />
  </>
  )
}