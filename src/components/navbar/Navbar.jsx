import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import SearchBar from "./SearchBar";
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
            <div className="afterLogin">
              {/* <SearchBar/> */}
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
