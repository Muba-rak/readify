import React from "react";
import FeaturedBooks from "../components/FeaturedBooks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import News from "../components/News";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
      <News />
    </div>
  );
};

export default Home;
