import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomeIntro from "../../components/Intro/HomeIntro";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HomeIntro />
      <Footer />
    </div>
  );
};

export default Home;
