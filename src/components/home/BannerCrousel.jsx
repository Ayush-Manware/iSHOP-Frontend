import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const crouselImages = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/c91f6eaedc11b522.jpeg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bb93b2cd2cf25e81.png?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2d532e1aaa8cc8e7.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1575923f761f2f2a.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/62fdd66868594b24.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9f2d8a698cd97710.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/c91f6eaedc11b522.jpeg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b21b5be304d115cd.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bb93b2cd2cf25e81.png?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2d532e1aaa8cc8e7.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1575923f761f2f2a.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/62fdd66868594b24.jpg?q=20",
  ];

  return (
    <Slider {...settings} className="bannerSlider">
      <div>
        <img src={crouselImages[0]} alt="Slide 1" />
      </div>
      <div>
        <img src={crouselImages[1]} alt="Slide 2" />
      </div>
      <div>
        <img src={crouselImages[2]} alt="Slide 3" />
      </div>
      <div>
        <img src={crouselImages[3]} alt="Slide 4" />
      </div>
      <div>
        <img src={crouselImages[4]} alt="Slide 5" />
      </div>
      <div>
        <img src={crouselImages[5]} alt="Slide 6" />
      </div>
      <div>
        <img src={crouselImages[6]} alt="Slide 7" />
      </div>
      <div>
        <img src={crouselImages[7]} alt="Slide 8" />
      </div>
      <div>
        <img src={crouselImages[8]} alt="Slide 9" />
      </div>
      <div>
        <img src={crouselImages[9]} alt="Slide 10" />
      </div>
      <div>
        <img src={crouselImages[10]} alt="Slide 11" />
      </div>
      <div>
        <img src={crouselImages[11]} alt="Slide 12" />
      </div>
    </Slider>
  );
};

export default CarouselComponent;
