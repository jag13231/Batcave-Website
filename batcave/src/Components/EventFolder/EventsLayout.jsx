import React from "react";
import EventBanner from "../EventFolder/EventBanner";
import EventsButtons from "../EventFolder/EventsButtons";
import UpComingEvents from "../EventFolder/UpComingEvents";
import UpcomingEveImg1 from "../../Assets/upcomingEve1.jpg";
import UpcomingEveImg2 from "../../Assets/UpcomingEve2.jpg";
import UpcomingEveImg3 from "../../Assets/UpcomingEve3.jpg";
import Footer from "../../Components/HompageFolder/RbFooter";
import "./EventResponsivene.css"

const EventsLayout = () => {
  return (
    <>
      <EventBanner />
      <EventsButtons />
      <UpComingEvents
        title="Upcoming Events"
        image1={UpcomingEveImg1}
        EventTitle="TRACK DAY - FST & FURIOUS"
        EventDescription="Fast & Furious is an exclusive, 
  high-energy driving event designed for car enthusiasts 
  who want to push their vehicles to the limit in a controlled, 
  safe environment."
        image2={UpcomingEveImg2}
      />
      <UpComingEvents
        title="Special Events"
        image1={UpcomingEveImg3}
        EventTitle="TRACK DAY - FST & FURIOUS"
        EventDescription="Fast & Furious is an exclusive, 
  high-energy driving event designed for car enthusiasts 
  who want to push their vehicles to the limit in a controlled, 
  safe environment."
        image2={UpcomingEveImg3}
      />
      <Footer />
    </>
  );
};

export default EventsLayout;
