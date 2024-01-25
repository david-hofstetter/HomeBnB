import React from 'react';
import Navbar from '../components/Navbar';
import '../css/About.css';

const About = () => {
 return (
    <div>
      <Navbar />
      <section className="home-section">
        <h1>Welcome to our House Rental Website</h1>
        <p>We offer a wide range of homes for rent around the world. Whether you're looking for a cozy apartment in the city or a spacious villa by the beach, we have something for everyone.</p>
        <p>Our mission is to make the rental process as easy and stress-free as possible. With our user-friendly website, you can browse through our listings, filter by location, price, and amenities, and book your dream home in just a few clicks.</p>
        <p>We have a dedicated team of customer support specialists who are always available to help you with any questions or concerns you may have. We pride ourselves on our quick response times and our commitment to providing the best possible service to our customers.</p>
        <p>So why wait? Start browsing our listings today and find your perfect home away from home!</p>
      </section>
    </div>
 );
};

export default About;