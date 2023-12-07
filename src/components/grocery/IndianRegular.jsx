import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const IndianBeverages = () => {
  const [data, setData] = useState([]);

  const mobileData = data.filter((f) => f.subCategory === "Indian Regular Food" );

  useEffect(() => {
    axios("https://e-comm-gc3t.onrender.com/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link className="mensFashionMainDiv">
      {mobileData.map((item, index) => (
        <Link key={index}>
          <div className="homeCardContainer">
            <img src={item.image} alt="Err-/" className="cardImage" />
            <h5 className="productInfo">
              {" "}
              <span className="cardHeading">{item.title}</span>{" "}
              <span className="cardPrice">₹ {item.price}</span>
            </h5>
            <button className="homeAddtocart">Add to cart</button>
          </div>
        </Link>
      ))}
    </Link>
  );
};

export default IndianBeverages;
