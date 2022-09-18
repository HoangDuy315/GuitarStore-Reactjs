import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row ">
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold mb-4'>About us</h1>
                        <p className="lead mb-4">If you’ve won employer branding awards, the About Us statement is a great place to put it. Awards are social proof, a proven way to influence candidates.
                        Check out 23andMe’s About Us statement — it is chock full of awards:
                        “The company was named by MIT Technology Review to its “50 Smartest Companies, 2017” list, and named one of Fast Company’s “25 Brands That Matter Now, 2017”. 23andMe has over 5 million customers worldwide, with ~85 percent of customers consented to participate in research.
                        Or here’s WorkWave’s About Us statement:
                        7 Time winner of Best Place to Work in New Jersey by NJBiz!
                        WorkWave has been recognized with multiple awards for its outstanding products, growth and culture, including the Inc. 5000, SaaS Award, IT World Awards, Globe Awards, Silver Stevie Award for Employer of the Year, and Best Place to Work Inc. Magazine
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" className='ms-4 ' alt="about us" height="500px" width="500px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
