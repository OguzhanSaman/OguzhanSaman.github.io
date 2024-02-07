import BrandOne from "@/components/BrandSection/BrandOne";
import CaseOne from "@/components/CaseSection/CaseOne";

import FindSolution from "@/components/FindSolution/FindSolution";

import Header from "@/components/Header/Header";

import Layout from "@/components/Layout/Layout";
import MainSliderThree from "@/components/MainSlider/MainSliderThree";
import OurMissionTwo from "@/components/OurMission/OurMissionTwo";
import ServicesTwo from "@/components/ServicesSection/ServicesTwo";
import TestimonialThree from "@/components/TestimonialSection/TestimonialThree";
import React from "react";

// Home3 component
const Home3 = () => {
  return (
    <Layout pageTitle="Ana Sayfa" footerClassName="site-footer-three">
      <Header mainMenuClass="main-menu-three" />
      <div className="main-slider-wrapper"> {/* Add a wrapper for positioning */}
        <MainSliderThree />
      </div>
      <FindSolution />
      <ServicesTwo />
      <OurMissionTwo className="our-mission-three" shape={1} />
      {/* <TestimonialThree /> */}
      {/* <BrandOne
        className="brand-two"
        showShape
        innerClassName="brand-two__inner"
      /> */}
    </Layout>
  );
};

export default Home3;
