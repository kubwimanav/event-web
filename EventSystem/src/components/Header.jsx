import React from 'react'
import '../styles/Header.css'
function Header() {
  return (
    <div>
      {" "}
      <header class="header">
        <div class="logo">
          <p> Event</p>
          <p>Managment</p>
        </div>
        <nav>
          <ul class="nav-link">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header