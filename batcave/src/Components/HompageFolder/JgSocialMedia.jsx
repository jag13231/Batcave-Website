import React from "react";
import "./JgSocialMedia.css";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

const JgSocialMedia = () => {
  return (
    <>
      
      <div className="socialMedia">
        <div className="connect_batch">
          CONNECT <span>WITH US</span>
        </div>
        <div className="media_container">
            <div className="media_item">
               <div className="items">
                 <h4><SlSocialInstagram /></h4>
                <p>Instagram</p>
                <span>@batcave_automotiveclub </span>
                <h5>Follow our Latest Photos and Stories</h5>
                <button className="follow_button">Follow</button>
               </div>

            </div>
            <div className="media_item01">
               <div className="items">
                 <h4><SlSocialLinkedin /></h4>
                <p>Linked in</p>
                <span>@batcave_automotiveclub </span>
                <h5>Follow our Latest Photos and Stories</h5>
                <button className="follow_button">Follow</button>
               </div>
                
            </div>

        </div>
      </div>
    </>
  );
};

export default JgSocialMedia;
