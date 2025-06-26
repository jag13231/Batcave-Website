import React from 'react'
import './SrBanner.css'
import  Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SrBanner = () => {
   useEffect(()=>{
       Aos.init()
      },[])
  return (
    <div>
        <section className='banner'>
            <h1>Welcome to Batcave</h1>
            <p>“AN BATCAVE AUTOMOTIVE CLUB FOR PASSIONATE CAR ENTHUSIASTS<br/>THROUGH THRILLING EVENTS , EXCULSIVE CONTENT “</p>
            <button>Join Community</button>        
        </section>
      
    </div>
  )
}

export default SrBanner
