import React from "react";
import Language from "./Language";
import Currency from "./Currency";
import Profile from "./Profile";
import Bag from "./Bag";
import Search from "./Search";

const TopbarMain = () => {
  return (
    <div className="topBarMain">
      <div className="topBarLeft">
        <Language />
        <Currency />
      </div>
      <div className="topBarRight">
        <Profile />
        <Bag />
        <Search />
      </div>
    </div>
  );
};

export default TopbarMain;
