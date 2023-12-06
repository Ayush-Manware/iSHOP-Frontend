// ScrollbarComponent.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ScrollbarComponent = () => {
  const [data, setData] = useState([]);

  const mensFashion = data.filter(((f) => f.subCategory === "men" && (f.id >= 101 && f.id <= 185)));

  useEffect(() => {
    axios("http://localhost:2100/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div className='sliderOne' >
      <img src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlyCloudyNightV2.svg" alt="logo-//" className='logoTwo' />
      <h5 className='bestSeller'>Featured Products</h5>
      <Slider {...settings} className='sliderContainer'>
        {mensFashion.map((item, index) => (
          <Link key={index}>
            <div className="homeCardContainer">
              <img src={item.image} alt="Err-/" className="cardImage" />
              <h5 className='productInfo'> <span className="cardHeading">{item.heading}</span>  <span className="cardPrice">₹ {item.price}</span></h5>
              <button className='homeAddtocart'>Add to cart</button>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ScrollbarComponent;
