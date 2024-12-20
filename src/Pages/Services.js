import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import './Services.css'

const Services = () => {
  return (
    <div>
      <Header />
        {/* <!--information Section starts--> */}

    <section class="information-Section">
        <div class="information-content">
            <h4>How you will Empower students</h4>
            <h1>Transforming IT Education Through Expertise and Guidance</h1>
            <p>As an IT Trainer with us, you will profoundly impact students' lives
                through support, guidance, and mentorship opportunities. Here's how
                you'll make a difference:</p>
        </div>
        {/* <!--information-card-one--> */}
        <div class="all-information">

            <div class="information-card">
                <img src="images/services-training.svg" alt="error" width="100px" />
                <h2 class="a1">Expert Training</h2>
                <p>Provide students with cutting-edge IT skills and knowledge through
                    comprehensive and engaging training sessions</p>
            </div>
            {/* <!--information-card-one--> */}

            {/* <!--information-card-two--> */}
            <div class="information-card">
                <img src="images/services-career-guidance.svg" alt="error" width="100px" />
                <h2 class="a2">Career Guidance</h2>
                <p>Help students navigate their career paths effectively by offering valuable
                    insights and professional advice.</p>
            </div>
            {/* <!--information-card-two--> */}

            {/* <!--information-card-three--> */}
            <div class="information-card">
                <img src="images/services-mentoring.svg" alt="" width="100px" />
                <h2 class="a3"> Mentorship</h2>
                <p>Offer personalized support and advice to each student, addressing their
                    unique goais and challenges.</p>
            </div>
            {/* <!--information-card-three--> */}

            {/* <!--information-card-four--> */}
            <div class="information-card">
                <img src="images/services-skill.svg" alt="" width="100px" />
                <h2 class="a4">Skill Development</h2>
                <p>Focus on both technical and soft skill enhancement, ensuring
                    well-rounded professional development</p>
            </div>
            {/* <!--information-card-four--> */}

            {/* <!--information-card-five--> */}
            <div class="information-card">
                <img src="images/services-training.svg" alt="" width="100px" />
                <h2 class="a5">Practical Workshops</h2>
                <p>Conduct hands-on sessions to enhance practical skills and
                    real-world application of theoretical knowledge.</p>
            </div>
            {/* <!--information-card-five--> */}

            {/* <!--information-card-six--> */}
            <div class="information-card">
                <img src="images/services-networking.svg" alt="" width="100px" />
                <h2 class="a6">Networking Oppurtinites</h2>
                <p>Connect students with industry professionals to build
                    valuable relationships and expand their career opportunities.</p>
            </div>
        </div>


        {/* <!--information-card-six--> */}

    </section>

    {/* <!--information Section ends-->/ */}
    <Footer />   
    </div>
  )
}

export default Services