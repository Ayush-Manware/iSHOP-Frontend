

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/Slice";

const Mac = () => {
  const [data, setData] = useState([]);

  const mobileData = data.filter((f) => (f.subCategory === "iphone") || (f.subCategory ==="realme") );



  useEffect(() => {
    axios("https://e-comm-gc3t.onrender.com/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(addTocart(item));
  };

  return (
    <div className="mensFashionMainDiv">
      {mobileData.map((item, index) => (
        <div className="homeCardContainer">
          <img src={item.image} alt="Err-/" className="cardImage" />
          <h5 className="productInfo">
            {" "}
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
      ))}
    </div>
  );
};

export default Mac;

