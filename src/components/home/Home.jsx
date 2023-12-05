import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import ScrollbarComponent from "./ScrollOne";

const Home = () => {
  const [all, setAll] = useState([]);

  useEffect(() => {
    axios("http://localhost:2100/all")
      .then((res) => setAll(res.data))
      .catch((err) => console.log(err));
  }, []);

  const mensFashion = all.filter(((f) => f.subCategory === "men" && (f.id >= 101 && f.id <= 110)));

  const womensFashion = all.filter(
    (f) => f.subCategory === "woman"
  );

  console.log(womensFashion)

  return (
    <div className="homeContainer">
      <Banner/>
      <ScrollbarComponent/>
      <div className="homeMenScroll homeWomenScroll">
      {womensFashion.map((item, index) => (
          <Link key={index}>
            <div className="homeCardContainer">
              <img src={item.image} alt="Err-/" className="cardImage" />
              <h5><span>₹ {item.price}</span></h5>
              <p>Rating-{item.rating}</p>
              <p>{item.product_name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
