import React from "react";
import Hero from "./Hero/Hero";
import NavogationPlatorm from "./platform/NavogationPlatorm";
import NavigationCommunity from "./community/NavigationCommunity";
import BottomBanner from "./BottomBanner";

const HomeIndex = () => {
  return (
    <>
      <Hero />
      <NavogationPlatorm />
      <NavigationCommunity />
      <BottomBanner />
    </>
  );
};

export default HomeIndex;
