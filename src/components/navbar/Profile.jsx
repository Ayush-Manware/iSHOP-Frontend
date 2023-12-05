import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      {" "}
      <NavLink to={"/signup"} onClick={logout} className="logout">
        Logout: {JSON.parse(auth).name}
      </NavLink>
    </div>
  );
};

export default Profile;
