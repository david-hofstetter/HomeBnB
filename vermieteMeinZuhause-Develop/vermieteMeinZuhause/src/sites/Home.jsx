import React from 'react'
import Navbar from '../components/Navbar.jsx'
import '../css/Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="home-section">
        <h1>Welcome to House Rent</h1>
        <p>Discover and find the perfect place to rent.</p>
      </section>
    </div>
 );
};

export default Home;