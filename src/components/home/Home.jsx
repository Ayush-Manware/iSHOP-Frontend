import React from "react";
import CarouselComponent from "./BannerCrousel";
import HomeBestSeller from "./HomeBestSeller";

const Home = () => {
  return (
    <div className="homeContainer">
      <CarouselComponent />
      <HomeBestSeller />
    </div>
  );
};

export default Home;
