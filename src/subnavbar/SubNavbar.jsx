import React from "react";
import { NavLink } from "react-router-dom";

const SubNavbar = () => {
  return (
   <div className="subNavbar">
    <h1>Clouds.com</h1>
    <div className="innerSubNavbar">
      <NavLink to={"/all"}>Home</NavLink>
      <NavLink to={'/fashion'}>Fashion</NavLink>
      <NavLink to={'/electronics'}>Electronics</NavLink>
      <NavLink to={'/beauty'}>Beauty & Fragrance</NavLink>
      <NavLink to={'/grocerry'}>Grocerry</NavLink>
    </div>
   </div>
  );
};

export default SubNavbar;
