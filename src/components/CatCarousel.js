import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function CatCarousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0); // Start from 0

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === props?.data?.length - 1 ? 0 : prevIndex + 1));
        }, 1000);

        return () => clearInterval(interval); // Cleanup when unmounting
    }, [props?.data?.length]);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
            <div className="carousel-inner h-[120px] rounded-md">
                {props?.data?.map((item, i) => (
                    <div key={i} className={`carousel-item ${currentIndex === i ? 'active' : ''}`}>
                        <img
                            src={item}
                            className="w-full h-[120px] object-cover rounded-md"
                            alt={`Slide ${i}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
