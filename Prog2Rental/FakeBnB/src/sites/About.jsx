import React from 'react';
import Navbar from '../components/Navbar';
import '../css/About.css';
import portrait from '../assets/portrait.jpg'

const About = () => {
 return (
    <div>
      <Navbar />
      <div className="about">
      <h1>About Me</h1>
      <div className="profile-picture">
        {/* Insert your picture here */}
        <img src={portrait} alt="Your Name" />
      </div>
      <div className="contact-details">
        <h2>Contact Information</h2>
        <p>Email: david.hofstetter@lernende.bbw.ch</p>
        <p>Phone: +41 79 132 17 43</p>
      
      </div>
    </div>
    </div>
 );
};

export default About;