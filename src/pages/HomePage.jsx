import React from "react";
import HeroSection from "../components/home/HeroSection";
import MusicSection from "../components/home/MusicSection";

const HomePage = () => {
  return (
    <>
      <div style={{ background: "rgb(14, 2, 15)" }}>
        <HeroSection></HeroSection>
        <MusicSection></MusicSection>
      </div>
    </>
  );
};

export default HomePage;
