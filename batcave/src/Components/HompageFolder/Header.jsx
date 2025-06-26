import Logo from "../../Assets/Logo.png";
import './Header.css'
const Header = () => {
   
  return (
    <>
        <div className="navbar_container">
               <img   src={Logo} alt="Logo"/>
                <div className="navItems" >
                    <ul> 
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Event</li>
                        <li>Gallery</li>
                        <li>News / Blogs </li>
                        <li>Membership</li>
                        <li>Contact</li>
                    </ul>
                </div>
            
                <button className="navButton">Login</button>
        </div>
    </>
  )
}

export default Header