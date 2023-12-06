import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MensFashion = () => {
  const [data, setData] = useState([]);

  const mensFashion = data.filter((f) => f.subCategory === "woman");

  useEffect(() => {
    axios("http://localhost:2100/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link className="mensFashionMainDiv">
      {mensFashion.map((item, index) => (
        <Link key={index}>
          <div className="homeCardContainer">
            <img src={item.image} alt="Err-/" className="cardImage" />
            <h5 className="productInfo">
              {" "}
              <span className="cardHeading">{item.heading}</span>{" "}
              <span className="cardPrice">₹ {item.price}</span>
            </h5>
            <button className="homeAddtocart">Add to cart</button>
          </div>
        </Link>
      ))}
    </Link>
  );
};

export default MensFashion;
