// ScrollbarComponent.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ElectronicScroll = () => {
  const [data, setData] = useState([]);


  const womensFashion = data.filter(
    (f) => (f.category === "electronics") && (f.id <= 100)
  );

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
      <Slider {...settings} className='sliderContainer'>
        {womensFashion.map((item, index) => (
          <Link key={index}>
            <div className="homeCardContainer">
              <img src={item.image} alt="Err-/" className="cardImage" />
              <h5 className='productInfo'> <span className="cardHeading">{item.title}</span>  <span className="cardPrice">₹ {item.price}</span></h5>
              <button className='homeAddtocart'>Add to cart</button>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ElectronicScroll;