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


  console.log(productDetails)
  console.log(productId)
  console.log(filter[0])
  
  return (
    <div className="dynamicComponentContainer">
      {productDetails.filter((f)=> f.id === productId).map((item, index) => (
        <div key={index} className="dynamicChildOne">
          {item.title}
          {item.price}
        </div>
      ))}
      {/* <div className="dynamicChildTwo">
        <div className="dynamicChildTwo">Right</div>
      </div> */}
    </div>
  );
};

export default Dynamic;
