import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import TeamPage from "@/components/TeamSection/TeamPage";
import TeamPage2 from "@/components/TeamSection/TeamPage2";
import TeamPage3 from "@/components/TeamSection/TeamPage3";
import TeamPage4 from "@/components/TeamSection/TeamPage4";
import TeamPage5 from "@/components/TeamSection/TeamPage5";
import TeamPage6 from "@/components/TeamSection/TeamPage6";

import React from "react";

const team = () => {
  return (
    <Layout pageTitle="Ekip">
      <Header />
      <PageHeader page="Ekip" title="Ekibimiz" />
      <TeamPage />
      <TeamPage2 />
      <TeamPage3 />
      <TeamPage4 />
      <TeamPage5 />
      <TeamPage6 />
    </Layout>
  );
};

export default team;
