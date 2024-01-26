import React from 'react'
import Navbar from '../components/Navbar.jsx'
import '../css/Home.css'



const Home = () => {

  window.addEventListener("scroll", function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + "px";
    moon.style.left = -value * 0.5 + "px";
    mountain.style.top = -value * 0.15 + "px";
    road.style.top = value * 0.15 + "px";
    text.style.top = value * 1 + "px";
  });
  return (

  
    <div>
      
      <Navbar />
      <div class="aquarium">
  <div class="aquarium__table"></div>
  <div class="aquarium__aquarium">
    <div class="aquarium__water"></div>
    <div class="aquarium__bubble"></div>
    <div class="aquarium__bubble"></div>
    <div class="aquarium__bubble"></div>
    <div class="aquarium__bubble"></div>
    <div class="aquarium__bubble"></div>
    <div class="aquarium__bubble"></div>
    <div class="aquarium__bubble"></div>
    <div class="aquarium__bubble"></div>
  </div>
  <div class="aquarium__drops">
    <div class="aquarium__drop"></div>
    <div class="aquarium__water-column"></div>
    <div class="aquarium__splash"></div>
    <div class="aquarium__splash"></div>
  </div>
  <div class="aquarium__sponge-box">
    <div class="aquarium__body">
      <div class="aquarium__body-stripe"></div>
      <div class="aquarium__body-hole"></div>
    </div>
    <div class="aquarium__face">
      <div class="aquarium__mouth"></div>
      <div class="aquarium__smile"></div>
    </div>
  </div>
</div>
    
      <section className="home-sectionHome">
        <h1>Welcome to FakeBnB</h1>
        
        <p>Discover and find the perfect place to rent.</p>
        <br />
      
        <h2>This is a House Rental Website</h2>
        <p>We offer a wide range of homes for rent around the world. Whether you're looking for a cozy apartment in the city or a spacious villa by the beach, we have something for everyone.</p>
        <p>Our mission is to make the rental process as easy and stress-free as possible. With our user-friendly website, you can browse through our listings, filter by location, price, and amenities, and book your dream home in just a few clicks.</p>
        <p>We have a dedicated team of customer support specialists who are always available to help you with any questions or concerns you may have. We pride ourselves on our quick response times and our commitment to providing the best possible service to our customers.</p>
        <p>So why wait? Start browsing our listings today and find your perfect home away from home!</p>
      
      </section>
    </div>
 );
};

export default Home;