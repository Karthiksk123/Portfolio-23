import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomeIntro from "../../components/Intro/HomeIntro";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeIntro />
    </div>
  );
};

export default Home;
