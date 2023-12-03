import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const HomeBestSeller = () => {
  const [getData, setGetData] = useState([]);

  const params = useParams()

  useEffect(() => {
    axios
      .get("http://localhost:2100")
      .then((res) => setGetData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(getData);

  return (
    <>
      <h3 className="bestSeller" >Best Seller</h3>
      <div className="bestSellerDiv">
        {getData.map((item, index) => (
          <div className="bestSellerCard" key={index}>
            <img src={item.image} alt="Err-/" className="bestSellerCardImg" />
            <div className="splitDiv">
              <h4 className="bestSellerCardTitle">{item.title}</h4>
              <h6 className="bestSellerPrice">{item.price}</h6>
            </div>
          </div>
        ))}
      </div>
      <p className="loadMore">load-more...</p>
    </>
  );
};

export default HomeBestSeller;
