import React from 'react'
import Header from './Header'
import image1 from "../images/pexels-bertellifotografia-2608517.jpg";
import image2 from "../images/pexels-asadphoto-169211.jpg";
import image3 from "../images/pexels-designecologist-1627935.jpg";
import image4 from "../images/pexels-ywanphoto-57980.jpg";
import image5 from "../images/pexels-jplenio-2957848.jpg";
import image6 from "../images/pexels-thibault-trillet-44912-167478.jpg";
import image7 from "../images/pexels-runffwpu-2403753.jpg"
import image8 from "../images/pexels-samaraagenstvo-feeria-1261201-2399097.jpg";
import image9 from "../images/pexels-thatguycraig000-2306281.jpg";
import image10 from "../images/pexels-wolfgang-1002140-2747449.jpg"
import '../assets/styles/Home.css'
import Footer from './Footer';
function Home() {
  const cards = [
    {
      name: "Gospel Music",
      description:
        "The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”",
      image: image1,
    },
    {
      name: "Gospel Music",
      description:
        "The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”",
      image:image2,
    },
    {
      name: "Gospel Music",
      description:
        "The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”",
      image: image3,
    },
    {
      name: "Gospel Music",
      description:
        "The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”",
      image: image4,
    },
    {
      name: "Gospel Music",
      description:
        "The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”",
      image: image5,
    },
    {
      name: "Gospel Music",
      description:
        "The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”",
      image: image6,
    },
    {
      name: "Gospel Music",
      description:
        "The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”",
      image:image7,
    },
    {
      name: "Gospel Music",
      description:
        "The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”",
      image: image8,
    },
    {
      name: "Gospel Music",
      description:
        "The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”",
      image: image9,
    },
    {
      name: "Gospel Music",
      description:
        "The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”",
      image: image10,
    },
  ];

  return (
    <div>
      <Header />
    <div className='main'>
      <div className="welcome">
        <h1>welcome to the event managment system</h1>
        <div className="search-input-button">
          <input type="text" placeholder="Search events" className="search-input" />
          <button className="search-button">search</button>
        </div>
      </div>
      <div className="category">
        <button>Category 1</button>
        <button>Category 2</button>
        <button>Category 3</button>
        <button>Category 4</button>
        <button>Category 5</button>
        <button>Category 6</button>
      </div>
        <div className="event-paragraph">
          <div className="event-cards">
            {cards.map((card) => (
              <div className="event-card">
                <img src={card.image} alt="" />
                <div className="event-card-text">
                  <h4>{card.name}</h4>
                  <p>{card.description}</p>
                  <button className="event-card-button">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* <Contact/> */}
      </div>

      {/* <div class="event-card">
            <img src="images/pexels-asadphoto-169211.jpg" alt="">
              <div class="event-card-text">
                <h4>Gospel Music</h4>
                <p>The Liturgy helps us to
                  “rediscover our identity as
                  disciples of the Risen Lord”,
                </p>
                <button class="event-card-button">View</button>
              </div>
          </div>



          <div class="event-card">
            <img src="images/pexels-designecologist-1627935.jpg" alt="">
              <div class="event-card-text">
                <h4>Gospel Music</h4>
                <p>The Liturgy helps us to
                  “rediscover our identity as
                  disciples of the Risen Lord”</p>
                <button class="event-card-button">View</button>
              </div>
          </div>

          <div class="event-card">
            <img src="images/pexels-ywanphoto-57980.jpg" alt="">
              <div class="event-card-text">
                <h4>Gospel Music</h4>
                <p>The Liturgy helps us to
                  “rediscover our identity as
                  disciples of the Risen Lord”</p>
                <button class="event-card-button">View</button>
              </div>
          </div>

          <div class="event-card">
            <img src="images/pexels-jplenio-2957848.jpg" alt="">
              <div class="event-card-text">
                <h4>Gospel Music</h4>
                <p>The Liturgy helps us to
                  “rediscover our identity as
                  disciples of the Risen Lord”</p>
                <button class="event-card-button">View</button>
              </div>
          </div>
        </div>
        <div class="event-cards">
          <div class="event-card">
            <img src="images/pexels-thibault-trillet-44912-167478.jpg" alt="">
              <div class="event-card-text">
                <h4>Gospel Music</h4>
                <p>The Liturgy helps us to
                  “rediscover our identity as
                  disciples of the Risen Lord”</p>
                <button class="event-card-button">View</button>
              </div>
          </div>
  
          <div class="event-card">
            <img src="images/pexels-runffwpu-2403753.jpg" alt="">
              <div class="event-card-text">
                <h4>Gospel Music</h4>
                <p>The Liturgy helps us to
                  “rediscover our identity as
                  disciples of the Risen Lord”,
                </p>
                <button class="event-card-button">View</button>
              </div>
          </div>



          <div class="event-card">
            <img src="images/pexels-samaraagenstvo-feeria-1261201-2399097.jpg" alt="">
              <div class="event-card-text">
                <h4>Gospel Music</h4>
                <p>The Liturgy helps us to
                  “rediscover our identity as
                  disciples of the Risen Lord”</p>
                <button class="event-card-button">View</button>
              </div>
          </div>

          <div class="event-card">
            <img src="images/pexels-thatguycraig000-2306281.jpg" alt="">
              <div class="event-card-text">
                <h4>Gospel Music</h4>
                <p>The Liturgy helps us to
                  “rediscover our identity as
                  disciples of the Risen Lord”</p>
                <button class="event-card-button">View</button>
              </div>
          </div>

          <div class="event-card">
            <img src="images/pexels-wolfgang-1002140-2747449.jpg" alt="">
              <div class="event-card-text">
                <h4>Gospel Music</h4>
                <p>The Liturgy helps us to
                  “rediscover our identity as
                  disciples of the Risen Lord”</p>
                <button class="event-card-button">View</button>
              </div>
          </div>
        </div>
      </div> */}
      <Footer/>
    </div>
  );
}

export default Home