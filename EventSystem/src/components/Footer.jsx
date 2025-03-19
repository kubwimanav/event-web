import React from 'react'
import'../styles/Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div class="footer-content">
        <div>
          <h3>About Us</h3>
          <p className="about-footer-text">
            Discover local events easily with our interactive event finder. Stay
            connected and never miss out on exciting experiences.
          </p>
        </div>
        <div class="social-media">
          <h3>Follow Us</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div class="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <p className="about-footer-text">
        &copy; 2025 Interactive Local Event Finder. All rights reserved.
      </p>
    </div>
  );
}

export default Footer