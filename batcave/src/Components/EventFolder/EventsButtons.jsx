import React from 'react'
import "./Events.css"

const EventsButtons = () => {
  return (
    <>
        <div className="events-buttons">
            <button className="events-button">All Events</button>
            <button className="events-button">Upcoming Events</button>
            <button className="events-button">Special Events</button>
            <button className="events-button"> Past Events</button>
        </div>
    </>
  )
}

export default EventsButtons