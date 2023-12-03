import React from "react";
import CarouselComponent from "./BannerCrousel";
import HomeBestSeller from "./HomeBestSeller";
import ComponentThree from "./ComponentThree";

const Home = () => {
  return (
    <div className="homeContainer">
      <CarouselComponent />
      <HomeBestSeller />
      <ComponentThree />
    </div>
  );
};

export default Home;
