import React from 'react'
import'../assets/styles/Contact.css'
function Contact() {
  return (
      <div>
          
     <div  className="contact-page">
            <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7955.7182536051005!2d30.057821374008412!3d-1.9593383462054974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5272075117f%3A0x7a1ca9caa3bb529c!2sChoose%20Kigali!5e0!3m2!1sen!2srw!4v1739530460697!5m2!1sen!2srw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Your Name" required/>
                    <input type="email" placeholder="Your Email" required/>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact