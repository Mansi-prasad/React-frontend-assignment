import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import NavItems from "../components/NavItems";
import AllPosts from "../components/AllPosts";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <NavItems />
      <AllPosts />
    </div>
  );
};

export default Home;
