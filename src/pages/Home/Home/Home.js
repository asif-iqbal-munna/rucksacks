import React from "react";
import Header from "../../shared/Header/Header";
import Banner from "../Banner/Banner";
import HomeProducts from "../HomeProducts/HomeProducts";
import Reviews from "../Review/Reviews";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <HomeProducts />
      <Reviews />
    </>
  );
};

export default Home;
