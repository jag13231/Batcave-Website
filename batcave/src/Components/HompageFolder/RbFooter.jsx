import React from 'react'
import './RbFooter.css'
import mail_image from '../../Assets/mailimage.png'   

function RbFooter() {
  return (
    <div className='footer_main container'>
        <h1 className='footer_heading'>Stay Updated for Next Events</h1>

        <div className='main_form_container'>
            <img src={mail_image} alt=""  className='mail_image'/>

            <input type="mail"  placeholder='Enter the Email' className='inputbox_mail'/>
            <button className='footer_button' >Join Now</button>
        </div>

        <div className='footer_info'>
            <h2 className='membership_heading'>For immediate assistance, feel free to contact us directly:</h2>
            <div className='contact_info'>
                <div className='enquiries'>
                 <h2 className='enquries_content' >For Membership Enquiries :</h2>
                <h2 className='enquries_number'>7550057267</h2>
                <span className='border'></span>

                </div>
               <div className='enquiries'>
                  <h2 className='enquries_content' >For Membership Enquiries :</h2>
                  <h2 className='enquries_number'>7550057267</h2>
                   <span className='border'></span>
                </div>
                <div className='enquiries'>
                   <h2 className='enquries_content' >For Membership Enquiries :</h2>
                    <h2 className='enquries_number'>7550057267</h2>
                </div>

            </div>
        </div>

        <div className='footer_bottom'>
           <div > <h2 className='footer_bottom_heading'>© 2023 Rotary Bangalore IT Corridor. All rights reserved.</h2></div>
           <div className='footer_bottom_links'>
            <div>FAQs</div>
            <div>TERMS & CONDITION</div>
            <div>PRIVACY POLICY</div>
            <div>REFUND POLICY</div>
           </div>
        </div>      
    </div>
  )
}

export default RbFooter