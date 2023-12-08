import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/Slice";

const Mac = () => {
  const [data, setData] = useState([]);

  const mobileData = data.filter((f) => f.subCategory === "Mac");

  useEffect(() => {
    axios("https://e-comm-gc3t.onrender.com/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(addTocart(item));
    // navigate("/addtocart");
  };


  return (
    <div className="mensFashionMainDiv">
      {mobileData.map((item, index) => (
        <div className="homeCardContainer">
          <img src={item.image} alt="Err-/" className="cardImage" />
          <h5 className="productInfo">
            {" "}
            <span className="cardHeading">{item.title}</span>{" "}
            <span className="cardPrice">₹ {item.price}</span>
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
