import React from 'react'
import eventimage from '../../Assets/blogimage.png'
// import location from '../../Assets/location-pin.png'
import { LuCalendarDays, LuClock} from "react-icons/lu";
import { GoLocation } from "react-icons/go";
import { FaCarSide } from "react-icons/fa";
import "./EventDetails.css"

const EventDetails = () => {
  return (
    <>
    <div className="back-btn">
         <button>Back</button>
      </div>

     <div className="event-container">
      
      <div className="event-imgbox">
       
        <h1>BATCAVE - DRIFT & SLIDE</h1>
         {/* <div className="location">
           <img src={location} alt="" />
        </div> */}
        <img src={eventimage} alt="" />
        <div className="imgbox-bottom">
          <p>INR 1200/-</p>
          <button>Register</button>
        </div>
      </div>


      <div className="event-content">
        <h1>Secure Your Spot : Registration Ends in July 10 , 2025</h1>
        <div className="event-list">
          <p><LuCalendarDays className='event-icon'/>02 July , 2025</p>
          <p><LuClock className='event-icon'/>10.00 PM</p>
        </div>
        <p><GoLocation className='event-icon'/>Kalai Mahal , D.B Road , R. S  Puram , Coimbatore</p>
        <div className="event-about">
          <h2>About Event</h2>
          <p>Get ready to ignite the night! The Midnight Mile Rally is a high-octane night drive designed exclusively for passionate automotive enthusiasts. </p>
        </div>
        <div className="Participation">
          <h2>Participation Includes:</h2>
          <ul>
            <li><FaCarSide className='Participation-icon'/>Entry for 1 car + 2 crew</li>
            <li><FaCarSide className='Participation-icon'/>Rally kit: Car stickers, ID tags</li>
            <li><FaCarSide className='Participation-icon'/>Professional photoshoot coverage</li>
            <li><FaCarSide className='Participation-icon'/>Feature in Batcave Rally Recap Video</li>
            <li><FaCarSide className='Participation-icon'/>Emergency support crew & security</li>
          </ul>
        </div>
      </div>

    </div>

    </>
  )
}

export default EventDetails
