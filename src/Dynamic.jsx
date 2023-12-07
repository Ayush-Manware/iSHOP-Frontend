import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dynamic = () => {
  const productId = useParams().id;

  const [productDetails, setProductDetails] = useState([]);

  const dynamicData = productDetails.find((f)=> f.id === productId)

  console.log(dynamicData)

  useEffect(() => {
    axios(`https://e-comm-gc3t.onrender.com/all`)
      .then((res) => setProductDetails(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div className="dynamicComponentContainer">
      {productDetails.map((item, index) => {
        <div className="dynamicChildOne">
          {item.title}
        </div>;
      })}
      <div className="dynamicChildTwo">
        <div className="dynamicChildTwo">Right</div>
      </div>
    </div>
  );
};

export default Dynamic;
