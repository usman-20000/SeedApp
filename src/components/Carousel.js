import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Carousel() {

  const carouselStyle = {
    height: 350
  };

  const imageStyle = {
    height: '100%',  // Ensure the image fills the carousel height
    width: '100%',   // Ensure the image fills the width
    objectFit: 'fill' // Fit the image within the defined area while maintaining aspect ratio
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide" style={{ marginTop: '1%' }} data-bs-ride="carousel" data-bs-interval="4000">
      <div className="carousel-inner" style={carouselStyle}>
        <div className="carousel-item active">
          <img src={require('../../src/assets/images/image4.jpeg')} className="d-block w-100" alt="..." style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src={require('../../src/assets/images/image4.jpeg')} className="d-block w-100" alt="..." style={imageStyle}  />
        </div>
        <div className="carousel-item">
          <img src={require('../../src/assets/images/image4.jpeg')} className="d-block w-100" alt="..." style={imageStyle} />
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
