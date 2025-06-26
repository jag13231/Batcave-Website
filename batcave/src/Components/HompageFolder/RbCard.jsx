import React from "react";
import TrafficImg from "../../Assets/traffic-road-night.jpg";
import SportsCarImg from "../../Assets/sport-cars-parade-race-highway.jpg";
import Joyful from "../../Assets/joyful.jpg";
import { LuCalendarDays, LuClock, LuLocate } from "react-icons/lu";
import "./RbCard.css";

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
            <div className="event_details">
              <h3>Midnight mile rally</h3>
              <div className="event_date">
                <span>
                  <LuCalendarDays /> 12th March 2024
                </span>
                <span>
                  <LuClock /> 10:00 AM - 12:00 PM
                </span>
                <span>
                  <LuLocate /> ECR
                </span>
              </div>
              <p>
                Join us for an unforgettable night as Batcave Automotive Club
                ignites the highways under the stars. The Midnight Mile Rally is
                more than just a drive — it's a pulse-pounding journey through
                moonlit roads.
              </p>
              <button className="event_btn">Register Now</button>
            </div>
          </div>
          <div className="event_cards">
            <div className="event_img">
              <img src={SportsCarImg} alt="" srcset="" />
            </div>
            <div className="event_details">
              <h3>Midnight mile rally</h3>
              <div className="event_date">
                <span>
                  {" "}
                  <LuCalendarDays /> 12th March 2024
                </span>
                <span>
                  <LuClock /> 10:00 AM - 12:00 PM
                </span>
                <span>
                  <LuLocate /> ECR
                </span>
              </div>
              <p>
                Join us for an unforgettable night as Batcave Automotive Club
                ignites the highways under the stars. The Midnight Mile Rally is
                more than just a drive — it's a pulse-pounding journey through
                moonlit roads.
              </p>
              <button className="event_btn">Register Now</button>
            </div>
          </div>
          <div className="event_cards">
            <div className="event_img">
              <img src={Joyful} alt="" srcset="" />
            </div>
            <div className="event_details">
              <h3>Midnight mile rally</h3>
              <div className="event_date">
                <span>
                  {" "}
                  <LuCalendarDays /> 12th March 2024
                </span>
                <span>
                  <LuClock /> 10:00 AM - 12:00 PM
                </span>
                <span>
                  <LuLocate /> ECR
                </span>
              </div>
              <p>
                Join us for an unforgettable night as Batcave Automotive Club
                ignites the highways under the stars. The Midnight Mile Rally is
                more than just a drive — it's a pulse-pounding journey through
                moonlit roads.
              </p>
              <button className="event_btn">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RbCard;
