// ScrollbarComponent.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ScrollbarComponent = () => {
  const [data, setData] = useState([]);

  const mensFashion = data.filter(((f) => f.subCategory === "men" && (f.id >= 101 && f.id <= 110)));

  const womensFashion = data.filter(
    (f) => f.subCategory === "woman"
  );

  useEffect(() => {
    axios("http://localhost:2100/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className='sliderOne' >
      <h5 className='bestSeller'>Best Seller</h5>
      <Slider {...settings} >
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
