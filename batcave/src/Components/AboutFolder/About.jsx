import React from "react";
import Batcave from "../../Assets/batcave-desc.jpg";
import img1 from "../../Assets/img1.1.jpg";
import img2 from "../../Assets/img2.2.jpg";
import img3 from "../../Assets/img3.3.jpg";
import { FaUsers, FaCalendarAlt, FaMedal } from "react-icons/fa";
import Footer from "../HompageFolder/RbFooter";
import { GoTrophy } from "react-icons/go";

import "./About.css";
import "./AboutResponsive.css"

const About = () => {
  return (
    <>
      <div className="Batcave-journey">
        <div className="About-our-journey">About Our Journey of Batcave</div>
        <div className="journey-desc">
          From humble beginnings to the premier automotive community, discover
          the passion that drives Batcave Automotive Club forward.
        </div>
      </div>
      <div className="Batcave-desc">
        <div className="Batcave-img">
          <img src={Batcave} alt="" srcset="" />
        </div>
        <div className="about-batcave">
          Batcave Automotive, founded in 2023 and based in Coimbatore, positions
          itself as “India's 1st Open Car Club. ” With about 20-42 followers,
          the page underscores a diverse , passion-driven approach—members don't
          have to own a car to join!
        </div>
      </div>
      <div className="event-members">
        <div className="evnt-mems-show">
          <div className="active-members">
            <div className="mem-icon">
              <FaUsers />
            </div>
            <div className="count">1500+</div>
            <div className="ach">Active Members</div>
          </div>
        </div>
        <div className="evnt-mems-show">
          <div className="active-members">
            <div className="mem-icon">
              <FaCalendarAlt />
            </div>
            <div className="count">200+</div>
            <div className="ach">Event Hosted</div>
          </div>
        </div>
        <div className="evnt-mems-show">
          <div className="active-members">
            <div className="mem-icon">
              <FaMedal />
            </div>
            <div className="count">05+</div>
            <div className="ach">Years Acheived</div>
          </div>
        </div>
      </div>
      <div className="benefits-container">
        <div className="benefits">
          <div className="whyBatcave">
            <span>Why Join Batcave Automotive?</span>
            <p>
              Experience the ultimate automotive community with exclusive
              events, expert insights, and lifelong connections.
            </p>
            <p>
              Confirms Batcave as a premier automotive hub in Coimbatore,
              organizing road trips, exotic car experiences, track events, and
              facilitating buying and selling vehicles
            </p>
          </div>
          <div className="Bat-imgs">
            <div className="img1">
              <img src={img1} alt="" srcset="" />
            </div>
            <div className="imgs">
              <div className="img2">
                <img src={img2} alt="" srcset="" />
              </div>
              <div className="img3">
                <img src={img3} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="Exclusive">
          <div className="Exclusive_content">
            <div className="trophy">
              <GoTrophy />
            </div>
            <div className="exe-events">
              <div className="exe-title">Exclusive Events</div>
              <div className="exe-desc">
                Access to premium rallies, track days, and automotive
                experiences.
              </div>
            </div>
          </div>
          <div className="Exclusive_content1">
            <div className="trophy">
              <GoTrophy />
            </div>
            <div className="exe-events">
              <div className="exe-title1">Premimum Community</div>
              <div className="exe-desc">
                Connect with passionate automotive enthusiasts and industry
                experts.
              </div>
            </div>
          </div>
          <div className="Exclusive_content2">
            <div className="trophy">
              <GoTrophy />
            </div>
            <div className="exe-events">
              <div className="exe-title">Member Benefits</div>
              <div className="exe-desc">
                Special discounts, priority booking, and member-only content.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
