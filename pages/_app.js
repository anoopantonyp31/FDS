import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';


function MyApp({ Component, pageProps }) {
  return (
    <div className="container-fluid">
    <HeaderComponent></HeaderComponent>
    <Component {...pageProps} />
    </div>
 
   

  
  )
}

export default MyApp
