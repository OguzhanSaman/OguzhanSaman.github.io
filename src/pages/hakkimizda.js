import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import OurMissionTwo from "@/components/OurMission/OurMissionTwo";

import PageHeader from "@/components/Reuseable/PageHeader";
import TeamOne from "@/components/TeamSection/TeamOne";

import WorkTogetherTwo from "@/components/WorkTogether/WorkTogetherTwo";
import React from "react";
import WelcomeThree from "@/components/WelcomeSection/WelcomeThree";
import HowWeWorks from "@/components/HowWeWorks/HowWeWorks";


const About = () => {
  return (
    <Layout pageTitle="Hakkımızda">
      <Header />
      <PageHeader page="Hakkımızda" title="Hakkımızda" />
      <WelcomeThree />
      <div className="placeholder"></div>
      <WorkTogetherTwo />
      <HowWeWorks />
      <OurMissionTwo className="our-mission-three" shape={1} />
      <TeamOne />
    </Layout>
  );
};

export default About;
