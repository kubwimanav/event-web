import React from 'react'
import Header from './Header';
import image1 from "../assets/images/pexels-bertellifotografia-2608517.jpg";
import image2 from "../assets/images/pexels-asadphoto-169211.jpg";
import image3 from "../assets/images/pexels-designecologist-1627935.jpg";
import image4 from "../assets/images/pexels-ywanphoto-57980.jpg";
import image5 from "../assets/images/pexels-jplenio-2957848.jpg";
import image6 from "../assets/images/pexels-thibault-trillet-44912-167478.jpg";
import image7 from "../assets/images/pexels-runffwpu-2403753.jpg";
import image8 from "../assets/images/pexels-samaraagenstvo-feeria-1261201-2399097.jpg";
import image9 from "../assets/images/pexels-thatguycraig000-2306281.jpg";
import image10 from "../assets/images/pexels-wolfgang-1002140-2747449.jpg";
import '../styles/Home.css'
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
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
      <div className="main">
        <div className="welcome">
          <h1>welcome to the event managment system</h1>
          <div className="search-input-button">
            <input
              type="text"
              placeholder="Search events"
              className="search-input"
            />
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
        <About />

        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home