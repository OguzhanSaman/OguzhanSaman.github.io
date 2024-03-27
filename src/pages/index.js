import FindSolution from "@/components/FindSolution/FindSolution";
import MainHeader from "@/components/Header/MainHeader";
import Layout from "@/components/Layout/Layout";
import MainSliderThree from "@/components/MainSlider/MainSliderThree";
import ServicesTwo from "@/components/ServicesSection/ServicesTwo";
import React from "react";
import Image from "next/image";
import l500award from "../assets/images/l500award.png";


const Home3 = () => {
  return (
    <Layout pageTitle="Ana Sayfa" footerClassName="site-footer-three">
      <MainHeader mainMenuClass="main-menu-three" />
      <div className="main-slider-wrapper"> {/* Add a wrapper for positioning */}
        <MainSliderThree />
      </div>
      <FindSolution />
      <ServicesTwo />
      <div className="award-wrapper">
        <Image src = {l500award.src} alt="Legal 500" width={200} height={225}/>
        <p className="award-text">KÖKSAL & PARTNERS, Legal 500 EMEA - 2024 yılı sonuçlarında IT & Telekom uygulama alanında tavsiye edilmiştir.</p>
      </div>
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
