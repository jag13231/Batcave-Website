import React from 'react'
import './Blog.css'
import blogimage from '../../Assets/blogimage.png'
import { LuCalendarDays, LuClock } from "react-icons/lu";
import { GoLocation } from "react-icons/go";

function blog() {
  return (
    <>
    <div className="blog_main_cointainer">
      <div className="blog-img">
        <img src={blogimage} alt="" />
      </div>
      <div className="blog-content">
        <h1>BATCAVE - DRIFT & SLIDE</h1>
        <ul>
          <li><LuCalendarDays />02 July , 2025</li>
          <li><LuClock />10.00 PM</li>
          <li><GoLocation/>Coimbatore - Niligris</li>
        </ul>
        <p>The Batcave Drift & Slide is an adrenaline-pumping, tire-screeching event designed for those who live for the thrill of controlled chaos behind the wheel. Whether you're a seasoned drifter looking to showcase your skills or a beginner wanting to experience the art of sliding, this event promises high-speed action, exciting challenges, and a chance to learn from the best.</p>
        <p>At Batcave Drift & Slide, participants will be able to take their cars through a series of challenging drift courses, improve their drifting technique, and compete for top honors in a relaxed yet competitive atmosphere.</p>
      </div>
    </div>
    </>
  
  )
}

export default blog