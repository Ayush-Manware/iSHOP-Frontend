import React from "react";
import {NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  const auth = localStorage.getItem('user')
  const logout = ()=>{
    localStorage.clear()
    navigate('/signup')
  }

  return (
    <>
        <div className="navbar">
          <ul className="navbarUL">
            <li>
              <NavLink to={'/'}>Products</NavLink>
            </li>
            <li>
              <NavLink to={'/add'}>Add Product</NavLink>
            </li>
            <li>
              <NavLink to={'/update'}>Update Product</NavLink>
            </li>
        
            <li>
              <NavLink to={'/profile'}>Profile</NavLink>
            </li>
           <li>{auth ?  <NavLink to={'/signup'} onClick={logout}>Logout</NavLink> : <NavLink to={'/signup'}>Sign up</NavLink> }</li>  
          </ul>
        </div>
    </>
  );
};

export default Navbar;
