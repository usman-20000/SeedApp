import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Carousel() {

  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex === 3 ? 1 : prevIndex + 1));
    }, 1000);

    return () => clearInterval(interval); // Cleanup when unmounting
  }, []);

  const carouselStyle = {
    height: 'auto',
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
      <div className="carousel-inner md:h-[390px] h-[200px] rounded-md" >
        <div className={`carousel-item ${index === 1 ? 'active' : ''}`}>
          <img
            src={require('../../src/assets/images/image4.jpeg')}
            className="w-full h-[400px] object-cover rounded-md" // Apply Tailwind styles directly
            alt="..."
          />
        </div>
        <div className={`carousel-item ${index === 2 ? 'active' : ''}`}>
          <img
            src={require('../../src/assets/images/image1.jpeg')}
            className="w-full h-[400px] object-cover rounded-md" // Apply Tailwind styles directly
            alt="..."
          />
        </div>
        <div className={`carousel-item ${index === 3 ? 'active' : ''}`}>
          <img
            src={require('../../src/assets/images/image2.jpeg')}
            className="w-full h-[400px] object-cover rounded-md" // Apply Tailwind styles directly
            alt="..."
          />
        </div>
      </div>
      {/* Carousel controls (optional) */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
