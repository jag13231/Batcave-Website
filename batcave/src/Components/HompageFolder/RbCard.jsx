import React from 'react'   
import  './RbCard.css'
import cardimg from '../../Assets/traffic-road-night[1].jpg'
import cardimgtwo from '../../Assets/sport-cars-parade-race-highway[1].jpg'
// import { MdCalendarToday } from 'react-icons/md';
import calander from '../../Assets/Vector.png'
import location from '../../Assets/carbon_location.png'

import cardimgthree from '../../Assets/joyful-fashionable-female-friends-raise-their-hands-while-sitting-luxury-cabriolet-car-park[1].jpg' 

function RbCard() {
  return (
    // upcoming_events_container
    <div  className='upcoming_events_container'>
        <div className='card'>
            <h5 className='heading_one'>UPCOMING </h5>
            <p className='heading_two'>EVENTS</p>
        </div>

        {/* registration_card */}
        

        <div className='registration_card'>

            {/* registration_card1 */}
            <div className='rb_card_container'>
                <img className='rb_card_image' src={cardimg} alt='rb_card_image' />
                <div className='rb_card_text'>
                    <h3 className='card_heading'>Midnight Mile Rally</h3>
                     <div className='card_icons'>
                           <span> <img src={calander} alt="Calendar Icon" className='calendar_icon' /> 02 July , 2025</span>
                        <span><img src={location} alt="Calendar Icon" className='calendar_icon' /> 10.00 PM</span>
                        <span><img src={location} alt="Calendar Icon" className='calendar_icon' /> ECR  <br></br></span>
                        </div>
                <p className='card_text'>

                    Join us for an unforgettable night as Batcave Automotive Club ignites the 
                    highways under the stars. The Midnight Mile Rally is more than just a drive
                     — it’s a pulse-pounding journey through moonlit roads.
                </p>
                {/* registration_button */}

                <button className='rb_card_button'>Register Now</button>
                </div>
            </div>
            
            {/* registration_card1 */}


           <div className='rb_card_container'>
                <img className='rb_card_image' src={cardimgtwo} alt='rb_card_image' />
                <div className='rb_card_text'>
                    <h3 className='card_heading'>Midnight Mile Rally</h3>
                     <div className='card_icons'>
                           <span> <img src={calander} alt="Calendar Icon" className='calendar_icon' /> 02 July , 2025</span>
                        <span><img src={location} alt="Calendar Icon" className='calendar_icon' /> 10.00 PM</span>
                        <span><img src={location} alt="Calendar Icon" className='calendar_icon' /> ECR  <br></br></span>
                        </div>
                <p className='card_text'>

                    Join us for an unforgettable night as Batcave Automotive Club ignites the 
                    highways under the stars. The Midnight Mile Rally is more than just a drive
                     — it’s a pulse-pounding journey through moonlit roads.
                </p>

                {/* registration_button */}

                <button className='rb_card_button'>Register Now</button>
                </div>
            </div>




           <div className='rb_card_container'>
                <img className='rb_card_image' src={cardimgthree} alt='rb_card_image' />
                <div className='rb_card_text'>
                    <h3 className='card_heading'>Midnight Mile Rally</h3>
                     <div className='card_icons'>
                           <span> <img src={calander} alt="Calendar Icon" className='calendar_icon' /> 02 July , 2025</span>
                        <span><img src={location}  alt="Calendar Icon" className='calendar_icon' /> 10.00 PM</span>
                        <span><img src={location} alt="Calendar Icon" className='calendar_icon' /> ECR  <br></br></span>
                        </div>
                <p className='card_text'>

                    Join us for an unforgettable night as Batcave Automotive Club ignites the 
                    highways under the stars. The Midnight Mile Rally is more than just a drive
                     — it’s a pulse-pounding journey through moonlit roads.
                </p>

                {/* registration_button */}

                <button className='rb_card_button'>Register Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RbCard