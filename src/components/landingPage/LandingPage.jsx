import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="title">Welcome to PetMart</h1>
      <p className="description">Discover a wide range of products for your beloved pets!</p>
      <Link to="/home">
        <button className="shop-button">Shop Now</button>
      </Link>
    </div>
  );
};

export default LandingPage;
