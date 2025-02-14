import React from 'react'
import Header from '../Components/Header'
import './FAQs.css'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



const FAQs = () => {
  return (
    <div>
        <Header />
        {/* <!--Frequently asked questions starts--> */}

<section class="frequently-asked-questions" >
    <div class="questions-heading">
        <h1>Frequently Asked Questions</h1>
        <div class="all-questions">
            <ul>
                <li><span>What qualifications do i need to become an IT Trainer with IT Trainers?</span>
                    <a href="https://www.google.com/"><FontAwesomeIcon icon={faPlus} /></a>
                </li>
                <li><span>What are the benefits of working as an IT Trainer with IT Trainers?
                    </span>
                    <a href="https://www.google.com/" ><FontAwesomeIcon icon={faPlus} /></a>
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

export default FAQs