import React, { useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomeIntro from "../../components/Intro/HomeIntro";
import Loader from "../../Loader/Loader";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <HomeIntro />
    </div>
  );
};

export default Home;
