import React from 'react'
import './RiRegister.css'
import {Link} from "react-router-dom"

const RiRegister = () => {
  return (
    <div className='main_container'>
      <Link to={"/events"}> <div><button className='backbutton'>Back</button></div></Link>
       <h3 className='regis_heading'>EVENT REGISTRATION</h3>
       <div className='regis_steps_container'>
              <div className='circle'><h1>1</h1> <div className='line'></div></div>
              <div className='circle'><h1>2</h1><div className='line'></div></div>
              <div className='circle'><h1>3</h1></div>
        </div>

        <div className='form_main_container'>
               <div className='form_container'>
              <div className='form_contentone'>
                  <div><h2>Full Name *</h2>
              <input type="text" placeholder='Enter your full name' className='input_field' />
              </div>

              <div><h2>Date of Birth *</h2>
              <input type="text" placeholder='Enter your full name' className='input_field' />
              </div>
              </div>


              <div className='form_contentone'>
                  <div><h2>Mobile Number *</h2>
              <input type="text" placeholder='Enter your full name' className='input_field' />
              </div>

              <div><h2>E - Mail ID *</h2>
              <input type="text" placeholder='Enter your full name' className='input_field' />
              </div>
              </div>

              <div className='form_contentthree'>
                  <div><h2>Address *</h2>
                  <input type="address" placeholder='Enter your full name' className='input_field_address' />
                  </div>
              </div>


              <div className='form_contentone'>
                  <div><h2>Pincode *</h2>
              <input type="text" placeholder='Enter your full name' className='input_field' />
              </div>

              <div><h2>City *</h2>
              <input type="text" placeholder='Enter your full name' className='input_field' />
              </div>
              </div>


              <div className='form_contentone'>
                  <div><h2>State *</h2>
              <input type="text" placeholder='Enter your full name' className='input_field' />
              </div>

              <div><h2>No.of.Person</h2>
              <input type="text" placeholder='Enter your full name' className='input_field' />
              </div>
              </div>
              


              <div className='check_box_container'>
                <input type="checkbox" className='checkbox'  />
                <p className='checkbox_words'>By  Clicking , I agree with the Refund Policy and  Terms & Condition</p>
              </div>
              
        </div>
</div>
    </div>
  )
}

export default RiRegister