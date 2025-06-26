import React from 'react'
import './SrNews.css'
import Blogimg1 from "../../Assets/blog1.png";
import Blogimg2 from "../../Assets/blog2.png";
import {FaRegClock , FaMapMarkerAlt ,FaRegCalendarAlt } from 'react-icons/fa';

const SrNews = () => {
  return (
    <div>
      <section className='blog'>
        <h1>LATEST NEWS <span>& BLOGS</span> </h1>
        <div className="blog-container">
            <div className="img-box">
                <img src={Blogimg1} alt=""  />
            </div>
            <div className="txt-box">
                <h3>The Ultimate Car Club Experience</h3>
                <ul>
                    <li><FaRegCalendarAlt  className='icon'/>02 July , 2025</li>
                    <li> <FaRegClock className='icon'/>10.00 PM</li>
                    <li><FaMapMarkerAlt className='icon'/>ECR</li>
                </ul>
                <p>A compelling introduction to Batcave, emphasizing its core ethos: “not for possession, but for passion.” 
                    It details how the club connects automotive enthusiasts across South India—from seasoned owners to gearhead .</p>
            </div>            
        </div>
         <div className="blog-container">
            <div className="txt-box">
                <h3>The Ultimate Car Club Experience</h3>
                 <ul>
                    <li><FaRegCalendarAlt  className='icon'/>02 July , 2025</li>
                    <li> <FaRegClock className='icon'/>10.00 PM</li>
                    <li><FaMapMarkerAlt className='icon'/>ECR</li>
                </ul>

                <p>A compelling introduction to Batcave, emphasizing its core ethos: “not for possession, but for passion.” 
                    It details how the club connects automotive enthusiasts across South India—from seasoned owners to gearhead .</p>
            </div> 
            <div className="img-box">
                <img src={Blogimg2} alt="" />
            </div>           
        </div>
      </section>
    </div>
  )
}

export default SrNews
