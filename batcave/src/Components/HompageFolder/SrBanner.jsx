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
        <section className='banner'  data-aos="zoom-in" data-aos-duration="1000">
            <h1 data-aos="zoom-in-up" data-aos-duration="1200">Welcome to Batcave</h1>
            <p data-aos="zoom-out" data-aos-duration="1500">“AN BATCAVE AUTOMOTIVE CLUB FOR PASSIONATE CAR ENTHUSIASTS<br/>THROUGH THRILLING EVENTS , EXCULSIVE CONTENT “</p>
            <button data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Join Community</button>        
        </section>
      
    </div>
  )
}

export default SrBanner
