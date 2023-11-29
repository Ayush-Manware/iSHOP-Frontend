import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Store from "../components/store/Store";
import Iphone from "../components/iphone/Iphone";
import Macbook from "../components/macbook/Macbook";
import Ipad from "../components/ipad/Ipad";
import Accesories from "../components/accessories/Accesories";
import Dynamic from "./Dynamic";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/store"} element={<Store />} />
        <Route path={"/iphone"} element={<Iphone />} />
        <Route path={"/macbook"} element={<Macbook />} />
        <Route path={"/ipad"} element={<Ipad />} />
        <Route path={"/accesories"} element={<Accesories />} />
        <Route path={'/dynamic/:id'} element={<Dynamic />} />
      </Routes>
    </>
  );
};

export default Routing;
