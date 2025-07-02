import React from "react";
import { LuCalendarDays, LuClock, LuLocateFixed } from "react-icons/lu";
import {Link} from "react-router-dom"
import "./Events.css";

const UpComingEvents = ({
  title,
  image1,
  EventTitle,
  EventDescription,
  image2,
  EventTitle2

}) => {
  return (
    <>
      <div className="upcoming-events">
        <h2>{title}</h2>
        <div className="Upcoming_event_container">
          <div className="Upcoming_event">
            <img src={image1} alt="" />
            <div className="upcoming-Event-details">
              <h3>{EventTitle}</h3>
              <span>
                <p>
                  <LuCalendarDays />
                  02 July, 2025
                </p>
                <p>
                  <LuClock /> 10:00 PM
                </p>
              </span>
              <span>
                <p>
                  <LuLocateFixed /> Coimbatore - Niligris
                </p>
              </span>
              <h2>{EventDescription}</h2>
              <div className="upevent_buttons">
                <Link to={"/eventregister"}><button className="Upevents-button">Register </button></Link>
                <button className="Upevents-button">Details</button>
              </div>
            </div>
          </div>
          <div className="Upcoming_event">
            <img src={image2} alt="" />
            <div className="upcoming-Event-details">
              <h3>{EventTitle2}</h3>
              <span>
                <p>
                  <LuCalendarDays />
                  02 July, 2025
                </p>
                <p>
                  <LuClock /> 10:00 PM
                </p>
              </span>
              <span>
                <p>
                  <LuLocateFixed /> Coimbatore - Niligris
                </p>
              </span>
              <h2>{EventDescription}</h2>
              <div className="upevent_buttons">
                <button className="Upevents-button">Register </button>
                <button className="Upevents-button">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpComingEvents;
