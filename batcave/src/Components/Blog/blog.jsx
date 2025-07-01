import React from 'react'
import './Blog.css'
import blogimage from '../../Assets/blogimage.png'
import { LuCalendarDays, LuClock, LuLocate } from "react-icons/lu";

function blog() {
  return (
    <div className='container'>
       <div className='blog_main_cointainer'>
      <div>
          <img src= {blogimage} alt="" className='blog_image' />
      </div>
            <div className='paragraph_container'>
                 <div><h1 className='blog_heading'>BATCAVE - DRIFT & SLIDE</h1></div>
                    <div className='event_dates'>
                           <span>
                              {" "}
                              <LuCalendarDays />  12th March 2024
                            </span>
                            <span>
                              <LuClock /> 10:00 AM - 12:00 PM
                            </span>
                            <span>
                              <LuLocate /> ECR
                            </span>
                      </div>

                  <div className='paragraph_container'>


                 <p className='blog_paragraph'> The Batcave Drift & Slide is an adrenaline-pumping, tire-screeching event designed for those who live for the thrill of controlled chaos behind the wheel.
                   Whether you're a <br></br>seasoned drifter looking to showcase your skills or a beginner
                    wanting to experience the<br></br> art of sliding, this event promises high-speed action,
                    exciting challenges, and a chance<br></br> to learn from the best.</p>
                    <br /><br />

                   <p className='blog_second_paragraph'> At Batcave Drift & Slide, participants will be able to take their cars through a 
                    series of challenging drift courses, 
                    improve their drifting technique, and compete for top honors in a relaxed yet
                    competitive atmosphere.</p>
                  </div>
           </div>
           

      </div>
    </div>
  
  )
}

export default blog