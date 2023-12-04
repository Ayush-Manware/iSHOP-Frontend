import React from "react";
import {NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <div className="navbar">
          <ul className="navbarUL">
            <li>
              <NavLink to={'/'}>Product</NavLink>
            </li>
            <li>
              <NavLink to={'/add'}>Add Product</NavLink>
            </li>
            <li>
              <NavLink to={'/update'}>Update Product</NavLink>
            </li>
            <li>
              <NavLink to={'/logout'}>Logout</NavLink>
            </li>
            <li>
              <NavLink to={'/profile'}>Profile</NavLink>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Navbar;
