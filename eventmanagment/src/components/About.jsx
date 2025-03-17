import React from 'react'
import'../assets/styles/About.css'
function About() {
  return (
    <div>

        <div class="container">
          <div class="section">
            <h2>What We Do</h2>
            <p>
              Our Event Management System provides a comprehensive platform for
              event organizers and attendees. We enable easy event creation,
              ticketing, and management while offering attendees a smooth and
              engaging experience in discovering and attending events.
            </p>
          </div>

          <div class="section">
            <h2>Features of Our System</h2>
            <ul>
              <li>
                <strong>Event Creation:</strong> Organizers can easily create
                and manage events.
              </li>
              <li>
                <strong>Online Ticketing:</strong> Secure ticket booking and
                management.
              </li>
              <li>
                <strong>User-Friendly Dashboard:</strong> Manage events,
                attendees, and payments seamlessly.
              </li>
              <li>
                <strong>Automated Notifications:</strong> Send reminders and
                updates to attendees.
              </li>
              <li>
                <strong>Analytics & Reports:</strong> Gain insights into event
                performance and audience engagement.
              </li>
            </ul>
          </div>

          <div class="section">
            <h2>Why Choose Us?</h2>
            <p>
              We are dedicated to making event management hassle-free with our
              advanced features and user-friendly platform. Whether you’re an
              event planner, business, or attendee, our system ensures a
              seamless event experience from start to finish.
            </p>
          </div>

          <div class="section">
            <h2>Meet Our Team</h2>
            <div class="team">
              <div class="team-member">
                <h3>John Doe</h3>
                <p>Founder & CEO</p>
              </div>
              <div class="team-member">
                <h3>Jane Smith</h3>
                <p>Head of Marketing</p>
              </div>
              <div class="team-member">
                <h3>Emily Johnson</h3>
                <p>Lead Developer</p>
              </div>
            </div>
          </div>

          <div class="cta">
            <h2>Get Started Today!</h2>
            <p>
              Join our platform to organize and attend incredible events
              effortlessly.
            </p>
            <a href="/events">Explore Events</a>
          </div>
        </div>
    
    </div>
  );
}

export default About