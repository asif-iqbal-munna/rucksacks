import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import HomeProducts from "../HomeProducts/HomeProducts";
import Reviews from "../Review/Reviews";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <HomeProducts />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
