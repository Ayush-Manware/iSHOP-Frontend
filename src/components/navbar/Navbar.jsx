import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import AddToCart from "./AddToCart";

const Navbar = () => {
  const navigate = useNavigate();

  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <>
      <div className="navbar">
        <img
          src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlyCloudyNightV2.svg"
          alt="Err-/"
          className="logoImg"
        />
        <div className="navRight">
          {auth ? (
            // <ul className="navbarUL">
            //   <li>
            //     <NavLink to={"/"}>Products</NavLink>
            //   </li>
            //   <li>
            //     <NavLink to={"/add"}>Add Product</NavLink>
            //   </li>
            //   <li>
            //     <NavLink to={"/update"}>Update Product</NavLink>
            //   </li>

            //   <li>
            //     <NavLink to={"/profile"}>Profile</NavLink>
            //   </li>
            //   <li>
            //     <NavLink to={"/signup"} onClick={logout}>
            //       Logout: {JSON.parse(auth).name}
            //     </NavLink>
            //   </li>
            // </ul>
            <div className="afterLogin">
              <SearchBar/>
              <AddToCart/>
              <Profile/>
            </div>
          ) : (
            <ul className="navbarUL">
              <li>
                {auth ? (
                  <NavLink to={"/signup"} onClick={logout}>
                    Logout
                  </NavLink>
                ) : (
                  <NavLink to={"/signup"}>Sign up</NavLink>
                )}
              </li>
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
