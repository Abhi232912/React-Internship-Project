import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div>
            <Header />
            {/* <!--Hero-section Starts--> */}

            <section class="hero-section">
                <div class="herosection-content">
                    <h4>Passionate About IT Traning?</h4>
                    <h1>Ready to Empower </h1>
                    <h1>Future IT Leaders?</h1>
                    <img src="images/yellow-bg.png" alt="error" width="20px" />
                    <p>Join a community of industry professionals passionate about shaping the next
                        generation of IT leaders.Share your real- world expertise, inspire students,
                        arid advance your career</p>
                    <button class="btn-2">Apply Now</button>
                </div>
                <div class="herosection-images">
                    <img class="img-1" src="images/hero-1-circle.png" alt="error" width="100px" />
                    <img class="img-2" src="images/hero-1-circle-2.png" alt="error" width="100px" />
                    <img class="img-3" src="images/hero-shape-purple.png" alt="error" width="100px" />
                    <img class="img-4" src="images/hero-main-banner.svg" alt="error" width="100px" />
                    <img class="img-5" src="images/hero-1-dot-2.png" alt="error" width="100px" />
                    <img class="img-a" src="images/java2.svg" alt="error" width="100px" />
                    <img class="img-b" src="images/azure2.svg" alt="error" width="100px" />
                    <img class="img-c" src="images/code3.svg" alt="error" width="100px" />
                </div>
            </section>
            {/* <!--Hero-section Ends--> */}

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

            {/* <!--Courses Section Starts--> */}

            <section class="courses-section">
                <div class="course-heading">

                    <h1>Explore
                        Our Popular Courses
                        <img src="images/yellow-bg-3.png" alt="error" width="15px" /></h1>

                </div>

                <div class="all-courses">
                    {/* <!--course card one--> */}
                    <div class="cards">
                        <img src="images/java.svg" alt="error" width="100px" />

                        <p>Java</p>

                    </div>
                    {/* <!--course card one--> */}

                    {/* <!--course card two--> */}
                    <div class="cards">
                        <img src="images/python.svg" alt="error" width="100px" />

                        <p>Python</p>

                    </div>
                    {/* <!--course card two--> */}

                    {/* <!--course card three--> */}
                    <div class="cards">
                        <img src="images/dotnet.svg" alt="error" width="100px" />

                        <p>.NET</p>

                    </div>
                    {/* <!--course card three--> */}

                    {/* <!--course card four--> */}
                    <div class="cards">
                        <img src="images/ai-modeling.svg" alt="error" width="100px" />

                        <p>Machine
                            Learing</p>

                    </div>
                    {/* <!--course card four--> */}

                    {/* <!--course card five--> */}
                    <div class="cards">
                        <img src="images/data-science.svg" alt="error" width="100px" />

                        <p>Data
                            Science</p>

                    </div>
                    {/* <!--course card five--> */}

                    {/* <!--course card six--> */}
                    <div class="cards">
                        <img src="images/cyber-security.svg" alt="error" width="100px" />

                        <p>Cyber
                            Security</p>

                    </div>
                    {/* <!--course card six--> */}

                    {/* <!--course card sevean--> */}
                    <div class="cards">
                        <img src="images/ui-icon.svg" alt="error" width="100px" />

                        <p>UI/UX
                            Design</p>

                    </div>
                    {/* <!--course card sevean--> */}

                    {/* <!--course card eight--> */}
                    <div class="cards">
                        <img src="images/testing.svg" alt="error" width="100px" />

                        <p>Software
                            Testing</p>

                    </div>
                    {/* <!--course card eight--> */}

                    {/* <!--course card nine--> */}
                    <div class="cards">
                        <img src="images/devops.svg" alt="error" width="100px" />

                        <p>DevOps</p>

                    </div>
                    {/* <!--course card nine--> */}

                    {/* <!--course card ten--> */}
                    <div class="cards">
                        <img src="images/aws.svg" alt="error" width="100px" />

                        <p>AWS</p>

                    </div>
                    {/* <!--course card ten--> */}

                    {/* <!--course card eleven--> */}
                    <div class="cards">
                        <img src="images/azure.svg" alt="error" width="100px" />

                        <p>Microsoft Azure</p>

                    </div>
                    {/* <!--course card eleven--> */}

                    {/* <!--course card twelve--> */}
                    <div class="cards">
                        <img src="images/sql-server.svg" alt="error" width="100px" />

                        <p>SQL</p>

                    </div>

                </div>
                {/* <!--course card twelve--> */}

                <div class="apply-course">
                    <h1>Have a skill in IT? Passionate about teaching?</h1>
                    <button>Apply Now</button>

                </div>


            </section>
            {/* <!--Courses Section Ends--> */}

            {/* <!--Frequently asked questions starts--> */}

            <section class="frequently-asked-questions" style={{ backgroundImage: "url('images/events-shape.png')" }}>
                <div class="questions-heading">
                    <h1>Frequently Asked Questions</h1>
                    <div class="all-questions">
                        <ul>
                            <li><span>What qualifications do i need to become an IT Trainer with IT Trainers?</span>
                                <a href="https://www.google.com/"><FontAwesomeIcon icon={faPlus} /></a>
                            </li>
                            <li><span>What are the benefits of working as an IT Trainer with IT Trainers?
                            </span>
                                <a href="https://www.google.com/"><FontAwesomeIcon icon={faPlus} /></a>
                            </li>
                            <li><span>How does the application process work?
                            </span>
                                <a href="https://www.google.com/"><FontAwesomeIcon icon={faPlus} /></a>
                            </li>
                            <li><span>Do I need prior teaching experience to become an IT Trainer?
                            </span>
                                <a href="https://www.google.com/"><FontAwesomeIcon icon={faPlus} /></a>
                            </li>
                            <li><span>Can I work as an IT Trainer on a part-time basis?
                            </span>
                                <a href="https://www.google.com/"><FontAwesomeIcon icon={faPlus} /></a>
                            </li>
                            <li><span>Can I teach classes online as an IT Trainer with IT Trainers
                            </span>
                                <a href="https://www.google.com/"><FontAwesomeIcon icon={faPlus} /></a>
                            </li>
                            <li><span>Do I have to teach only the courses mentioned on the site, or can I teach
                                specific courses?</span>
                                <a href="https://www.google.com/"><FontAwesomeIcon icon={faPlus} /></a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* <!--Get start section starts--> */}


                <section class="get-start">
                    <div class="get-start-images">
                        <img class="image-11" src="images/cta-shape-1.png" alt="error" width="30px" />
                        <img class="image-12" src="images/cta-shape-2.png" alt="error" width="30px" />

                    </div>
                    <div class="get-start-content">
                        <h1>You can be your own
                            Guiding start with our
                            help</h1>
                        <button>Get Started</button>
                    </div>
                </section>


                {/* <!--Get start section ends--> */}
            </section>

            {/* <!--Frequently asked questions Ends--> */}

            <Footer />
        </div>
    )
}

export default Home