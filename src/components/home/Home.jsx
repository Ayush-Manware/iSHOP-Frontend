import React, { Suspense, lazy } from "react";
import Banner from "./Banner";

const ScrollbarComponent = lazy(() => import("./MenFashionScroll"));
const ScrollTwo = lazy(() => import("./LadiesFashionScroll"));
const ElectronicScroll = lazy(() => import("./ElectronicsScroll"));
const BeautyScroll = lazy(() => import("./BeautyScroll"));

const Home = () => {
  return (
    <div className="homeContainer">
      <Banner />
      <div className="homeBody">
        <Suspense fallback={<span class="loader"></span>}>
          <ScrollbarComponent />
          <ScrollTwo />
          <ElectronicScroll />
          <BeautyScroll />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
