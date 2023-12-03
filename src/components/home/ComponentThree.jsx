import React from "react";
import { Link } from "react-router-dom";

const ComponentThree = () => {
  return (
    <div className="thirdComponent">
      <div className="thirdDivOne">
        <h2 className="thirdCompoHeading">i Phone 15 Plus</h2>
        <p>Performance and design taken to right edge.</p>
        <Link to={"/ShopNow"}>shop now</Link>
      </div>
      <img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" alt="Err-/" />
    </div>
  );
};

export default ComponentThree;
