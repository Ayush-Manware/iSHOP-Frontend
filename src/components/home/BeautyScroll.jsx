import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const BeautyScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const BeautyProduct = data.filter(
    (f) => f.category === "beautyProduct" && f.id <= 185
  );

  useEffect(() => {
    axios("http://localhost:2100/all")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
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
    <div className='sliderOne'>
      {loading ? (
        <div className="loader-container">
          <ClipLoader color="#000" loading={loading} size={35} />
        </div>
      ) : (
        <Slider {...settings} className='sliderContainer'>
          {BeautyProduct.map((item, index) => (
            <Link key={index}>
              <div className="homeCardContainer">
                <img src={item.image} alt="Err-/" className="cardImage" />
                <h5 className='productInfo'>
                  <span className="cardHeading">{item.title}</span>
                  <span className="cardPrice">₹ {item.price}</span>
                </h5>
                <button className='homeAddtocart'>Add to cart</button>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default BeautyScroll;
