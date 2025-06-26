import React from 'react'
import TrafficImg from "../../Assets/traffic-road-night.jpg" 
import "./RbCard.css"

const RbCard = () => {
  return (
    <>
    <div className="upcoming_events_container">
        <div className="event_batch">
            UPCOMING <span>EVENTS</span>
        </div>
        <div className="cards_container">
            <div className="event_cards">
                <div className="event_img">
                    <img src={TrafficImg} alt="" srcset="" />
                </div>
                

            </div>
            <div className="event_cards">
                 <div className="event_img">
                    <img src={TrafficImg} alt="" srcset="" />
                </div>
            </div>
            <div className="event_cards">
                 <div className="event_img">
                    <img src={TrafficImg} alt="" srcset="" />
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default RbCard