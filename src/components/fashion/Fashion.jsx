import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Fashion = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:2100/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []); 

  return( 
  <div className="fashionDiv">
    
  </div>
  );
};

export default Fashion;
