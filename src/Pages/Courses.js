import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Courses.css'

const Courses = () => {
  return (
    <div>
      
        <Header />
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
    <Footer />
    </div>
  )
}

export default Courses