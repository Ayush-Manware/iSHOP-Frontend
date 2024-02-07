import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dynamic = () => {
  const productId = Number(useParams().id);

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    axios(`https://e-comm-gc3t.onrender.com/all`)
      .then((res) => setProductDetails(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  console.log(productDetails);

  return (
    <div className="dynamicComponentContainer">
      {productDetails
        .filter((f) => f.id === productId)
        .map((item, index) => (
          <div key={index} className="dynamicChildOne">
            <img src={item.image} alt="Err-/" className="dynamicImage" />

            <div className="dynamicSecondDiv">
              <div className="dynamicTwoDiv">
                <h3>Key features</h3>
                <ul>
                  <li> {item.key1}</li>
                  <li> {item.key2}</li>
                  <li> {item.key3}</li>
                  <li> {item.key4}</li>
                  <li> {item.key5}</li>
                  <li>{item.title}</li>
                  <li>{item.subCategory}</li>
                  <li>{item.category}</li>
                  <li>{item.Cellular_Technology}</li>
                  <li>{item.Operating_System}</li>
                  <li>{item.Network_Service_Provider}</li>
                </ul>
              </div>
              <p>
                <b>{item.heading}</b>
              </p>
              <p>Price : {item.price}</p>
              <p>Rating : {item.rating}</p>
              <p>Material care : {item.Material_Care}</p>
              <button className="btn">Place Order</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dynamic;
