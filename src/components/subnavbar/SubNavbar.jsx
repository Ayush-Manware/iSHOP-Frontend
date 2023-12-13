import React from "react";
import { NavLink } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div className="subNavbar">
      <h1>Clouds.com</h1>
      <div className="innerSubNavbar">
        <div className="all">
          <NavLink to={"/all"}>Home</NavLink>
        </div>


        <div className="fashionListDiv">
          <NavLink className="fashionLink">Fashion</NavLink>
          <div className="fashionList">
            <NavLink to={"/mensFashion"}>
              Mens Section <i className="fa-solid fa-angle-right"></i>
            </NavLink>
            <NavLink to={"/ladiesFashion"}>
            Ladies Section<i className="fa-solid fa-angle-right"></i>
            </NavLink>
            <NavLink to={"/kidsFashion"}>
              Kids Section <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </div>
        </div>

        <div className="fashionListDiv">
          <NavLink className="fashionLink">Electronics</NavLink>
          <div className="fashionList">
            <NavLink to={"/mobiles"}>
              Mobiles <i className="fa-solid fa-angle-right"></i>
            </NavLink>
            <NavLink to={"/laptops"}>
              Laptops <i className="fa-solid fa-angle-right"></i>
            </NavLink>
            <NavLink to={"/watches"}>
              Watches <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </div>
        </div>

        <div className="fashionListDiv">
          <NavLink className="fashionLink">Grocery</NavLink>
          <div className="fashionList">
            <NavLink to={"/beverages"}>
              Beverages <i className="fa-solid fa-angle-right"></i>
            </NavLink>
            <NavLink to={"/indianFood"}>
            Indian <i className="fa-solid fa-angle-right"></i>
            </NavLink>
            <NavLink to={"/snacks"}>
              Snacks <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </div>
        </div>

        <div className="fashionListDiv">
          <NavLink className="fashionLink">Beauty & Fragrance</NavLink>
          <div className="fashionList">
            <NavLink to={"/mac"}>
              Mac <i className="fa-solid fa-angle-right"></i>
            </NavLink>
            <NavLink to={"/swissBeauty"}>
            Swiss Beauty <i className="fa-solid fa-angle-right"></i>
            </NavLink>
            <NavLink to={"/otherBeauty"}>
            other <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SubNavbar;
