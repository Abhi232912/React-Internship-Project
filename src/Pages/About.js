import React from 'react'
import './About.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const About = () => {
  return (
    <div>
        <Header />
        {/* <!--About Section Starts--> */}

    <section class="about-section">
        <div class="images-section">
            <img class="img-6" src="images/hero-1-circle-3.png" alt="error" width="100px" />
            <img class="img-7" src="images/hero-1-circle-4.png" alt="error" width="100px" />
            <img class="img-8" src="images/about2.png" alt="error" width="100px" />
            <img class="img-9" src="images/hero-1-dot.png" alt="error" width="100px" />
            <img class="img-10" src="images/about1.png" alt="error" width="100px" />
            <div class="aboutimages-content">
                <p>At IT Trainers</p>
                <h4>Turn Your IT Skills Into Teaching Success</h4>
            </div>
        </div>
        <div class="about-content">
            <h4>About us</h4>
            <h1>Achieve Your 
                 Goals With IT Trainers</h1>
            <img src="images/yellow-bg-2.png" alt="error" width="20px" />
            <p>At IT Trainers, we connect passionate industry professionals
                with opportunities to shape the next generation of IT leaders.
                Our mission is to bridge the gap between real-world experience
                and aspiring tech talent, ensuring students receive toplotch
                education and mentorship.</p>
            <ul>
                <li><span><i class="fa-solid fa-check"></i></span>Enhance your career
                    by teaching future IT professionals</li>
                <li><span><i class="fa-solid fa-check"></i></span>Flexible teaching
                    opportunities, both online and offline</li>
                <li><span><i class="fa-solid fa-check"></i></span>Join a community of
                    like-minded IT experts.</li>

            </ul>
            <button>Apply Now</button>
        </div>

    </section>
    {/* <!--About Section Ends--> */}

    <Footer />
    </div>
  )
}

export default About