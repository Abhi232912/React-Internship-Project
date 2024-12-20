import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div >
    {/* <!--Top-bar--> */}
    <section class="top-bar">
        <div class="it-logo">
            <img src="images/it-trainers-logo.png" alt="error" width="100px" />
        </div>
        <div class="top-barcontact">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Benefits">Benefits</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Courses">Courses</Link></li>
                <li><Link to="/FAQs">FAQs</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            <button>Apply Now</button>
        </div>
    </section>
    {/* <!--Top-bar--> */}
    </div>
  )
}

export default Header