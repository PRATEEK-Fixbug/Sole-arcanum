import React from 'react';
import './App.css';

function AboutPage() {
  return (
    <div className="about-container">
      {/* Flexbox with Image and Text */}
      <div className="about-flex">
        <img src="./images/9.jpg" alt="About Us" className="about-image" />
        <div className="about-text">
          <h2>Thank You for Visiting Sole Arcanum!</h2>
          <p>
            We are passionate about bringing the best shoes to your doorstep.
            Our mission is to ensure that your feet are always comfortable, stylish, and on-trend.
          </p>
        </div>
      </div>

      {/* Thank You Message */}
      <div className="about-thankyou">
        <h3>Thank you for being part of our journey!</h3>
      </div>

      {/* Developer Note */}
      <div className="developer-note">
        <p>Website developed by Prateek Singh</p>
      </div>
    </div>
  );
}

export default AboutPage;
