import Logo from "../../Assets/Logo.png";
import  Aos from 'aos';
import 'aos/dist/aos.css';
import './Header.css'
import { useEffect } from "react";
const Header = () => {
    useEffect(()=>{
     Aos.init()
    },[])
  return (
    <>
        <div className="navbar_container">
               <img   src={Logo} alt="Logo" data-aos="fade-right" data-aos-duration="1000" />
                <div className="navItems" >
                    <ul data-aos = "zoom-in" data-aos-duration='1500'> 
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Event</li>
                        <li>Gallery</li>
                        <li>News / Blogs </li>
                        <li>Membership</li>
                        <li>Contact</li>
                    </ul>
                </div>
            
                <button className="navButton" data-aos="fade-left" data-aos-duration='1000'>Login</button>
        </div>
    </>
  )
}

export default Header