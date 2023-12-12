import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../redux/Slice';

const BeautyScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const BeautyProduct = data.filter(
    (f) => f.category === "beautyProduct" && f.id <= 185
  );

  useEffect(() => {
    axios("https://e-comm-gc3t.onrender.com/all")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(addTocart(item));
  };

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
                <div className="cardHeading">{item.title.slice(0, 25)}...</div>{" "}
            <div className="cardPrice">₹ {item.price}</div>
                </h5>
                <Link key={index} to={`/dynamic/${item.id}`} className="buyBtnLink">
            <button className="buyBtn">Buy now</button>
          </Link>
              <button className="cartBtn" onClick={() => handleCart(item)}>
            Add to cart
          </button>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default BeautyScroll;
