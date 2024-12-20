import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Benefits.css'

const Benefits = () => {
  return (
    <div>
         <Header />
        {/* <!--Benefits Section Starts--> */}
    <section class="benefits-section">
        <div class="benefits-content">
            <h4>Benefits</h4>
            <h1>Why Become An IT Trainer With </h1>
            <img src="images/yellow-bg.png" alt="error" width="20px" />
            <h1>Us</h1>
            <p>Shape future IT leadersat IT Trainers and enjoy these amazing benefits:</p>
        </div>

        <div class="all-benefits">
            <div class="benefit-1">
                <img src="images/benefits-salary.svg" alt="error" width="100px" />
                <h3>Earn Extra Salary </h3>
                <p>Gain extra income through our competitive pay structure.</p>
            </div>
            <div class="benefit-2">
                <img src="images/benefits-career.svg" alt="error" width="100px" />
                <h3>Career Growth </h3>
                <p>Enhance your skills with ongoing training opportunities.</p>
            </div>
            <div class="benefit-3">
                <img src="images/benefits-community.svg" alt="error" width="100px" />
                <h3>Community Impact </h3>
                <p>Contribute to the growth of the IT community significantly.</p>
            </div>
            <div class="benefit-4">
                <img src="images/benefits-hours.svg" alt="error" width="100px" />
                <h3>Flexiable Working Hours</h3>
                <p>Enjoy the flexibility balance work with your full time job.</p>
            </div>

        </div>
    </section>

    {/* <!--Benefits Section Ends--> */}
    <Footer />
    </div>
  )
}

export default Benefits