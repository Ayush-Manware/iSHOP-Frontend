import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
const Dynamic = () => {
  const productId = String(useParams().id);

  const [productDetails, setProductDetails] = useState([]);
  
  useEffect(() => {
    axios(`https://e-comm-gc3t.onrender.com/all`)
      .then((res) => setProductDetails(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  const filter = productDetails.filter((f) => f.id  === `${productId}`)
  
  console.log(productId)
  console.log(productDetails)
  console.log(filter)

  return (
    <div className="dynamicComponentContainer">
      {productDetails.filter((f)=> f.id === productId).map((item, index) => (
        <div key={index} className="dynamicChildOne">
          {item.title}
          {item.price}
        </div>
      ))}
    </div>
  );
};

export default Dynamic;
